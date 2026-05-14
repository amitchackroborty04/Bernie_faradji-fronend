import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#005cc8] text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-semibold flex items-center gap-2">
              <Image
                src="/images/logo.svg" // Replace this with your logo path
                alt="BubbleDrive Logo"
                className="h-8 w-8"
              />
              <span>BubbleDrive </span>
            </span>
          </div>

          {/* Footer Links */}
          <div className="hidden md:flex space-x-8 text-sm">
            <Link href="/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/about-us" className="hover:underline">
              About Us
            </Link>
            <Link href="/contact-us" className="hover:underline">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-4 text-center text-xs md:text-sm">
          <p>© 2023 London Driver Services, Administered by City Transport Authority.</p>
        </div>
      </div>
    </footer>
  );
}