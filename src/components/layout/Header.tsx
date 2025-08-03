"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { navItems, actionButtons } from "@/lib/config"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-[#ddf1ff] overflow-hidden rounded-b-[60px] min-h-screen relative z-10">
      <div className="header_area_wrapper w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-6 h-full">

        
        {/* Navigation Bar */}
        <div className="navbar w-full transition-all duration-800 ease-out bg-transparent lg:bg-white rounded-[100px] shadow-none lg:shadow-[2px_5px_34px_0px_#7695aa61]">
          <div className="navbar_area_wrapper max-w-[1440px] mx-auto w-full px-4 sm:px-6 py-2 rounded-[100px] flex justify-between items-center bg-transparent lg:bg-white shadow-none lg:shadow-[2px_5px_34px_0px_#7695aa61]">
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
              <div className="flex flex-col gap-1">
                <div className="w-6 h-0.5 bg-black rounded"></div>
                <div className="w-4 h-0.5 bg-black rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Area */}
        <div className="hero_area w-full flex-1 flex items-center">
          <div className="hero_area_wrapper flex flex-col lg:flex-row justify-between items-center w-full h-full py-4 sm:py-6 lg:py-8 px-4 sm:px-6 gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="hero_left w-full lg:w-1/2">
                              <div className="hero_left_area_wrapper flex flex-col gap-6 sm:gap-8 lg:gap-12">
                {/* Relevants — получайте доступ к специалистам мгновенно */}
                <div className="hero_meta flex flex-col gap-4 sm:gap-6 lg:gap-8">
                  <div className="hero_meta_head">
                    <article className="font-raleway text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-black leading-tight sm:leading-tight md:leading-tight lg:leading-[56px] text-left text-black">
                      Relevants – получайте доступ{' '}
                      <span className="hidden sm:inline">к специалистам</span>
                      <span className="sm:hidden"><br />к специалистам</span>{' '}
                      <span className="relative inline-block">
                        <span className="relative z-10">мгновенно</span>
                        <div className="absolute bottom-0 left-0 w-full z-0">
                          <Image
                            src="/Vector324.svg"
                            alt="Decorative underline"
                            width={204}
                            height={27}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </span>
                    </article>
                  </div>

                  <h1 className="font-raleway text-base sm:text-lg md:text-xl font-normal leading-6 sm:leading-7 text-justify text-black max-w-[360px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[480px]">
                    Здесь можно нанять специалиста на проект, задачу напрямую — без чатов, спама и ожидания
                  </h1>
                </div>

                <div className="hero_bottom_meta flex flex-col justify-start items-start gap-4 sm:gap-6 lg:gap-8">
                  {/* Action buttons */}
                  <div className="hidden sm:flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-20 max-w-[360px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[480px]">
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