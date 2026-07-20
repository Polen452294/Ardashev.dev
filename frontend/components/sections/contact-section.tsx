"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { contactLinks } from "@/data/site-data";

export function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !cardRef.current
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const copyToClipboard = async (value: string, title: string) => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(title);

      setTimeout(() => {
        setCopied((current) => (current === title ? null : current));
      }, 1800);
    } catch {}
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-6 py-5 sm:px-8 sm:py-7 lg:max-w-6xl lg:px-12 lg:py-9 xl:max-w-7xl xl:px-16 xl:py-10 2xl:max-w-[1320px] 2xl:px-20 2xl:py-12"
    >
      <div className="max-w-3xl">
        <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-emerald-300 sm:text-xs">
          Контакты
        </div>

        <h2 className="mt-3 text-[34px] font-semibold leading-[1.05] tracking-tight text-white sm:mt-4 sm:text-5xl">
          Создать заказ
        </h2>

        <p className="mt-3 max-w-2xl text-[15px] leading-8 text-slate-300 sm:mt-5 sm:text-lg">
          Выберите удобный способ связи и коротко опишите задачу.
          Напишите: что нужно сделать, какой срок и какой результат
          вы хотите получить.
        </p>
      </div>

      <div
        ref={cardRef}
        className={`relative mt-6 overflow-hidden rounded-[32px] border border-white/10 bg-[#081122]/70 p-4 shadow-[0_0_60px_rgba(52,211,153,0.08)] backdrop-blur-xl transition-[opacity,transform] duration-[600ms] ease-out sm:mt-10 sm:p-7 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-[110px]" />

        <div className="relative grid gap-5 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h3 className="text-[26px] font-semibold leading-tight text-white sm:text-[32px]">
              Напишите в удобном формате
            </h3>

            <p className="mt-3 text-[15px] leading-8 text-slate-300 sm:mt-4 sm:text-base">
              Даже если пока нет точного ТЗ — можно просто описать идею.
              Вместе определим подходящий формат реализации, функционал
              и следующий шаг разработки.
            </p>
          </div>

          <div className="space-y-2.5 sm:space-y-4">
            {contactLinks.map((item) => {
              const Icon = item.title === "Email" ? Mail : MessageCircle;
              const isEmail = item.title === "Email";
              const isCopied = copied === item.title;

              const content = (
                <>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                    <Icon className="h-4 w-4" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="text-[15px] font-semibold leading-5 text-white sm:text-lg sm:leading-6">
                        {item.title}
                      </div>

                      <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-emerald-300" />
                    </div>

                    <div className="mt-1 text-[13px] leading-5 text-slate-300 sm:text-sm">
                      {item.text}
                    </div>
                  </div>

                  <span className="hidden shrink-0 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1.5 text-[13px] font-medium leading-5 text-emerald-200 transition group-hover:border-emerald-300/40 group-hover:bg-emerald-400/15 sm:inline-flex">
                    {isEmail && isCopied ? "Скопировано" : "Перейти"}
                  </span>
                </>
              );

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  onClick={
                    isEmail
                      ? () => copyToClipboard(item.label, item.title)
                      : undefined
                  }
                  className="group flex items-center gap-3 rounded-[20px] border border-white/10 bg-white/[0.04] px-3.5 py-3 transition hover:border-emerald-300/30 hover:bg-white/[0.07] sm:px-4 sm:py-4"
                >
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
