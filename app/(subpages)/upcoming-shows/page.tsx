import { ShowCard } from '@/components/show-card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { getUpcomingShows } from '@/data/shows'
import { cn } from '@/lib/utils'
import { Calendar, HeartCrack } from 'lucide-react'
import { generateMetadata as baseGenerateMetadata } from '@/app/lib/metadata'

export const metadata = baseGenerateMetadata({
  title: 'Upcoming Shows',
  description:
    'Find Sonny Side Collectibles at upcoming card shows and conventions throughout the UK. See our event schedule and meet us in person.',
  path: '/upcoming-shows',
  type: 'article',
})

export default function UpcomingShowsPage() {
  const upcomingShows = getUpcomingShows()

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <header className="mb-8">
        <div className="flex items-center mb-4 gap-4">
          <div className="bg-primary/10 p-5 rounded-full hidden md:block">
            <Calendar className="w-10 h-10 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-0.5">
              Upcoming Shows
            </h1>
            <p className="text-lg font-medium">
              Find us at these events and conventions
            </p>
          </div>
        </div>
      </header>

      <section className="mb-10">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-pretty">
            We attend card shows and conventions throughout the UK. Come say
            hello, browse our inventory, and check out special event-only
            offers!
          </p>
        </div>
      </section>

      {upcomingShows.length > 0 ? (
        <div
          className={cn(
            'grid gap-6 mb-12',
            upcomingShows.length >= 2 && 'sm:grid-cols-2'
          )}
        >
          {upcomingShows.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      ) : (
        <div className="bg-muted rounded-lg p-10 text-center mb-12">
          <HeartCrack className="w-10 h-10 text-primary mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">
            No upcoming shows scheduled
          </h3>
          <p className="text-muted-foreground">
            Check back soon for our updated event calendar
          </p>
        </div>
      )}

      <section className="bg-muted rounded-lg p-6 mb-12">
        <h2 className="text-xl font-semibold mb-4">Meet Us at Shows</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-medium mb-2">What We Offer</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 mt-2 flex h-2 w-2 rounded-full bg-primary shrink-0"></span>
                <span>Exclusive show-only discounts and bundles</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-2 flex h-2 w-2 rounded-full bg-primary shrink-0"></span>
                <span>Card grading consultations and advice</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-2 flex h-2 w-2 rounded-full bg-primary shrink-0"></span>
                <span>Special Yolky Bags only available at shows</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Trading Opportunities</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 mt-2 flex h-2 w-2 rounded-full bg-primary shrink-0"></span>
                <span>Bring your cards to trade or sell</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-2 flex h-2 w-2 rounded-full bg-primary shrink-0"></span>
                <span>Free card evaluations and authenticity checks</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-2 flex h-2 w-2 rounded-full bg-primary shrink-0"></span>
                <span>Meet fellow collectors and enthusiasts</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              Do I need to bring cash?
            </AccordionTrigger>
            <AccordionContent>
              We accept both cash and card payments at all shows. We also offer
              PayPal and online payment options for convenience.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              Can I reserve items for pickup at shows?
            </AccordionTrigger>
            <AccordionContent>
              Yes! Contact us before the show to reserve specific cards or
              products, and we&apos;ll have them ready for you at our booth.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              Do you buy cards at shows?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely. We&apos;re always interested in adding quality items
              to our inventory. Bring your cards for a free evaluation and
              offer.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">
              How do I find your booth at the shows?
            </AccordionTrigger>
            <AccordionContent>
              Our booth location varies by event. We typically post our booth
              number on our social media accounts before each show. Look for our
              Sonny Side Collectibles banner and iconic egg logo!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">
              Do you offer show-exclusive promotions?
            </AccordionTrigger>
            <AccordionContent>
              Yes! We always have special deals just for show attendees. These
              can include discounts on purchases, bundle deals, and limited
              edition show-exclusive Yolky Bags with higher-tier chase cards.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  )
}
