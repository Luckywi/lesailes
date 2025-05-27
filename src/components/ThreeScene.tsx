'use client'

import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib' // ou three/examples...

interface ThreeSceneProps {
  modelPath: string
}

export const ThreeScene: React.FC<ThreeSceneProps> = ({ modelPath }) => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // 1. Scène, caméra, renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    // 2. Définit le zoom de départ et d'arrivée
    const startZ = 0.1    // très proche, zoomé
    const endZ = 1    // éloigné, dézoommé
    camera.position.z = startZ

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    mountRef.current.appendChild(renderer.domElement)

    // 3. Lumière
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    scene.add(ambientLight)

    // 4. Chargement du modèle
    const loader = new GLTFLoader()
    let model: THREE.Group | null = null
    loader.load(
      modelPath,
      (gltf) => {
        model = gltf.scene
        model.scale.set(1, 1, 1)
        scene.add(model)
      },
      undefined,
      (err) => console.error(err)
    )

    // 5. Fonction pour mettre à jour le zoom selon le scroll
    const updateZoom = () => {
      const scrollY = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrollFrac = docHeight > 0 ? scrollY / docHeight : 0
      camera.position.z = startZ + scrollFrac * (endZ - startZ)
    }

    // 6. Écouteurs
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    })
    window.addEventListener('scroll', updateZoom)

    // 7. Appel initial pour prendre en compte scrollY = 0
    updateZoom()

    // 8. Boucle d’animation
    const animate = () => {
      requestAnimationFrame(animate)
      // if (model) model.rotation.y += 0.005  // si tu veux tourner doucement
      renderer.render(scene, camera)
    }
    animate()

    // 9. Cleanup
    return () => {
      window.removeEventListener('scroll', updateZoom)
      mountRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [modelPath])

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
      }}
    />
  )
}
