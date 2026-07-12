"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { faqItems } from "@/data/home-faq";


export const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function HomeFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      data-no-dots
      className="mx-auto max-w-5xl px-6 py-5 sm:px-8 sm:py-7 lg:max-w-6xl lg:px-12 lg:py-9 xl:max-w-7xl xl:px-16 xl:py-10 2xl:max-w-[1320px] 2xl:px-20 2xl:py-12"
    >
      <SectionTitle
        eyebrow="Вопросы и ответы"
        title="Частые вопросы"
        text="Короткие ответы на вопросы, которые чаще всего появляются перед заказом Telegram-бота, Max-бота, парсера или CRM-интеграции."
      />

      <Card className="relative overflow-hidden bg-[#081122]/72">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="pointer-events-none absolute left-10 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-emerald-300/35 to-transparent" />

        <div className="relative grid gap-2.5 sm:gap-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <button
                key={item.question}
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4 text-left transition hover:border-emerald-300/30 hover:bg-white/[0.05] sm:p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-semibold leading-6 text-white sm:text-lg">
                    {item.question}
                  </h3>

                  <ChevronDown
                    className={`mt-1 h-5 w-5 shrink-0 text-emerald-300 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {isOpen && (
                  <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                    {item.answer}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </Card>
    </section>
  );
}