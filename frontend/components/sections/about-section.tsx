import Image from "next/image";
import { SectionTitle } from "@/components/ui/section-title";

const aboutParagraphs = [
  "Я — разработчик систем автоматизации с опытом создания и запуска проектов под ключ, главный разработчик в сервисе Ardashev.dev. Учусь в одном из лучших вузов страны, НИТУ МИСиС.",
  "Специализируюсь на решениях для бизнеса: приём и обработка заказов, админ-панели, автоматизация общения с клиентами, интеграции с API, базами данных и платёжными системами.",
  "Работаю с CRM, нейросетями, aiogram, Docker, асинхронной архитектурой, базами данных и серверным деплоем. Моя задача — превратить идею в стабильное и удобное решение, которое экономит время и приносит пользу.",
];

export function AboutSection() {
  return (
    <section
      id="about"
      data-no-dots
      className="mx-auto max-w-5xl px-6 py-5 sm:px-8 sm:py-7 lg:max-w-6xl lg:px-12 lg:py-9 xl:max-w-7xl xl:px-16 xl:py-10 2xl:max-w-[1320px] 2xl:px-20 2xl:py-12"
    >
      <SectionTitle
        eyebrow="О разработчике"
        title="Кто я такой"
        text="Небольшой блок обо мне — чтобы было понятно, кому вы доверяете разработку проекта."
      />

      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#081122]/72 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.24)] backdrop-blur-md after:block after:clear-both sm:rounded-3xl sm:p-5 lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:items-stretch lg:gap-4 lg:overflow-visible lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none lg:after:hidden xl:grid-cols-[300px_minmax(0,1fr)]">
        <div className="pointer-events-none absolute -left-14 -top-14 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-4 h-56 w-56 rounded-full bg-cyan-400/5 blur-3xl" />
        <div className="pointer-events-none absolute left-10 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-emerald-300/35 to-transparent" />

        <div className="relative float-left mb-3 mr-4 w-[150px] min-[390px]:w-[170px] sm:mb-4 sm:mr-5 sm:w-[210px] lg:float-none lg:m-0 lg:flex lg:h-full lg:w-auto lg:items-center lg:justify-center lg:overflow-hidden lg:rounded-3xl lg:border lg:border-white/10 lg:bg-[#081122]/72 lg:p-4 lg:shadow-[0_10px_40px_rgba(0,0,0,0.24)] lg:backdrop-blur-md">
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_0_60px_rgba(52,211,153,0.08)] lg:w-full lg:rounded-[30px]">
            <div className="relative overflow-hidden rounded-[18px] bg-[#020817] sm:rounded-[20px] lg:rounded-[24px]">
              <Image
                src="/about-photo.jpg"
                alt="Александр Ардашев, разработчик Ardashev.dev"
                width={1519}
                height={2048}
                sizes="(max-width: 390px) 150px, (max-width: 1023px) 210px, 300px"
                className="h-auto w-full lg:max-h-[440px] lg:w-auto xl:max-h-[460px]"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#020817]/80 via-[#020817]/20 to-transparent lg:h-28" />
            </div>
          </div>
        </div>

        <div className="relative text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 lg:flex lg:h-full lg:items-start lg:overflow-hidden lg:rounded-3xl lg:border lg:border-white/10 lg:bg-[#081122]/72 lg:p-6 lg:shadow-[0_10px_40px_rgba(0,0,0,0.24)] lg:backdrop-blur-md xl:p-7 xl:text-[17px] xl:leading-8">
          <div className="space-y-4">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
