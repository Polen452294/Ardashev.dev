import { ArrowRight, Briefcase } from "lucide-react";
import { portfolio } from "@/data/site-data";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="mx-auto max-w-5xl px-6 py-5 sm:px-8 sm:py-7 lg:max-w-6xl lg:px-12 lg:py-9 xl:max-w-7xl xl:px-16 xl:py-10 2xl:max-w-[1320px] 2xl:px-20 2xl:py-12"
    >
      <SectionTitle
        eyebrow="Portfolio"
        title="Проекты и кейсы"
        text="Примеры решений, которые помогают автоматизировать процессы, упростить работу с обращениями и выстроить удобные сценарии для бизнеса."
      />

      <div className="grid gap-2.5 sm:gap-5 lg:grid-cols-3">
        {portfolio.map((item, index) => (
          <Card key={item.title} className="flex h-full flex-col">
            <div className="mb-2.5 flex items-center justify-between sm:mb-4">
              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-slate-300 sm:text-xs">
                Case {index + 1}
              </div>
              <Briefcase className="h-4 w-4 text-emerald-300 sm:h-5 sm:w-5" />
            </div>

            <h3 className="text-lg font-semibold text-white sm:text-xl">{item.title}</h3>
            <p className="mt-1.5 text-xs leading-6 text-emerald-300 sm:mt-2 sm:text-sm">{item.stack}</p>
            <p className="mt-2 flex-1 text-sm leading-6 text-slate-300 sm:mt-4 sm:leading-7">
              {item.text}
            </p>

            <a
              href={item.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-[18px] border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-white transition hover:border-emerald-300/30 hover:bg-white/[0.08] active:scale-95 sm:mt-6 sm:rounded-2xl sm:px-4 sm:py-2.5"
            >
              Подробнее <ArrowRight className="h-4 w-4" />
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}