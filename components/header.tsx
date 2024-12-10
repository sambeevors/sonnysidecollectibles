import Link from 'next/link'

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Sonny Side Collectibles</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#sonny-angels" className="hover:underline">Sonny Angels</Link></li>
            <li><Link href="#yu-gi-oh" className="hover:underline">Yu-Gi-Oh</Link></li>
            <li><Link href="#pokemon" className="hover:underline">Pokémon</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

