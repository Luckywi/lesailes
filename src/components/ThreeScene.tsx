// src/components/ThreeScene.tsx (version simplifiée)
'use client'

import { useRef, useEffect, useCallback } from 'react'
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
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    model: THREE.Group | null
    animationId: number | null
  } | null>(null)

  // Fonction de mise à jour du zoom optimisée
  const updateZoom = useCallback(() => {
    if (!sceneRef.current) return
    
    const scrollY = window.scrollY
    const docHeight = document.body.scrollHeight - window.innerHeight
    const scrollFrac = docHeight > 0 ? scrollY / docHeight : 0
    
    // Easing pour une transition plus fluide
    const easeInOutCubic = (t: number) => 
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    
    const smoothFrac = easeInOutCubic(scrollFrac)
    sceneRef.current.camera.position.z = startZ + smoothFrac * (endZ - startZ)
  }, [startZ, endZ])

  // Fonction de redimensionnement optimisée
  const handleResize = useCallback(() => {
    if (!sceneRef.current) return
    
    const { camera, renderer } = sceneRef.current
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
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
    camera.position.z = startZ

    // Renderer avec optimisations
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    
    // Lumière
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    scene.add(ambientLight)

    // Ajouter au DOM
    mountRef.current.appendChild(renderer.domElement)

    // Stocker les références
    sceneRef.current = {
      scene,
      camera,
      renderer,
      model: null,
      animationId: null
    }

    // Charger le modèle
    const loader = new GLTFLoader()
    loader.load(
      modelPath,
      (gltf) => {
        if (sceneRef.current) {
          // Optimiser le modèle
          gltf.scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.castShadow = false
              child.receiveShadow = false
              if (child.material instanceof THREE.Material) {
                child.material.transparent = false
              }
            }
          })

          sceneRef.current.model = gltf.scene
          sceneRef.current.scene.add(gltf.scene)
        }
      },
      undefined,
      (error) => console.error('Erreur chargement modèle:', error)
    )

    // Event listeners avec options passives pour les performances
    window.addEventListener('scroll', updateZoom, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
    
    // Appel initial
    updateZoom()
    
    // Démarrer l'animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateZoom)
      window.removeEventListener('resize', handleResize)
      
      if (sceneRef.current) {
        if (sceneRef.current.animationId) {
          cancelAnimationFrame(sceneRef.current.animationId)
        }
        
        // Nettoyage WebGL
        sceneRef.current.renderer.dispose()
        
        // Retirer du DOM
        if (mountRef.current && mountRef.current.contains(sceneRef.current.renderer.domElement)) {
          mountRef.current.removeChild(sceneRef.current.renderer.domElement)
        }
      }
    }
  }, [modelPath, startZ, endZ, updateZoom, handleResize, animate])

  return (
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
      }}
    />
  )
}