// src/components/ThreeScene.tsx (version optimisée sans détection mobile)
'use client'

import { useRef, useEffect, useCallback, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib'

interface ThreeSceneProps {
  modelPath: string
  startZ?: number
  endZ?: number
  rotationSpeed?: number
}

export const ThreeScene: React.FC<ThreeSceneProps> = ({ 
  modelPath,
  startZ = 0.15,
  endZ = 0.88,
  rotationSpeed = 0
}) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    model: THREE.Group | null
    animationId: number | null
    lastScrollY: number
    isScrolling: boolean
    scrollTimeout: NodeJS.Timeout | null
  } | null>(null)

  // Fonction de mise à jour du zoom avec throttling
  const updateZoom = useCallback(() => {
    if (!sceneRef.current) return
    
    const scrollY = window.scrollY
    const lastScrollY = sceneRef.current.lastScrollY || 0
    
    // Skip si le changement est trop petit (évite les micro-mouvements)
    if (Math.abs(scrollY - lastScrollY) < 1) return
    
    sceneRef.current.lastScrollY = scrollY
    
    const docHeight = document.body.scrollHeight - window.innerHeight
    const scrollFrac = docHeight > 0 ? Math.max(0, Math.min(1, scrollY / docHeight)) : 0
    
    // Easing optimisé
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)
    const smoothFrac = easeOutQuart(scrollFrac)
    
    sceneRef.current.camera.position.z = startZ + smoothFrac * (endZ - startZ)
  }, [startZ, endZ])

  // Throttling du scroll
  const throttledUpdateZoom = useCallback(() => {
    if (!sceneRef.current) return
    
    // Marquer qu'on est en train de scroller
    sceneRef.current.isScrolling = true
    
    // Clear le timeout précédent
    if (sceneRef.current.scrollTimeout) {
      clearTimeout(sceneRef.current.scrollTimeout)
    }
    
    // Appliquer le zoom immédiatement
    updateZoom()
    
    // Marquer la fin du scroll après un délai
    sceneRef.current.scrollTimeout = setTimeout(() => {
      if (sceneRef.current) {
        sceneRef.current.isScrolling = false
      }
    }, 150)
  }, [updateZoom])

  // Fonction de redimensionnement optimisée
  const handleResize = useCallback(() => {
    if (!sceneRef.current) return
    
    const { camera, renderer } = sceneRef.current
    const width = window.innerWidth
    const height = window.innerHeight
    
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }, [])

  // Boucle d'animation optimisée
  const animate = useCallback(() => {
    if (!sceneRef.current) return

    const { scene, camera, renderer, model } = sceneRef.current
    
    sceneRef.current.animationId = requestAnimationFrame(animate)
    
    // Rotation optionnelle
    if (model && rotationSpeed) {
      model.rotation.y += rotationSpeed
    }

    renderer.render(scene, camera)
  }, [rotationSpeed])

  useEffect(() => {
    if (!mountRef.current) return

    // Initialisation de la scène
    const scene = new THREE.Scene()
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(0, 0, startZ)
    camera.lookAt(0, 0, 0) // S'assurer que la caméra regarde vers le centre

    // Renderer avec optimisations
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
      stencil: false,
      depth: true,
      logarithmicDepthBuffer: false
    })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = false
    renderer.outputColorSpace = THREE.SRGBColorSpace
    
    // Lumière
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    scene.add(ambientLight)

    // Ajouter au DOM IMMÉDIATEMENT
    mountRef.current.appendChild(renderer.domElement)

    // Stocker les références
    sceneRef.current = {
      scene,
      camera,
      renderer,
      model: null,
      animationId: null,
      lastScrollY: 0,
      isScrolling: false,
      scrollTimeout: null
    }

    // CHARGER LE MODÈLE EN PRIORITÉ ABSOLUE
    const loader = new GLTFLoader()
    loader.load(
      modelPath,
      (gltf) => {
        if (sceneRef.current) {
          // Optimisations du modèle
          gltf.scene.traverse((child: THREE.Object3D) => {
            if (child instanceof THREE.Mesh) {
              child.castShadow = false
              child.receiveShadow = false
              child.frustumCulled = true
              
              if (child.material instanceof THREE.Material) {
                child.material.transparent = false
              }
              
              // Optimiser la géométrie
              if (child.geometry instanceof THREE.BufferGeometry) {
                child.geometry.computeBoundingBox()
                child.geometry.computeBoundingSphere()
              }
            }
          })

          sceneRef.current.model = gltf.scene
          
          // Centrer et redimensionner le modèle
          const box = new THREE.Box3().setFromObject(gltf.scene)
          const center = box.getCenter(new THREE.Vector3())
          const size = box.getSize(new THREE.Vector3())
          
          // Centrer le modèle à l'origine
          gltf.scene.position.sub(center)
          
          // Ajuster l'échelle pour qu'il soit visible
          const maxDimension = Math.max(size.x, size.y, size.z)
          const scale = 2 / maxDimension // Ajustez cette valeur selon vos besoins
          gltf.scene.scale.setScalar(scale)
          
          sceneRef.current.scene.add(gltf.scene)
          setIsLoaded(true)
        }
      },
      // Progress callback pour un feedback visuel
      (progress) => {
        console.log('Chargement modèle 3D :', Math.round((progress.loaded / progress.total) * 100) + '%')
      },
      (error) => {
        console.error('Erreur chargement modèle:', error)
        setIsLoaded(true) // Continuer même en cas d'erreur
      }
    )

    // Event listeners optimisés
    window.addEventListener('scroll', throttledUpdateZoom, { 
      passive: true,
      capture: false 
    })
    window.addEventListener('resize', handleResize, { passive: true })
    
    // Appel initial
    updateZoom()
    
    // Démarrer l'animation IMMÉDIATEMENT
    animate()

    // Cleanup amélioré
    return () => {
      window.removeEventListener('scroll', throttledUpdateZoom)
      window.removeEventListener('resize', handleResize)
      
      if (sceneRef.current) {
        if (sceneRef.current.scrollTimeout) {
          clearTimeout(sceneRef.current.scrollTimeout)
        }
        
        if (sceneRef.current.animationId) {
          cancelAnimationFrame(sceneRef.current.animationId)
        }
        
        // Nettoyage WebGL complet
        sceneRef.current.scene.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry?.dispose()
            if (Array.isArray(child.material)) {
              child.material.forEach(material => material?.dispose())
            } else {
              child.material?.dispose()
            }
          }
        })
        
        sceneRef.current.renderer.dispose()
        sceneRef.current.renderer.forceContextLoss()
        
        // Retirer du DOM
        if (mountRef.current && mountRef.current.contains(sceneRef.current.renderer.domElement)) {
          mountRef.current.removeChild(sceneRef.current.renderer.domElement)
        }
      }
    }
  }, [modelPath, startZ, endZ, updateZoom, throttledUpdateZoom, handleResize, animate])

  return (
    <>
      {/* Loader pendant le chargement */}
      {!isLoaded && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none',
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid rgba(255, 255, 255, 0.3)',
            borderTop: '3px solid rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }} />
        </div>
      )}
      
      <div
        ref={mountRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 1,
          pointerEvents: 'none',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
      
      {/* CSS pour l'animation du loader */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}