import type { Metadata } from 'next'
import './globals.css'

import { Playfair_Display, Nunito } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Biscuit Bijux',
  description: 'Loja de bijuterias.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${nunito.variable} font-serif antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
