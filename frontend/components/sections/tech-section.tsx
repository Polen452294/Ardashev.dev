import { CheckCircle2, Database } from "lucide-react";
import { techStack } from "@/data/site-data";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

const benefits = [
  "Можно быстро обсудить задачу и понять, какое решение подойдет именно под ваш процесс.",
  "На старте не требуется сложное техническое задание — достаточно описать идею, проблему или желаемый результат.",
  "Сразу можно определить, какие функции, интеграции и этапы действительно нужны проекту.",
  "Проект можно развивать поэтапно: от первой версии до системы с интеграциями и автоматизацией.",
];

export function TechSection() {
  return (
    <section className="mx-auto px-5 py-7 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:px-16 xl:py-14 2xl:px-20 2xl:py-16 max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1320px]"
    >
      <SectionTitle
        eyebrow="Technology"
        title="Технологии и подход к проекту"
        text="Подбираю стек и архитектуру под реальные задачи проекта, чтобы решение было не только рабочим, но и удобным для дальнейшего развития."
      />

      <div className="grid gap-4 sm:gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <div className="mb-3 inline-flex rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-2.5 text-emerald-300 sm:mb-4 sm:p-3">
            <Database className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>

          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            Технологии подбираются под задачи проекта
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-300 sm:leading-7">
            Для каждого проекта подбирается подходящий набор технологий с учетом целей,
            нагрузки, удобства поддержки и возможностей для дальнейшего развития.
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
            {techStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-200 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </Card>

        <Card className="relative overflow-hidden">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">Что это дает</h3>

          <ul className="mt-5 space-y-3.5 text-sm leading-6 text-slate-300 sm:mt-6 sm:space-y-4 sm:leading-7">
            {benefits.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}