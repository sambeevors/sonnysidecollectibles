import './globals.css'

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
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/knu0ruh.css" />
      </head>
      <body className="font-sans bg-pink-50">{children}</body>
    </html>
  )
}
