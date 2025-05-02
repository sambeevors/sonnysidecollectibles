'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh text-center px-4">
      <Image
        src="/sad-egg.png"
        alt="Sad Egg Angel"
        width={300}
        height={200}
        className="mx-auto mb-6 drop-shadow-lg"
        priority
      />
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="mb-6 text-lg text-muted-foreground max-w-md text-balance">
        Oops! It looks like we got a little scrambled, that page doesn&apos;t
        exist.
      </p>
      <Link href="/">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
}
