import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { generateMetadata as baseGenerateMetadata } from '@/app/lib/metadata'

import { Package, Star, Truck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = baseGenerateMetadata({
  title: 'Yolky Bags',
  description:
    'Mystery Pokémon graded card bags with guaranteed value and a chance at chase cards. Available in Soft-Boiled (£30) and Hard-Boiled (£75) options.',
  path: '/yolky-bags',
  type: 'article',
})

export default function YolkyBagsPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <header className="mb-8">
        <div className="flex items-center mb-4 gap-4">
          <div className="rounded-full hidden md:block">
            <Image
              src="/yolky-bags-notext.png"
              alt="Yolky Bags"
              width={100}
              height={100}
              className="w-20 h-20 bg-primary/10 rounded-full"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-0.5">
              Yolky Bags
            </h1>
            <p className="text-xl font-medium">Risk & Reward Explained</p>
          </div>
        </div>
      </header>

      <section className="mb-10">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg">
            Each Yolky Bag contains 1 PSA or ACE graded Pokémon card. These bags
            are sold during live Whatnot streams.
          </p>
        </div>
      </section>

      <section className="mb-10 grid gap-6 md:grid-cols-2">
        <Card className="relative pb-0 order-2 md:order-1">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Soft-Boiled</CardTitle>
              <Badge variant="outline" className="font-semibold">
                £30
              </Badge>
            </div>
            <CardDescription>Entry-level mystery graded card</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 mt-2 flex h-2 w-2 rounded-full bg-primary shrink-0"></span>
                <span>Contains 1 graded Pokémon card</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-2 flex h-2 w-2 rounded-full bg-primary shrink-0"></span>
                <span>Market value range: £20–£50</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-2 flex h-2 w-2 rounded-full bg-primary shrink-0"></span>
                <span>
                  1 in 10 bags contains a &quot;Cracked&quot; chase hit worth up
                  to £50
                </span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="bg-muted px-6 py-6 grow overflow-hidden rounded-b-xl">
            <p className="text-sm text-muted-foreground">
              Perfect for new collectors or those on a budget
            </p>
          </CardFooter>
        </Card>

        <Card className="relative pb-0 order-1 md:order-2">
          <CardHeader>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Badge variant="default" className="font-semibold">
                Most Popular
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Hard-Boiled</CardTitle>
              <Badge variant="outline" className="font-semibold">
                £75
              </Badge>
            </div>
            <CardDescription>Premium mystery graded card</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 mt-2 flex h-2 w-2 rounded-full bg-primary shrink-0"></span>
                <span>Contains 1 graded Pokémon card</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-2 flex h-2 w-2 rounded-full bg-primary shrink-0"></span>
                <span>Market value range: £50–£150+</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-2 flex h-2 w-2 rounded-full bg-primary shrink-0"></span>
                <span>
                  1 in 10 bags contains a &quot;Cracked&quot; chase worth £100+
                </span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="bg-muted px-6 py-6 grow overflow-hidden rounded-b-xl">
            <p className="text-sm text-muted-foreground">
              For collectors looking for higher-value cards
            </p>
          </CardFooter>
        </Card>
      </section>

      <section className="mb-10 flex justify-center">
        <Button asChild className="font-semibold" size="lg">
          <Link href="https://www.whatnot.com/en-GB/user/sonnysidecollectibles">
            Buy on Whatnot
          </Link>
        </Button>
      </section>

      <section className="mb-10">
        <Image
          width={1680}
          height={2731}
          src="/cracked.jpg"
          alt="Examples of what could be inside a Yolky Bag"
          className="rounded-xl overflow-hidden"
        />
      </section>

      <section className="mb-10">
        <Alert variant="info" className="border-muted-foreground/20">
          <AlertTitle className="font-bold">Disclaimer</AlertTitle>
          <AlertDescription>
            <p className="mt-2">
              Bag values are based on current market prices and may vary.
              Pricing references include eBay, Cardmarket, and more. No refunds
              once bags are opened on stream.
            </p>
          </AlertDescription>
        </Alert>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">How It Works</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Purchase</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Buy your Yolky Bag during one of our live Whatnot streams.
                Choose between Soft-Boiled or Hard-Boiled options.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Reveal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                We&apos;ll open your bag live on stream so everyone can share in
                the excitement of your pull.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Receive</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Your graded card will be carefully packaged and shipped directly
                to your door.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-6">By the Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <Package className="h-8 w-8 mb-2" />
                <h3 className="text-3xl font-bold">400+</h3>
                <p className="text-sm text-muted-foreground">Items sold</p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <Star className="h-8 w-8 mb-2" />
                <h3 className="text-3xl font-bold">5</h3>
                <p className="text-sm text-muted-foreground">Whatnot Rating</p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <Truck className="h-8 w-8 mb-2" />
                <h3 className="text-3xl font-bold">1d</h3>
                <p className="text-sm text-muted-foreground">
                  Average Shipping Time
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 bg-muted rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-red-400 size-2 rounded-full animate-pulse" />
            <h3 className="text-lg font-medium">Live Cracked Hits</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center justify-between">
              <span>PSA 10 Umbreon (Hidden Fates)</span>
              <Badge>£350 Value</Badge>
            </li>
            <li className="flex items-center justify-between">
              <span>PSA 10 Cramorant Beauty Stamp Box</span>
              <Badge>£250 Value</Badge>
            </li>
            <li className="flex items-center justify-between">
              <span>ACE 9 Lillie&apos;s Clefairy ex (Journey Together)</span>
              <Badge>£150 Value</Badge>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              What exactly is a Yolky Bag?
            </AccordionTrigger>
            <AccordionContent>
              A Yolky Bag is our mystery product containing one PSA or ACE
              graded Pokémon card. Each bag is sealed and the contents are
              unknown until opened live on our Whatnot stream. We offer two
              tiers: Soft-Boiled (£30) and Hard-Boiled (£75), each with
              different value ranges and chase card odds.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              How do you determine the value of cards in the bags?
            </AccordionTrigger>
            <AccordionContent>
              We research current market prices across multiple platforms
              including eBay sold listings, Cardmarket, and other collector
              marketplaces. Values can fluctuate based on market conditions, but
              we ensure that the overall value ranges remain consistent with our
              advertised tiers.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              What does &quot;Cracked&quot; chase hit mean?
            </AccordionTrigger>
            <AccordionContent>
              A &quot;Cracked&quot; chase hit refers to a special high-value
              card that we include in approximately 1 out of every 10 bags.
              These cards significantly exceed the standard value range for that
              tier, offering an exciting chance at a premium pull. For
              Soft-Boiled bags, chase hits are worth up to £50, while
              Hard-Boiled chase hits can be worth significantly more.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">
              How do I participate in a Yolky Bag opening?
            </AccordionTrigger>
            <AccordionContent>
              To participate, follow us on Whatnot and turn on notifications for
              our streams. During the stream, you can purchase a Yolky Bag, and
              we&apos;ll open it live for everyone to see. After the stream,
              we&apos;ll carefully package and ship your graded card directly to
              you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">
              What if I&apos;m not happy with my pull?
            </AccordionTrigger>
            <AccordionContent>
              As stated in our policy, we do not offer refunds once bags are
              opened on stream. The nature of Yolky Bags is that they&apos;re
              random - while we guarantee minimum values, the specific card you
              receive is part of the excitement and risk. We ensure that even
              &quot;floor&quot; cards are collectible and within the stated
              value ranges.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left">
              How long does shipping take?
            </AccordionTrigger>
            <AccordionContent>
              For UK customers, shipping typically takes 2-5 business days after
              the stream. For international customers, shipping times vary by
              location but generally range from 1-3 weeks. All cards are shipped
              with tracking and appropriate insurance based on the value.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-left">
              How often do you run Yolky Bag streams?
            </AccordionTrigger>
            <AccordionContent>
              We typically run Yolky Bag streams 1-2 times per month. The exact
              schedule varies, so we recommend following us on Whatnot and our
              social media channels to get notifications about upcoming streams.
              We also announce special themed Yolky Bag events for holidays and
              Pokémon releases.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  )
}
