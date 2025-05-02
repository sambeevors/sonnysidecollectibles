import { Footer } from '@/components/footer'
import { ModeToggle } from '@/components/mode-toggle'
import { Egg } from 'lucide-react'
import Link from 'next/link'

export default function SubpageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav className="w-full bg-primary text-primary-foreground">
        <div className="container max-w-3xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="mr-6 hover:rotate-9 hover:scale-110 transition"
            >
              <Egg className="size-6 text-white fill-white" />
            </Link>
            <div className="space-x-4 md:space-x-6">
              <Link
                href="/upcoming-shows"
                className="font-medium hover:underline text-xs md:text-sm"
              >
                <span className="hidden sm:inline">Upcoming</span> Shows
              </Link>
              <Link
                href="/yolky-bags"
                className="font-medium hover:underline text-xs md:text-sm"
              >
                Yolky Bags
              </Link>
            </div>
          </div>
          <ModeToggle />
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </>
  )
}
