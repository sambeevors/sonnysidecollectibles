import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-pink-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p>Email: info@sonnysidecollectibles.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com"
                className="text-pink-600 hover:underline"
              >
                Instagram
              </Link>
              <Link
                href="https://www.facebook.com"
                className="text-pink-600 hover:underline"
              >
                Facebook
              </Link>
              <Link
                href="https://www.twitter.com"
                className="text-pink-600 hover:underline"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
