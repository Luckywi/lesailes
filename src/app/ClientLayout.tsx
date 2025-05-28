// src/app/ClientLayout.tsx
'use client'

import { ReactNode } from 'react'
import { ThreeScene } from '@/components/ThreeScene'

interface ClientLayoutProps {
  children: ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      {/* Scène 3D globale - chargée une seule fois et persistante */}
      <ThreeScene 
        modelPath="/Peacock.glb"
        startZ={0.15}
        endZ={0.88}
        rotationSpeed={0}
      />
      
      {/* Contenu des pages */}
      <div className="relative" style={{ zIndex: 10 }}>
        {children}
      </div>
    </>
  )
}