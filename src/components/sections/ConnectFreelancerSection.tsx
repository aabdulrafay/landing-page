"use client"

import Image from "next/image"

const comments = [
  {
    text: "Мне пишут все подряд в ТГ, кроме тех кто мне нужен",
    author: "Анна, HR менеджер"
  },
  {
    text: "Запуск нового проекта для меня стресс, только потому что вы не знаете где искать и как долго вам подбирать команду на проект",
    author: "Светлана, арт директор"
  },
  {
    text: "Я устал от рутинного пролистывания Telegram-каналов с вакансиям",
    author: "Иван, дизайнер"
  },
  {
    text: "Хочу найти команду, но не знаю где искать. Сейчас приходится писать во множество чатов, отликов очень мало получаю",
    author: "Елена, моушен дизайнер"
  },
  {
    text: "Иногда хочется больше фильтров для поиска. Искать как иголку в стоге сена! 🧵",
    author: "Степан, арт-директор"
  }
]

export function ConnectFreelancerSection() {
  return (
    <section id="connect_freelancer_area" className="sec_area pt-56">
      <div className="container w-full max-w-[1440px] mx-auto px-16">
        <div className="connect_freelancer_area_wrapper sec_area_wrapper flex flex-col gap-40">
          <div className="sec_header w-full flex justify-center">
            <div className="sec_header_wrapper w-full max-w-[721.95px] gap-8 flex flex-col justify-center items-center">
              <h2 className="main_h2_semibold font-raleway text-5xl font-semibold leading-14 text-center text-[#09090d]">
                Мы объединяем фрилансеров по всему миру
              </h2>
              <p className="main_body2_regular font-raleway text-xl font-normal leading-7 text-center text-[#09090d]">
                Делаем процесс запуска проектов доступным и быстрым за счёт
                релевантного подбора специалиста или команды под задачи,
                а также поиска самого проекта, в котором нужны именно ваши
                компетенции
              </p>
            </div>
          </div>

          {/* connect_freelancer_content_area */}
          <div className="connect_freelancer_content_area">
            <div className="connect_freelancer_content_area_wrapper flex flex-col gap-24">
              {/* tripple comment item area */}
              <div className="tripple_items flex flex-wrap w-full gap-24 justify-start">
                {/* single item */}
                <h2 className="font-caveat text-4xl font-normal leading-[82px] text-left h-[82px] -left-[1.3px] transform translate-y-[32.67px] -rotate-[11.4deg]">
                  знаем ваши боли
                </h2>

                {/* single comment items */}
                {comments.map((comment, index) => (
                  <div 
                    key={index}
                    className={`single_comment max-w-[424px] w-full left-[286.97px] p-4 rounded-[18px] gap-4 bg-[#ffe9e8] transform flex gap-2 ${
                      index === 0 ? 'translate-y-[-20.28px] rotate-[1.36deg] max-h-[116px]' :
                      index === 1 ? 'max-w-[444px] min-w-[444px] w-full left-[796.33px] translate-y-[18.2px] -rotate-[0.44deg]' :
                      index === 2 ? 'max-w-[424px] min-w-[424px] max-h-[116px] left-[15.21px] translate-y-[-55.29px] rotate-[0.51deg]' :
                      index === 3 ? 'max-w-[464.56px] min-w-[464.56px] left-[15.21px] translate-y-[90.1px] -translate-x-[216.87px] -rotate-[4.02deg]' :
                      'max-w-[467.02px] min-w-[467.02px] translate-y-[-200px] translate-x-[760px] rotate-[2.99deg]'
                    }`}
                  >
                    {/* emoji */}
                    <div className="comment_emoji w-[46px]">
                      <Image 
                        src="/sad_emoji.png" 
                        alt="Sad emoji" 
                        width={46} 
                        height={46}
                        className="w-full"
                      />
                    </div>

                    {/* comment */}
                    <div className="comment_right w-full flex flex-col justify-start gap-1">
                      <p className="main_body4_regular font-raleway text-base font-normal leading-6 text-[#09090d]">
                        {comment.text}
                      </p>
                      <span className="main_body4_regular font-raleway text-base font-normal leading-6 text-[#7d7d7d]">
                        {comment.author}
                      </span>
                    </div>
                  </div>
                ))}

                {/* we have a solution */}
                <h2 className="font-caveat text-4xl font-normal leading-[82px] text-left h-[82px] transform translate-y-[32.67px] translate-x-[230px] rotate-[5.01deg]">
                  у нас есть <span className="underline underline-offset-6">решение</span>
                </h2>
              </div>
              {/* end tripple comment item area */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 