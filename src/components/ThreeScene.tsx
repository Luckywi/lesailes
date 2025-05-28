// src/components/ThreeScene.tsx (version ultra-optimisée avec calibrage précis)
'use client'

import { useRef, useEffect, useCallback, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib'

interface ThreeSceneProps {
  modelPath: string
  startZ?: number
  endZ?: number
  rotationSpeed?: number
  scrollSensitivity?: number
}

export const ThreeScene: React.FC<ThreeSceneProps> = ({ 
  modelPath,
  startZ = 0.15,
  endZ = 0.88,
  rotationSpeed = 0,
  scrollSensitivity = 2
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
    maxScrollHeight: number // ✅ AJOUT pour calibrage précis
    lastKnownScrollHeight: number // ✅ Cache pour éviter les recalculs
  } | null>(null)

  // ✅ FONCTION OPTIMISÉE pour calculer la hauteur de scroll réelle
  const getMaxScrollHeight = useCallback(() => {
    // Utiliser plusieurs méthodes pour garantir la précision
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    )
    
    const viewportHeight = window.innerHeight
    const maxScroll = Math.max(0, documentHeight - viewportHeight)
    
    return maxScroll
  }, [])

  // ✅ FONCTION DE MISE À JOUR DU ZOOM ULTRA-OPTIMISÉE
  const updateZoom = useCallback(() => {
    if (!sceneRef.current) return
    
    const scrollY = window.scrollY
    const lastScrollY = sceneRef.current.lastScrollY || 0
    
    // Skip si changement trop faible (optimisation ressources)
    if (Math.abs(scrollY - lastScrollY) < scrollSensitivity) return
    
    sceneRef.current.lastScrollY = scrollY
    
    // ✅ CALIBRAGE PRÉCIS : Recalculer la hauteur seulement si nécessaire
    let maxScrollHeight = sceneRef.current.maxScrollHeight
    const currentDocHeight = document.body.scrollHeight
    
    // Mise à jour dynamique de la hauteur si la page a changé
    if (currentDocHeight !== sceneRef.current.lastKnownScrollHeight) {
      maxScrollHeight = getMaxScrollHeight()
      sceneRef.current.maxScrollHeight = maxScrollHeight
      sceneRef.current.lastKnownScrollHeight = currentDocHeight
    }
    
    // ✅ CALCUL PRÉCIS : scrollY / maxScrollHeight donne un ratio 0->1 parfait
    const scrollFraction = maxScrollHeight > 0 ? Math.max(0, Math.min(1, scrollY / maxScrollHeight)) : 0
    
    // ✅ EASING OPTIMISÉ pour fluidité maximale
    const smoothFraction = scrollFraction * scrollFraction * (3 - 2 * scrollFraction) // smoothstep
    
    // ✅ POSITION FINALE : startZ -> endZ parfaitement calibré
    const newZ = startZ + smoothFraction * (endZ - startZ)
    
    // Arrondir pour éviter micro-mouvements et optimiser rendu
    const roundedZ = Math.round(newZ * 10000) / 10000 // Précision à 4 décimales
    
    sceneRef.current.camera.position.z = roundedZ
    
    // ✅ DEBUG optionnel (à retirer en production)
    if (process.env.NODE_ENV === 'development') {
      console.log(`Scroll: ${scrollY}/${maxScrollHeight} (${(scrollFraction * 100).toFixed(1)}%) -> Z: ${roundedZ}`)
    }
  }, [startZ, endZ, scrollSensitivity, getMaxScrollHeight])

  // ✅ THROTTLING ULTRA-OPTIMISÉ avec RAF
  const throttledUpdateZoom = useCallback(() => {
    if (!sceneRef.current) return
    
    sceneRef.current.isScrolling = true
    
    if (sceneRef.current.scrollTimeout) {
      clearTimeout(sceneRef.current.scrollTimeout)
    }
    
    // ✅ Utiliser RAF pour synchronisation parfaite avec l'écran
    requestAnimationFrame(() => {
      updateZoom()
    })
    
    // Marquer fin du scroll après délai optimisé
    sceneRef.current.scrollTimeout = setTimeout(() => {
      if (sceneRef.current) {
        sceneRef.current.isScrolling = false
      }
    }, 150) // Délai réduit pour meilleure réactivité
  }, [updateZoom])

  // ✅ GESTION REDIMENSIONNEMENT avec recalibrage
  const handleResize = useCallback(() => {
    if (!sceneRef.current) return
    
    const { camera, renderer } = sceneRef.current
    const width = window.innerWidth
    const height = window.innerHeight
    
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
    
    // ✅ RECALIBRAGE après redimensionnement
    sceneRef.current.maxScrollHeight = getMaxScrollHeight()
    sceneRef.current.lastKnownScrollHeight = document.body.scrollHeight
    
    // Mettre à jour immédiatement la position
    updateZoom()
  }, [getMaxScrollHeight, updateZoom])

  // ✅ BOUCLE D'ANIMATION ULTRA-OPTIMISÉE
  const animate = useCallback(() => {
    if (!sceneRef.current) return

    const { scene, camera, renderer, model, isScrolling } = sceneRef.current
    
    // ✅ FRAME SKIPPING intelligent pendant scroll intensif
    if (isScrolling) {
      // Rendre 1 frame sur 2 pendant le scroll pour économiser ressources
      sceneRef.current.animationId = requestAnimationFrame(() => {
        sceneRef.current!.animationId = requestAnimationFrame(animate)
      })
    } else {
      sceneRef.current.animationId = requestAnimationFrame(animate)
    }
    
    // Rotation uniquement quand pas de scroll (économie ressources)
    if (model && rotationSpeed && !isScrolling) {
      model.rotation.y += rotationSpeed
    }

    renderer.render(scene, camera)
  }, [rotationSpeed])

  useEffect(() => {
    const mountElement = mountRef.current
    if (!mountElement) return

    // ✅ INITIALISATION SCÈNE (identique mais avec nouvelles props)
    const scene = new THREE.Scene()
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(0, 0, startZ)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
      stencil: false,
      depth: true
    })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = false
    renderer.outputColorSpace = THREE.SRGBColorSpace
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    scene.add(ambientLight)

    mountElement.appendChild(renderer.domElement)

    // ✅ CALCUL INITIAL de la hauteur de scroll
    const initialMaxScrollHeight = getMaxScrollHeight()

    sceneRef.current = {
      scene,
      camera,
      renderer,
      model: null,
      animationId: null,
      lastScrollY: 0,
      isScrolling: false,
      scrollTimeout: null,
      maxScrollHeight: initialMaxScrollHeight, // ✅ NOUVEAU
      lastKnownScrollHeight: document.body.scrollHeight // ✅ NOUVEAU
    }

    // ✅ CHARGEMENT MODÈLE (optimisé identique)
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
              
              if (child.geometry instanceof THREE.BufferGeometry) {
                child.geometry.computeBoundingBox()
                child.geometry.computeBoundingSphere()
              }
            }
          })

          sceneRef.current.model = gltf.scene
          
          // Centrer et redimensionner
          const box = new THREE.Box3().setFromObject(gltf.scene)
          const center = box.getCenter(new THREE.Vector3())
          const size = box.getSize(new THREE.Vector3())
          
          gltf.scene.position.sub(center)
          
          const maxDimension = Math.max(size.x, size.y, size.z)
          const scale = 2 / maxDimension
          gltf.scene.scale.setScalar(scale)
          
          sceneRef.current.scene.add(gltf.scene)
          setIsLoaded(true)
        }
      },
      (progress) => {
        console.log('Chargement modèle 3D :', Math.round((progress.loaded / progress.total) * 100) + '%')
      },
      (error) => {
        console.error('Erreur chargement modèle:', error)
        setIsLoaded(true)
      }
    )

    // ✅ EVENT LISTENERS optimisés
    window.addEventListener('scroll', throttledUpdateZoom, { 
      passive: true
    })
    window.addEventListener('resize', handleResize, { passive: true })
    
    // ✅ CALIBRAGE INITIAL après chargement DOM
    setTimeout(() => {
      if (sceneRef.current) {
        sceneRef.current.maxScrollHeight = getMaxScrollHeight()
        sceneRef.current.lastKnownScrollHeight = document.body.scrollHeight
        updateZoom()
      }
    }, 100) // Petit délai pour s'assurer que le DOM est complètement chargé
    
    animate()

    // ✅ CLEANUP (identique)
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
        
        if (mountElement && mountElement.contains(sceneRef.current.renderer.domElement)) {
          mountElement.removeChild(sceneRef.current.renderer.domElement)
        }
      }
    }
  }, [modelPath, startZ, endZ, getMaxScrollHeight, updateZoom, throttledUpdateZoom, handleResize, animate])

  return (
    <>
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
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}