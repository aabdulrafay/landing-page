import Link from "next/link"
import Image from "next/image"
import { footerLinks } from "@/lib/config"

export function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-10 border-t border-gray-800">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-8 sm:gap-10">
        {/* Logo - Centered */}
        <div className="footer_logo">
          <Link 
            href="/" 
            className="flex items-center"
            aria-label="Go to homepage"
          >
            <Image
              src="/relevants_logo_black.svg"
              alt="Relevants - Home"
              width={120}
              height={40}
              className="h-8 sm:h-10"
              priority
            />
          </Link>
        </div>

        {/* Footer Links - Centered */}
        <nav className="footer_links" role="navigation" aria-label="Footer navigation">
          <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base">
            <li className="text-gray-400 font-medium">© 2025</li>
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  href={link.href}
                  download={link.download}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={`${
                    link.special 
                      ? "text-blue-400 border border-blue-400 px-4 py-2 rounded-full hover:bg-blue-400 hover:text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  aria-label={link.title}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
} 