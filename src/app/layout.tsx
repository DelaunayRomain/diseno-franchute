import './globals.css'

import { Kantumruy_Pro } from 'next/font/google'

import { FixedAside } from '../components/fixed_aside'
import { cn } from '../utils/tailwind'

import type { Metadata } from 'next'

const kantumruyFont = Kantumruy_Pro({
  subsets: ['latin'],
  variable: '--google-font-kantumruy',
})

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
      <body className={cn(kantumruyFont.variable, 'antialiased bg-black')}>
        {children}
        <FixedAside />
      </body>
    </html>
  )
}
