// src/app/layout.tsx - Version finale optimisée
import './globals.css'
import { ReactNode } from 'react'
import { ClientLayout } from './ClientLayout'
import { Metadata } from 'next'

interface RootLayoutProps {
  children: ReactNode
}

// ✅ GARDE ton metadataBase - c'est important pour les autres métadonnées
export const metadata: Metadata = {
  metadataBase: new URL('https://lesailes.fr'),
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#000000" />
        
        {/* Favicon avec vos fichiers existants */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        
        {/* Preconnect pour performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* PRELOAD critique pour performance */}
        <link rel="preload" href="/les-ailes-logo.png" as="image" />
        
        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Sécurité */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      </head>
      <body>
        {/* Skip link pour accessibilité */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black p-2 rounded z-50"
        >
          Aller au contenu principal
        </a>
        
        <ClientLayout>
          <main id="main-content">
            {children}
          </main>
        </ClientLayout>
      </body>
    </html>
  )
}