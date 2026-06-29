import { processSteps } from "@/data/site-data";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="mx-auto max-w-5xl px-6 py-5 sm:px-8 sm:py-7 lg:max-w-6xl lg:px-12 lg:py-9 xl:max-w-7xl xl:px-16 xl:py-10 2xl:max-w-[1320px] 2xl:px-20 2xl:py-12"
    >
      <SectionTitle
        eyebrow="Workflow"
        title="Как строится работа"
        text="Понятный процесс помогает быстрее согласовать требования, избежать хаоса в разработке и спокойно двигаться к запуску."
      />

      <div className="grid gap-2.5 sm:gap-5 md:grid-cols-2 lg:grid-cols-5">
        {processSteps.map((step, index) => (
          <Card key={step} className="relative overflow-hidden p-3.5 sm:p-5">
            <div className="absolute right-3 top-3 text-3xl font-semibold text-white/5 sm:right-4 sm:top-4 sm:text-4xl">
            </div>

            <div className="mb-2.5 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] text-emerald-300 sm:mb-4 sm:text-xs">
              Этап {index + 1}
            </div>

            <div className="text-sm font-medium leading-5 text-white sm:text-base sm:leading-7">
              {step}
            </div>
          </Card>
        ))}
      </div>

      <Card className="relative mt-2.5 overflow-hidden border-white/10 bg-[#081122]/72 sm:mt-5">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="pointer-events-none absolute left-10 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent" />

        <div className="relative">
          <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
            Бесплатный MVP
          </div>

          <div className="mt-4 grid gap-4 sm:gap-5 lg:grid-cols-[0.36fr_1fr] lg:items-start">
            <h3 className="text-xl font-semibold leading-tight text-white sm:text-2xl">
              Сначала результат — потом оплата
            </h3>

            <p className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Можно начать с бесплатного MVP: вы видите рабочий результат без доступа
              к коду, проверяете логику и только после этого оплачиваете проект. Код и
              файлы передаются после оплаты.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}