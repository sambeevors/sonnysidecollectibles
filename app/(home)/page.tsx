import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getNextShow } from '@/data/shows';
import { ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import { generateMetadata as baseGenerateMetadata } from '@/app/lib/metadata';

export const metadata = baseGenerateMetadata({
  description:
    'Sonny Side Collectibles - Trading Sonny Angels, Yu-Gi-Oh, and Pokémon collectibles. Shop for mystery Yolky Bags, graded cards, and more!',
  path: '/',
});

// Get the next upcoming show
const nextShow = getNextShow();

// Format date for display
const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export default function Home() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      {/* Next Show Card */}
      {nextShow && (
        <Link href="/upcoming-shows" className="group">
          <Card className="overflow-hidden mb-10 relative">
            {nextShow.image && (
              <div
                className="absolute inset-0 w-full h-full opacity-80"
                style={{ backgroundColor: nextShow.color ?? 'transparent' }}
              >
                <Image
                  src={nextShow.image}
                  alt={nextShow.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-transparent dark:to-card/90 dark:via-card/70 to-black/90 via-black/75"></div>
              </div>
            )}
            <CardContent className="flex flex-col md:flex-row items-center justify-between p-6 gap-4 relative">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <Calendar className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-shadow-2xs text-white dark:text-card-foreground">
                    Next Card Show: {nextShow.name}
                  </h3>
                  <p className="text-sm text-white dark:text-card-foreground">
                    {formatDate(nextShow.date)}
                    {nextShow.endDate &&
                      ` - ${formatDate(nextShow.endDate)}`}{' '}
                    at {nextShow.location}
                  </p>
                </div>
              </div>
              <Button className="w-full md:w-auto">
                <span>View All Shows</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </Link>
      )}

      {/* Mobile Marquee */}
      <div className="sm:hidden mb-8">
        <Marquee
          gradient
          gradientWidth={50}
          speed={40}
          gradientColor="var(--background)"
          autoFill
        >
          <Link
            href="https://www.ebay.co.uk/usr/sonny-side-collectibles"
            className="transition-transform hover:scale-110 flex justify-center items-center px-4 h-10"
          >
            <Image
              src="/pokemon.png"
              alt="Pokémon Cards"
              width={100}
              height={100}
              className="object-contain h-10 w-auto"
            />
          </Link>
          <Link
            href="https://www.vinted.co.uk/member/149711188-georgieehiggo"
            className="transition-transform hover:scale-110 flex justify-center items-center px-4 h-10"
          >
            <Image
              src="/sonny-angel.png"
              alt="Sonny Angels"
              width={100}
              height={100}
              className="object-contain h-8 w-auto"
            />
          </Link>
          <Link
            href="https://www.ebay.co.uk/usr/sonny-side-collectibles"
            className="transition-transform hover:scale-110 flex justify-center items-center px-4 h-10"
          >
            <Image
              src="/yu-gi-oh.png"
              alt="Yu-Gi-Oh Cards"
              width={100}
              height={100}
              className="object-contain h-10 w-auto"
            />
          </Link>
        </Marquee>
      </div>

      {/* Desktop Logo Display */}
      <div className="hidden sm:flex justify-center items-center gap-12 mb-12">
        <Link
          href="https://www.ebay.co.uk/usr/sonny-side-collectibles"
          className="transition-transform hover:scale-110"
        >
          <Image
            src="/pokemon.png"
            alt="Pokémon Cards"
            width={150}
            height={150}
            className="grayscale hover:grayscale-0 transition-all"
          />
        </Link>
        <Link
          href="https://www.vinted.co.uk/member/149711188-georgieehiggo"
          className="transition-transform hover:scale-110"
        >
          <Image
            src="/sonny-angel.png"
            alt="Sonny Angels"
            width={150}
            height={150}
            className="grayscale hover:grayscale-0 transition-all"
          />
        </Link>
        <Link
          href="https://www.ebay.co.uk/usr/sonny-side-collectibles"
          className="transition-transform hover:scale-110"
        >
          <Image
            src="/yu-gi-oh.png"
            alt="Yu-Gi-Oh Cards"
            width={150}
            height={150}
            className="grayscale hover:grayscale-0 transition-all"
          />
        </Link>
      </div>

      <Separator className="my-10" />

      {/* Feeling Lucky Section */}
      <div className="space-y-6 mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Feeling Lucky?
        </h2>

        {/* Yolky Bags Promo */}
        <Card className="bg-primary/10 border-primary overflow-hidden">
          <CardContent className="flex flex-col md:flex-row items-center justify-between p-6 gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/yolky-bags-notext.png"
                alt="Yolky Bags"
                width={100}
                height={100}
                className="object-contain rounded-full aspect-square flex-shrink-0"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-bold">Yolky Bags</h3>
                <p className="text-sm">
                  Check out our mystery Yolky Bags — each one contains a graded
                  Pokémon card and a shot at something{' '}
                  <em className="font-semibold">cracked</em>.
                </p>
              </div>
            </div>
            <Button asChild className="w-full md:w-auto">
              <Link href="/yolky-bags">View Yolky Bags</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Sell or Trade Section with Tabs */}
      <Card className="mb-12 py-8">
        <CardHeader>
          <h2 className="text-3xl font-semibold sm:text-center">
            Sell or Trade Your Collectibles
          </h2>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="cash" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="cash">💰 Cash Offers</TabsTrigger>
              <TabsTrigger value="trade">🤝 Trade-Ins</TabsTrigger>
            </TabsList>
            <TabsContent value="cash">
              <div>
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
            </TabsContent>
            <TabsContent value="trade">
              <div>
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
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="justify-center">
          <Button asChild>
            <Link href="https://www.instagram.com/sonnysidecollectibles">
              Contact Us to Sell or Trade
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className="py-8">
        <CardHeader>
          <h2 className="text-3xl font-semibold sm:text-center">
            Why Choose Sonny Side Collectibles?
          </h2>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <li className="flex items-baseline gap-2 text-pretty">
              <span className="text-green-500">✓</span>
              Two passionate collectors dedicated to providing high-quality
              items
            </li>
            <li className="flex items-baseline gap-2 text-pretty">
              <span className="text-green-500">✓</span>
              Wide variety of Sonny Angels, Yu-Gi-Oh, and Pokémon collectibles
            </li>
            <li className="flex items-baseline gap-2 text-pretty">
              <span className="text-green-500">✓</span>
              Deal with graded, raw, and sealed collectibles
            </li>
            <li className="flex items-baseline gap-2 text-pretty">
              <span className="text-green-500">✓</span>
              Fair trading and competitive pricing
            </li>
            <li className="flex items-baseline gap-2 text-pretty">
              <span className="text-green-500">✓</span>
              Secure transactions through reputable platforms
            </li>
            <li className="flex items-baseline gap-2 text-pretty">
              <span className="text-green-500">✓</span>
              Excellent customer service and fast shipping
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
