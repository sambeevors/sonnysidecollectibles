import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-burnt-toast">
      <main className="flex-grow">
        <div className="relative h-auto w-full">
          <Image
            src="/hero.jpg"
            alt="Sonny Side Collectibles Hero"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="absolute inset-0 z-[-1]"
          />
          <div className="bg-white/80 flex items-center justify-center py-8">
            <div className="text-center text-burnt-toast">
              <Image
                src="/logo.png"
                alt="Sonny Side Collectibles Logo"
                width={1024}
                height={1024}
                className="mx-auto mb-6 w-full h-auto max-w-sm md:max-w-md"
                priority
              />
              <h1 className="sr-only">Sonny Side Collectibles</h1>
              <p className="text-xl md:text-2xl text-balance">
                Your go-to place for trading Sonny Angels, Yu-Gi-Oh, and Pokémon
                collectibles!
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <section className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm shadow-burnt-toast/20 flex flex-col">
              <h2 className="sr-only">Sonny Angels</h2>
              <Image
                src="/sonny-angel.png"
                alt="Sonny Angels"
                width={200}
                height={200}
                className="mx-auto mb-4 rounded-lg object-contain object-left sm:object-center h-48 w-auto"
              />
              <p className="mb-4 flex-grow">
                Discover our adorable Sonny Angels collection. Trade and find
                your favorite figurines!
              </p>
              <Link
                href="https://www.vinted.co.uk/member/149711188-georgieehiggo"
                className="text-yolk-dark hover:text-burnt-toast hover:underline"
              >
                👼 Shop on Vinted
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm shadow-burnt-toast/20 flex flex-col">
              <h2 className="sr-only">Yu-Gi-Oh</h2>
              <Image
                src="/yu-gi-oh.png"
                alt="Yu-Gi-Oh Cards"
                width={200}
                height={200}
                className="mx-auto mb-4 rounded-lg object-contain object-left sm:object-center h-48 w-auto"
              />
              <p className="mb-4 flex-grow">
                Explore our vast selection of Yu-Gi-Oh cards. Find rare cards
                and complete your deck!
              </p>
              <Link
                href="https://www.ebay.co.uk/usr/uk-beevo"
                className="text-yolk-dark hover:text-burnt-toast hover:underline"
              >
                🧙‍♀️ Shop on eBay
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm shadow-burnt-toast/20 flex flex-col">
              <h2 className="sr-only">Pokémon</h2>
              <Image
                src="/pokemon.png"
                alt="Pokémon Cards"
                width={200}
                height={200}
                className="mx-auto mb-4 rounded-lg object-contain object-left sm:object-center h-48 w-auto"
              />
              <p className="mb-4 flex-grow">
                Gotta catch &apos;em all! Browse our Pokémon card collection and
                trade with fellow trainers.
              </p>
              <Link
                href="https://www.ebay.co.uk/usr/uk-beevo"
                className="text-yolk-dark hover:text-burnt-toast hover:underline"
              >
                ⚡️ Shop on eBay
              </Link>
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg mb-12 shadow-sm shadow-burnt-toast/20">
            <h2 className="text-3xl font-semibold mb-6 sm:text-center">
              Sell or Trade Your Collectibles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">💰 Cash Offers</h3>
                <p className="mb-4 text-lg font-semibold">
                  Looking to sell your Sonny Angels, Yu-Gi-Oh cards, or Pokémon
                  collectibles?
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>We buy at 75% of current market price</li>
                  <li>Quick and easy process</li>
                  <li>Fair evaluations by experienced collectors</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">🤝 Trade-Ins</h3>
                <p className="mb-4 text-lg font-semibold">
                  Prefer to trade? Get even more value for your collectibles by
                  trading with us!
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>We offer 80%+ of current market price for trades</li>
                  <li>Expand your collection by trading up</li>
                  <li>Access to our wide variety of collectibles</li>
                </ul>
              </div>
            </div>
            <div className="sm:text-center mt-6">
              <Link
                href="https://www.instagram.com/sonnyangel.watch/"
                className="bg-yolk text-burnt-toast px-6 py-3 rounded-lg hover:bg-yolk-dark transition-colors font-semibold"
              >
                Contact Us to Sell or Trade
              </Link>
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm shadow-burnt-toast/20">
            <h2 className="text-3xl font-semibold mb-6 sm:text-center">
              Why Choose Sonny Side Collectibles?
            </h2>
            <ul className="flex flex-wrap sm:justify-center gap-4 max-w-3xl mx-auto">
              <li className="flex items-center gap-2">
                <span className="text-yolk-dark">✓</span>
                Two passionate collectors dedicated to providing high-quality
                items
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yolk-dark">✓</span>
                Wide variety of Sonny Angels, Yu-Gi-Oh, and Pokémon collectibles
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yolk-dark">✓</span>
                Deal with graded, raw, and sealed collectibles
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yolk-dark">✓</span>
                Fair trading and competitive pricing
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yolk-dark">✓</span>
                Secure transactions through reputable platforms
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yolk-dark">✓</span>
                Excellent customer service and fast shipping
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
