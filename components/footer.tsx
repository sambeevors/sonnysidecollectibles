import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-yolk">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              <Link
                href="https://www.instagram.com/sonnyangel.watch/"
                className="text-burnt-toast hover:underline"
              >
                Sonny Angel Instagram
              </Link>
              <Link
                href="https://www.instagram.com/s18.culture/"
                className="text-burnt-toast hover:underline"
              >
                Yu-Gi-Oh / Pokémon Instagram
              </Link>
              <Link
                href="https://www.tiktok.com/@sonnyangel.watch"
                className="text-burnt-toast hover:underline"
              >
                TikTok
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
