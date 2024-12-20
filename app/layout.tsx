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
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Sonny Side Collectibles"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans bg-eggwhite">{children}</body>
    </html>
  )
}
