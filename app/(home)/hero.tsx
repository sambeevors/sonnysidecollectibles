import { ModeToggle } from '@/components/mode-toggle';
import Image from 'next/image';

const Hero = () => {
  return (
    <header className="relative h-auto w-full">
      <div className="absolute top-4 right-4 text-primary-foreground">
        <ModeToggle />
      </div>
      <div className="bg-primary flex items-center justify-center py-8">
        <div className="text-center text-primary-foreground">
          <Image
            src="/logo.png"
            alt="Sonny Side Collectibles Logo"
            width={1024}
            height={1024}
            className="mx-auto mb-6 w-full h-auto max-w-sm md:max-w-md"
            priority
          />
          <h1 className="sr-only">Sonny Side Collectibles</h1>
          <p className="text-xl md:text-2xl text-balance font-display">
            Your go-to place for buying and selling Pokémon, Yu-Gi-Oh, Sonny
            Angels, and other collectibles!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
