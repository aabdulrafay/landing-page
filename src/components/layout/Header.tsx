"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { navItems, actionButtons } from "@/lib/config"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-[#ddf1ff] overflow-hidden rounded-b-[60px] min-h-screen">
      <div className="header_area_wrapper w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-6 h-full">

        
        {/* Navigation Bar */}
        <div className="navbar w-full transition-all duration-800 ease-out bg-white rounded-[100px] shadow-[2px_5px_34px_0px_#7695aa61]">
          <div className="navbar_area_wrapper max-w-[1440px] mx-auto w-full px-4 sm:px-6 py-2 rounded-[100px] flex justify-between items-center bg-white shadow-[2px_5px_34px_0px_#7695aa61]">
            <div className="logo">
              <Link href="#" className="h-[50px] sm:h-[50px] lg:h-[54px] flex items-center">
                <Image
                  src="/relevants-logo.png"
                  alt="Relevants"
                  width={120}
                  height={40}
                  priority
                  className="max-h-10 sm:max-h-9 lg:max-h-10"
                />
              </Link>
            </div>

            <div
              id="nav_items"
              className={`w-full flex justify-between items-center ${
                isMenuOpen ? 'fixed inset-0 z-50 bg-black/80 backdrop-blur-sm lg:static lg:bg-transparent lg:flex' : 'hidden lg:flex'
              }`}
            >
              <div
                id="close-btn"
                className="menu_close lg:hidden absolute top-6 right-6"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={24} className="text-white" />
              </div>

              {/* Desktop Navigation */}
              <ul className="navlinks hidden lg:flex justify-center items-center w-full gap-4 lg:gap-6">
                {navItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="font-raleway text-sm lg:text-base font-semibold leading-6 tracking-[0.5px] text-[#131318] transition-all duration-200 ease hover:opacity-70"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Navigation */}
              <div className="lg:hidden flex flex-col justify-between h-full w-full px-6 py-6">
                <ul className="navlinks flex flex-col items-start w-full gap-8 mt-20">
                  {navItems.map((item) => (
                    <li key={item.title} className="w-full">
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="font-raleway text-lg font-semibold leading-6 tracking-[0.5px] text-white transition-all duration-200 ease hover:opacity-70 text-left"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="navBtns flex flex-col items-start w-full gap-4">
                  {actionButtons.map((button, index) => (
                    <Link
                      key={button.title}
                      href={button.href}
                      target={button.external ? "_blank" : undefined}
                      rel={button.external ? "noopener noreferrer" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                      className={`w-auto min-w-[200px] max-w-[240px] h-12 px-6 rounded-full cursor-pointer transition-all duration-200 ease font-raleway text-base font-semibold leading-6 text-center flex items-center justify-center ${
                        index === 0 
                          ? 'text-white bg-blue-600 hover:bg-blue-700' 
                          : 'text-blue-600 border border-blue-600 bg-white hover:bg-blue-50'
                      }`}
                    >
                      {button.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Desktop Buttons */}
              <div className="navBtns hidden lg:flex min-w-[180px] lg:min-w-[220px] justify-end items-center gap-3 lg:gap-6">
                {actionButtons.map((button, index) => (
                  <Link
                    key={button.title}
                    href={button.href}
                    target={button.external ? "_blank" : undefined}
                    rel={button.external ? "noopener noreferrer" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center text-blue-400 border-[1.5px] border-blue-400 bg-transparent min-w-[100px] lg:min-w-[120px] h-8 lg:h-10 px-2 lg:px-3 py-1 lg:py-2 rounded-[120px] cursor-pointer transition-all duration-200 ease text-xs lg:text-[13.33px] hover:bg-blue-400 hover:text-white hover:border-blue-400"
                  >
                    {button.title}
                  </Link>
                ))}
              </div>
            </div>

            <div
              id="menu-btn"
              className="hamburger lg:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} className="text-gray-600" />
            </div>
          </div>
        </div>

        {/* Hero Area */}
        <div className="hero_area w-full flex-1 flex items-center">
          <div className="hero_area_wrapper flex flex-col lg:flex-row justify-between items-center w-full h-full py-8 px-4 sm:px-6 gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="hero_left w-full lg:w-1/2">
              <div className="hero_left_area_wrapper flex flex-col gap-12 sm:gap-16 lg:gap-20">
                {/* Relevants — получайте доступ к специалистам мгновенно */}
                <div className="hero_meta flex flex-col gap-8 sm:gap-10 lg:gap-12">
                  <div className="hero_meta_head">
                    <article className="font-raleway text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-black leading-tight sm:leading-tight md:leading-tight lg:leading-[56px] text-left text-black">
                      Relevants – получайте доступ к специалистам мгновенно
                    </article>
                    <div className="on_business relative mt-2 sm:mt-4">
                      <h2 className="font-caveat text-3xl sm:text-4xl md:text-5xl lg:text-[82px] font-normal leading-tight sm:leading-tight md:leading-tight lg:leading-[82px] text-left relative z-10 text-black">
                        мгновенно
                      </h2>
                      <div className="business_border absolute w-24 sm:w-28 md:w-32 lg:w-[280px] h-4 sm:h-4 md:h-4 lg:h-[12px] top-6 sm:top-8 md:top-10 lg:top-[52.42px] -left-4 sm:-left-4 md:-left-4 lg:-left-[12px] z-0">
                        <svg width="100%" height="100%" viewBox="0 0 300 16" className="w-full h-full">
                          <path 
                            d="M15,8 Q35,4 55,8 Q75,12 95,8 Q115,4 135,8 Q155,12 175,8 Q195,4 215,8 Q235,12 255,8 Q275,4 285,8" 
                            stroke="#E6B8E6" 
                            strokeWidth="10" 
                            fill="none" 
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <h1 className="font-raleway text-base sm:text-lg md:text-xl font-normal leading-6 sm:leading-7 text-left text-black">
                    Здесь можно нанять специалиста на проект, задачу напрямую — без чатов, спама и ожидания
                  </h1>
                </div>

                <div className="hero_bottom_meta flex flex-col justify-start items-start gap-8 sm:gap-10 lg:gap-14">
                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <Link
                      className="text-white bg-blue-600 w-full sm:w-auto min-w-[200px] h-12 px-6 rounded-full cursor-pointer transition-all duration-200 ease font-raleway text-sm sm:text-base font-semibold leading-6 text-center hover:bg-blue-700 flex items-center justify-center"
                      href="#"
                    >
                      Разместить задачу
                    </Link>
                    <Link
                      className="text-blue-600 border border-blue-600 bg-blue-50 w-full sm:w-auto min-w-[200px] h-12 px-6 rounded-full cursor-pointer transition-all duration-200 ease font-raleway text-sm sm:text-base font-semibold leading-6 text-center hover:bg-blue-100 flex items-center justify-center"
                      href="#"
                    >
                      Найти исполнителя
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="hero_right w-full lg:w-1/2">
              <div className="hero_img w-full p-0">
                <Image
                  src="/hero_img.png"
                  alt="Hero image"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>

              <div className="hero_bottom_meta block lg:hidden mt-6">
                {/* Action buttons */}
                <div className="flex flex-col gap-4">
                  <Link
                    className="text-white bg-blue-600 w-full h-12 px-6 rounded-full cursor-pointer transition-all duration-200 ease font-raleway text-sm font-semibold leading-6 text-center hover:bg-blue-700 flex items-center justify-center"
                    href="#"
                  >
                    Разместить задачу
                  </Link>
                  <Link
                    className="text-blue-600 border border-blue-600 bg-blue-50 w-full h-12 px-6 rounded-full cursor-pointer transition-all duration-200 ease font-raleway text-sm font-semibold leading-6 text-center hover:bg-blue-100 flex items-center justify-center"
                    href="#"
                  >
                    Найти исполнителя
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 