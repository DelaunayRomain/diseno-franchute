import './globals.css'

import { Kantumruy_Pro } from 'next/font/google'

import { FixedAside } from '../components/fixed_aside'
import { cn } from '../utils/tailwind'

import type { Metadata, Viewport } from 'next'

const kantumruyFont = Kantumruy_Pro({
  subsets: ['latin'],
  variable: '--google-font-kantumruy',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'Diseño Franchute',
  description: 'Galería de obras de falso mármol',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, viewport-fit=cover'
      />
      <body className={cn(kantumruyFont.variable, 'antialiased bg-black')}>
        {children}
        <FixedAside />
      </body>
    </html>
  )
}
