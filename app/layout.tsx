import { ThemeProvider } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import './globals.css'
import { generateMetadata as baseGenerateMetadata } from './lib/metadata'

export const metadata = baseGenerateMetadata({})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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

      <body className="antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <div className="fixed bottom-4 right-4 z-50">
            <Button asChild className="rounded-full shadow-xl">
              <Link href="https://www.whatnot.com/en-GB/user/sonnysidecollectibles">
                📦 Live Singles / Yolky Bags
              </Link>
            </Button>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
