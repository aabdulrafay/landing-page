import Link from "next/link"
import Image from "next/image"
import { footerLinks } from "@/lib/config"

export function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-10 border-t border-gray-800" role="contentinfo" aria-label="Site footer">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-8 sm:gap-10">
        {/* Logo - Centered */}
        <div className="footer_logo hidden lg:block">
          <Link 
            href="/" 
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg p-1"
            aria-label="Go to homepage"
            tabIndex={0}
          >
            <Image
              src="/relevants_logo_black.svg"
              alt="Relevants - Home"
              width={120}
              height={40}
              className="h-8 lg:h-10"
              priority
            />
          </Link>
        </div>

        {/* Mobile Logo and Footer Links */}
        <div className="lg:hidden flex flex-col gap-4 sm:gap-6 w-full">
          {/* Mobile Logo and Button - Top Row - Full Width */}
          <div className="flex justify-between items-center w-full px-2 sm:px-4 gap-2 sm:gap-8">
            {/* Mobile Logo */}
            <div className="footer_logo">
              <Link 
                href="/" 
                className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg p-1"
                aria-label="Go to homepage"
                tabIndex={0}
              >
                <Image
                  src="/relevants_logo_black.svg"
                  alt="Relevants - Home"
                  width={120}
                  height={40}
                  className="h-6 sm:h-8"
                  priority
                />
              </Link>
            </div>
            
            {/* Mobile Button */}
            <Link 
              href="https://t.me/relevants_bot?start=Site1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 border border-blue-400 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black text-xs sm:text-sm"
              aria-label="Join as a specialist on Telegram"
              tabIndex={0}
            >
              Я исполнитель
            </Link>
          </div>

          {/* Mobile Footer Links - Left Aligned - Full Width */}
          <nav className="footer_links w-full" role="navigation" aria-label="Footer navigation">
            <ul className="flex flex-col items-start gap-3 sm:gap-4 text-xs sm:text-sm w-full">
              {footerLinks.filter(link => !link.special).map((link, index) => (
                <li key={index} className="w-full">
                  <Link 
                    href={link.href}
                    download={link.download}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded px-1 py-0.5 block w-full"
                    aria-label={`${link.title}${link.download ? ' - Download document' : ''}`}
                    tabIndex={0}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li className="text-gray-400 font-medium mt-3 sm:mt-4 w-full text-xs sm:text-sm" aria-label="Copyright 2025">© 2025</li>
            </ul>
          </nav>
        </div>

        {/* Footer Links - Centered for Desktop */}
        <nav className="footer_links lg:block hidden" role="navigation" aria-label="Footer navigation">
          <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base">
            <li className="text-gray-400 font-medium" aria-label="Copyright 2025">© 2025</li>
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  href={link.href}
                  download={link.download}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={`${
                    link.special 
                      ? "text-blue-400 border border-blue-400 px-4 py-2 rounded-full hover:bg-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
                      : "text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded px-1 py-0.5"
                  }`}
                  aria-label={`${link.title}${link.download ? ' - Download document' : ''}`}
                  tabIndex={0}
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