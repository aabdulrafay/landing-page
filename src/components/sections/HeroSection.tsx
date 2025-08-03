"use client"

import Link from "next/link"
import Image from "next/image"

const avatarData = [
  {
    image: "/image1.png",
    name: "Digital-агентство",
    bgColor: "#E6E6FA"
  },
  {
    image: "/image2.png",
    name: "Production студия",
    bgColor: "#FCE4EC"
  },
  {
    image: "/image3.png",
    name: "Дизайн студия",
    bgColor: "#E6FFE6"
  },
  {
    image: "/image4.png",
    name: "Фрилансеры",
    bgColor: "#FDF6E3"
  },
  {
    image: "/image5.png",
    name: "Предприниматели",
    bgColor: "#E6F0FA"
  }
]

const mobileAvatarData = [
  {
    image: "/image1.png",
    name: "Digital-агентство",
    bgColor: "#E6E6FA"
  },
  {
    image: "/image2.png",
    name: "Production студия",
    bgColor: "#FCE4EC"
  },
  {
    image: "/image3.png",
    name: "Дизайн студия",
    bgColor: "#E6FFE6"
  },
  {
    image: "/image4.png",
    name: "Фрилансеры",
    bgColor: "#FDF6E3"
  },
  {
    image: "/image5.png",
    name: "Предприниматели",
    bgColor: "#E6F0FA"
  },
  {
    image: "/image6.png",
    name: "Продакт менеджеры",
    bgColor: "#E8F4FD"
  }
]

export function HeroSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-12 lg:py-16 -mt-12 lg:-mt-12 lg:pt-32 relative z-0">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left sm:text-center">
          {/* Main Heading */}
          <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold text-[#333333] leading-tight mb-3 xs:mb-4 sm:mb-6 max-w-xs xs:max-w-sm sm:max-w-lg lg:max-w-xl sm:mx-auto">
            Мы помогаем собирать команды по всему миру
          </h1>
          
          {/* Subheading */}
          <div className="text-xs xs:text-sm sm:text-base lg:text-[18px] text-[#666666] leading-relaxed max-w-xs xs:max-w-sm sm:max-w-lg lg:max-w-xl sm:mx-auto mb-6 xs:mb-8 sm:mb-12 text-left sm:text-center">
            <p className="mb-2 xs:mb-3 sm:mb-4">
              С Relevants вы быстрее запускаете проекты — за счёт точного AI-подбора фрилансеров и сотрудников под ваши задачи.
            </p>
            <p className="mb-2 xs:mb-3 sm:mb-4">
              Поиск — как в TikTok: листаете подборку анкет и выбираете тех, кто вам подходит. При взаимном мэтче контакты приходят в Telegram — быстро, удобно, без лишних действий.
            </p>
          </div>
          

          
          {/* "с нами работают" text - mobile */}
          <div className="text-center mb-4 sm:hidden">
            <p className="text-lg font-caveat font-bold text-[#333333]">
              с нами <span className="underline decoration-2 underline-offset-4">работают</span>
            </p>
          </div>
          
          {/* Avatar Cards */}
          <div className="flex justify-center items-center mb-4 xs:mb-6 sm:mb-8 relative">
            {/* "с нами работают" text positioned on top of last 2 cards - desktop only */}
            <div className="absolute top-0 z-10 hidden sm:block sm:right-[160px] md:right-[140px] lg:right-[120px] xl:right-[100px]">
              <p className="text-lg sm:text-xl lg:text-2xl font-caveat font-bold text-[#333333] transform rotate-12 origin-bottom-right">
                с нами <span className="underline decoration-2 underline-offset-4">работают</span>
              </p>
            </div>
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-0 sm:flex sm:items-center sm:justify-center">
              {/* Mobile cards (6 cards) */}
              <div className="contents sm:hidden">
                {mobileAvatarData.map((avatar, index) => (
                  <div
                    key={`mobile-${index}`}
                    className="flex flex-col items-center p-1 xs:p-1 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#F9F9FA] mobile-no-transform"
                  >
                    <div 
                      className="w-20 h-20 xs:w-24 xs:h-24 mb-2 rounded-lg p-3 xs:p-4"
                      style={{ backgroundColor: avatar.bgColor }}
                    >
                      <Image
                        src={avatar.image}
                        alt={avatar.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-xs xs:text-xs font-caveat font-bold text-[#000000]">
                        {avatar.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Desktop cards (5 cards with arch effect) */}
              <div className="hidden sm:contents">
                {avatarData.map((avatar, index) => (
                                     <div
                     key={`desktop-${index}`}
                     className="flex flex-col items-center p-1 xs:p-1 sm:p-2 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#F9F9FA]"
                                           style={{
                        transform: `translateY(${Math.abs(index - 2) * 32 + (index === 0 || index === 4 ? 16 : 0)}px) translateX(${(index - 2) * -28 + (index === 0 ? 4 : index === 1 ? -11 : index === 3 ? 13 : index === 4 ? -5 : 0)}px) rotate(${(index - 2) * 8 + (index === 0 ? -6 : index === 1 ? -8 : index === 3 ? 8 : index === 4 ? 10 : 0)}deg)`,
                        zIndex: 5 - Math.abs(index - 2)
                      }}
                   >
                    <div 
                      className="w-20 h-28 xs:w-24 xs:h-32 sm:w-20 sm:h-28 md:w-24 md:h-32 lg:w-28 lg:h-36 xl:w-32 xl:h-40 2xl:w-36 2xl:h-44 mb-2 sm:mb-3 rounded-lg p-2 xs:p-3 sm:p-4 lg:p-6"
                      style={{ backgroundColor: avatar.bgColor }}
                    >
                      <Image
                        src={avatar.image}
                        alt={avatar.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-xs xs:text-xs sm:text-sm md:text-base font-caveat font-bold text-[#000000]">
                        {avatar.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Small text */}
          <p className="text-xs xs:text-sm sm:text-sm text-[#666666] text-center mb-2 xs:mb-3 sm:mb-4 mt-4 xs:mt-6 sm:mt-10 md:mt-12 lg:mt-10 pt-1 xs:pt-2 sm:pt-4 md:pt-6 lg:pt-4 font-semibold">
            Расскажите, что вы ищете
          </p>
          
          {/* Call to Action Button */}
          <div className="text-center">
            <Link
              href="#"
              className="inline-block bg-[#007BFF] text-white px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 rounded-full font-semibold text-xs xs:text-sm sm:text-base hover:bg-[#0056b3] transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Подобрать исполнителя → 30 секунд
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 