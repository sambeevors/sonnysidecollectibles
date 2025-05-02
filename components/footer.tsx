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
                href="https://www.instagram.com/sonnysidecollectibles"
                className="hover:underline"
              >
                Instagram
              </Link>
              <Link
                href="https://www.whatnot.com/en-GB/user/sonnysidecollectibles"
                className="hover:underline"
              >
                Whatnot
              </Link>
              <Link
                href="https://www.ebay.com/usr/sonny-side-collectibles"
                className="hover:underline"
              >
                eBay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
