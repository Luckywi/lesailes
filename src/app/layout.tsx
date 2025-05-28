// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import { ClientLayout } from './ClientLayout'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#000000" />
        {/* PRELOAD PRIORITAIRE DU MODÈLE 3D */}
        <link rel="preload" href="/Peacock.glb" as="fetch" crossOrigin="anonymous" />
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}