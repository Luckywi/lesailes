// src/app/ClientLayout.tsx (version avec priorité 3D)
'use client'

import { ReactNode } from 'react'
import { ThreeScene } from '@/components/ThreeScene'

interface ClientLayoutProps {
  children: ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      {/* Scène 3D globale - PRIORITÉ ABSOLUE */}
      <ThreeScene 
        modelPath="/Peacock.glb"
        startZ={0.15}
        endZ={0.88}
        rotationSpeed={0}
        scrollSensitivity={6} // Plus la valeur est élevée, moins il y a de rendus
      />
      
      {/* Contenu des pages */}
      <div className="relative" style={{ zIndex: 10 }}>
        {children}
      </div>
    </>
  )
}