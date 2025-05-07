// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body>
        <div className="background-container">
          {children}
        </div>
      </body>
    </html>
  )
}