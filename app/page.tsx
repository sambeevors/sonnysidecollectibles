import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[50vh] min-h-[400px] w-full">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Sonny Side Collectibles Hero"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-pink-600/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sonny Side Collectibles
              </h1>
              <p className="text-xl md:text-2xl">
                Your go-to place for trading Sonny Angels, Yu-Gi-Oh, and Pokémon
                collectibles!
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <section className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-pink-50 p-6 rounded-lg shadow-md border-2 border-pink-300">
              <h2 className="text-2xl font-semibold mb-4">Sonny Angels</h2>
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Sonny Angels"
                width={200}
                height={200}
                className="mx-auto mb-4"
              />
              <p className="mb-4">
                Discover our adorable Sonny Angels collection. Trade and find
                your favorite figurines!
              </p>
              <Link
                href="https://www.vinted.com"
                className="text-pink-600 hover:underline"
              >
                Shop on Vinted
              </Link>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg shadow-md border-2 border-pink-300">
              <h2 className="text-2xl font-semibold mb-4">Yu-Gi-Oh</h2>
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Yu-Gi-Oh Cards"
                width={200}
                height={200}
                className="mx-auto mb-4"
              />
              <p className="mb-4">
                Explore our vast selection of Yu-Gi-Oh cards. Find rare cards
                and complete your deck!
              </p>
              <Link
                href="https://www.ebay.com"
                className="text-pink-600 hover:underline"
              >
                Shop on eBay
              </Link>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg shadow-md border-2 border-pink-300">
              <h2 className="text-2xl font-semibold mb-4">Pokémon</h2>
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Pokémon Cards"
                width={200}
                height={200}
                className="mx-auto mb-4"
              />
              <p className="mb-4">
                Gotta catch 'em all! Browse our Pokémon card collection and
                trade with fellow trainers.
              </p>
              <Link
                href="https://www.ebay.com"
                className="text-pink-600 hover:underline"
              >
                Shop on eBay
              </Link>
            </div>
          </section>

          <section className="bg-pink-100 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Sell or Trade Your Collectibles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Cash Offers</h3>
                <p className="mb-4">
                  Looking to sell your Sonny Angels, Yu-Gi-Oh cards, or Pokémon
                  collectibles? We offer competitive cash prices!
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>We buy at 75% of current market price</li>
                  <li>Quick and easy process</li>
                  <li>Fair evaluations by experienced collectors</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Trade-Ins</h3>
                <p className="mb-4">
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
            <div className="text-center mt-6">
              <Link
                href="#contact"
                className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
              >
                Contact Us to Sell or Trade
              </Link>
            </div>
          </section>

          <section className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              Why Choose Sonny Side Collectibles?
            </h2>
            <ul className="list-disc list-inside text-left max-w-2xl mx-auto">
              <li>
                Two passionate collectors dedicated to providing high-quality
                items
              </li>
              <li>
                Wide variety of Sonny Angels, Yu-Gi-Oh, and Pokémon collectibles
              </li>
              <li>Fair trading and competitive pricing</li>
              <li>Secure transactions through reputable platforms</li>
              <li>Excellent customer service and fast shipping</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
