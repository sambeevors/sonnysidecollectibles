import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { CardShow } from '@/data/shows';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ShowCardProps {
  show: CardShow;
}

export function ShowCard({ show }: ShowCardProps) {
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  // Should be 30-31st August 2025, for example
  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return `${start.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
    })} - ${end.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })}`;
  };

  const isMultiDay = !!show.endDate;
  const formattedStartDate = formatDate(show.date);
  const formattedDate = isMultiDay
    ? formatDateRange(show.date, show.endDate!)
    : formattedStartDate;

  // Calculate if this show is coming up soon (within next 14 days)
  const isSoon = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const showDate = new Date(show.date);
    const diffTime = Math.abs(showDate.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 14 && showDate >= today;
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <CardHeader>
        {show.image && (
          <div
            className="relative h-48 overflow-hidden -m-6"
            style={{ backgroundColor: show.color ?? 'transparent' }}
          >
            <Image
              src={show.image}
              alt={show.name}
              fill
              className={cn(
                show.imageMode === 'contain' ? 'object-contain' : 'object-cover'
              )}
            />
            <div className="absolute bottom-0 inset-x-0 w-full h-32 bg-gradient-to-b from-transparent to-card"></div>
          </div>
        )}
        <div className="flex justify-between items-start z-10">
          <CardTitle className="text-xl text-pretty line-clamp-2 dark:text-shadow-2xs leading-tight">
            {show.name}
          </CardTitle>
          {isSoon() && (
            <Badge variant="default" className="bg-primary">
              Coming Soon
            </Badge>
          )}
        </div>
        <CardDescription className="flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" />
          {show.location}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {show.description && (
          <p className="text-sm text-muted-foreground text-pretty">
            {show.description}
          </p>
        )}
      </CardContent>
      <CardFooter className="bg-accent/40 -mb-6 py-6">
        <div className="flex flex-col gap-4 w-full">
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <Calendar className="h-4 w-4 mt-1 text-primary shrink-0" />
              <div>
                <p className="font-medium">
                  {isMultiDay ? formattedDate : formattedStartDate}
                </p>
                <p className="text-sm text-muted-foreground">{show.address}</p>
              </div>
            </div>
          </div>
          {show.url ? (
            <Button asChild className="w-full">
              <Link href={show.url} target="_blank" rel="noopener noreferrer">
                <span>Event Details</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button disabled className="md:w-full">
              More details coming soon
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
