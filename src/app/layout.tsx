import './globals.css'

import { Geist, Geist_Mono } from 'next/font/google'

import { FixedAside } from '../components/fixed_aside'
import { cn } from '../utils/tailwind'

import type { Metadata } from 'next'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
      <body className={cn(geistSans.variable, geistMono.variable, 'antialiased bg-black')}>
        {children}
        <FixedAside />
      </body>
    </html>
  )
}
