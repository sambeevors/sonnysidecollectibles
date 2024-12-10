import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sonny Side Collectibles',
  description: 'Trade Sonny Angels, Yu-Gi-Oh, and Pokémon collectibles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-pink-50`}>{children}</body>
    </html>
  )
}

