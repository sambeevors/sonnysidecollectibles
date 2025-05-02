import { Footer } from '@/components/footer';
import Hero from './hero';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
