"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FloatingShapes from "@/components/background/floating-shapes";
import { ContactButtons } from "@/components/contact-buttons";
import { GlowButton } from "@/components/ui/glow-button";
import { Card } from "@/components/ui/card";
import { FooterSection } from "@/components/sections/footer-section";

type InnerPageLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  children: ReactNode;
};

type InnerPageSectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

type InnerPageTitleProps = {
  eyebrow: string;
  title: string;
  text: string;
};

type TextItem = {
  title?: string;
  text: string;
};

type LinkItem = {
  title: string;
  text: string;
  href: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export function InnerPageLayout({
  eyebrow,
  title,
  description,
  primaryText = "Создать заказ",
  primaryHref = "/#contact",
  secondaryText = "Смотреть кейсы",
  secondaryHref = "#portfolio",
  children,
}: InnerPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#020817] text-white selection:bg-emerald-300 selection:text-slate-950">
      <div className="relative isolate overflow-hidden">
        <FloatingShapes />

        <header className="sticky top-0 z-40 border-b border-white/5 bg-[#020817]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 sm:py-5 lg:px-12 xl:px-16">
            <Link
              href="/#hero"
              className="text-[26px] font-semibold tracking-tight text-white transition hover:text-emerald-300 min-[390px]:text-[28px] sm:text-[34px]"
            >
              Ardashev<span className="text-emerald-300">.</span>dev
            </Link>

            <div className="hidden items-center gap-6 sm:flex">
              <a
                href="tel:+79168626404"
                className="text-[18px] font-semibold leading-none text-white transition hover:text-emerald-300"
              >
                +7 916 862-64-04
              </a>

              <ContactButtons />
            </div>
          </div>
        </header>

        <main className="relative z-10">
          <motion.section
            data-no-dots
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mx-auto max-w-5xl px-6 pb-3 pt-7 sm:px-8 sm:pb-5 sm:pt-12 lg:max-w-6xl lg:px-12 lg:pb-6 lg:pt-14 xl:max-w-7xl xl:px-16 xl:pb-7 xl:pt-16 2xl:max-w-[1320px] 2xl:px-20"
            >
            <div className="max-w-4xl">
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-300 sm:text-sm sm:tracking-[0.24em]">
                {eyebrow}
              </div>

              <h1 className="mt-3 text-[34px] font-semibold leading-[1.05] tracking-tight text-white sm:mt-4 sm:text-5xl lg:text-6xl">
                {title}
              </h1>

              <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
                {description}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <GlowButton href={primaryHref}>{primaryText}</GlowButton>
                <GlowButton href={secondaryHref} secondary>
                  {secondaryText}
                </GlowButton>
              </div>
            </div>
          </motion.section>

          {children}
        </main>
        <div data-no-dots className="relative z-10">
        <FooterSection />
        </div>
      </div>
    </div>
  );
}

export function InnerPageSection({
  children,
  id,
  className = "",
}: InnerPageSectionProps) {
  return (
    <motion.section
        id={id}
        data-no-dots
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      className={[
        "mx-auto max-w-5xl px-6 py-2.5 sm:px-8 sm:py-4 lg:max-w-6xl lg:px-12 lg:py-5 xl:max-w-7xl xl:px-16 xl:py-6 2xl:max-w-[1320px] 2xl:px-20 2xl:py-7",
        className,
      ].join(" ")}
    >
      {children}
    </motion.section>
  );
}

export function InnerPageTitle({ eyebrow, title, text }: InnerPageTitleProps) {
  return (
    <div className="mb-4 max-w-3xl sm:mb-6">
      <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-300 sm:text-sm sm:tracking-[0.24em]">
        {eyebrow}
      </div>

      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:mt-3 sm:text-3xl md:text-4xl">
        {title}
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-300 sm:mt-3 sm:text-lg sm:leading-8">
        {text}
      </p>
    </div>
  );
}

export function TwoColumnTextSection({
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
}: {
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
}) {
  return (
    <InnerPageSection>
      <div className="grid gap-2.5 sm:gap-5 lg:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            {leftTitle}
          </h2>

          <div className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
            {leftItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-[#081122]/70 px-4 py-3 text-sm leading-6 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            {rightTitle}
          </h2>

          <div className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
            {rightItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-[#081122]/70 px-4 py-3 text-sm leading-6 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </InnerPageSection>
  );
}

export function TagGridSection({
  eyebrow,
  title,
  text,
  items,
}: {
  eyebrow: string;
  title: string;
  text: string;
  items: string[];
}) {
  return (
    <InnerPageSection>
      <InnerPageTitle eyebrow={eyebrow} title={title} text={text} />

      <div className="grid gap-2.5 sm:gap-5 lg:grid-cols-3">
        {items.map((item, index) => (
          <Card key={item} className="h-full">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-sm font-semibold text-emerald-300">
              {index + 1}
            </div>

            <h3 className="text-base font-semibold leading-6 text-white">
              {item}
            </h3>
          </Card>
        ))}
      </div>
    </InnerPageSection>
  );
}

export function TextGridSection({
  eyebrow,
  title,
  text,
  items,
}: {
  eyebrow: string;
  title: string;
  text: string;
  items: TextItem[];
}) {
  return (
    <InnerPageSection>
      <InnerPageTitle eyebrow={eyebrow} title={title} text={text} />

      <div className="grid gap-2.5 sm:gap-5 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title ?? item.text} className="h-full">
            {item.title ? (
              <h3 className="text-base font-semibold text-white sm:text-lg">
                {item.title}
              </h3>
            ) : null}

            <p
              className={
                item.title
                  ? "mt-2 text-sm leading-7 text-slate-300"
                  : "text-sm leading-7 text-slate-300"
              }
            >
              {item.text}
            </p>
          </Card>
        ))}
      </div>
    </InnerPageSection>
  );
}

export function CaseLinksSection({
  title,
  text,
  items,
}: {
  title: string;
  text: string;
  items: LinkItem[];
}) {
  return (
    <InnerPageSection id="portfolio">
      <InnerPageTitle eyebrow="Кейсы" title={title} text={text} />

      <div className="grid gap-2.5 sm:gap-5 lg:grid-cols-2">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="group block">
            <Card className="h-full">
              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-slate-300 sm:text-xs">
                Case Study
              </div>

              <h3 className="mt-4 text-lg font-semibold text-white transition group-hover:text-emerald-100 sm:text-xl">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {item.text}
              </p>

              <div className="mt-5 text-sm font-medium text-emerald-300">
                Читать кейс →
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </InnerPageSection>
  );
}

export function RelatedLinksSection({ items }: { items: LinkItem[] }) {
  return (
    <InnerPageSection>
      <InnerPageTitle
        eyebrow="Связанные услуги"
        title="Что может понадобиться вместе с этой задачей"
        text="Дополнительные направления, которые часто используются вместе с этой услугой."
      />

      <div className="grid gap-2.5 sm:gap-5 lg:grid-cols-3">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="group block">
            <Card className="h-full">
              <h3 className="text-base font-semibold text-white transition group-hover:text-emerald-100 sm:text-lg">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {item.text}
              </p>

              <div className="mt-5 text-sm font-medium text-emerald-300">
                Подробнее →
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </InnerPageSection>
  );
}

export function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <InnerPageSection>
      <InnerPageTitle
        eyebrow="FAQ"
        title="Частые вопросы"
        text="Короткие ответы на вопросы, которые обычно появляются перед началом разработки."
      />

      <div className="space-y-2.5 sm:space-y-4">
        {items.map((item) => (
          <Card key={item.question}>
            <h3 className="text-base font-semibold text-white">
              {item.question}
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-300">
              {item.answer}
            </p>
          </Card>
        ))}
      </div>
    </InnerPageSection>
  );
}

export function CtaSection({
  title,
  text,
  buttonText = "Создать заказ",
}: {
  title: string;
  text: string;
  buttonText?: string;
}) {
  return (
    <InnerPageSection className="pb-8 sm:pb-10">
      <InnerPageTitle
        eyebrow="Contact"
        title="Создать заказ"
        text="Свяжитесь удобным способом и коротко опишите задачу. Даже если пока нет точного ТЗ, можно начать с идеи и желаемого результата."
      />

      <Card className="relative overflow-hidden border-emerald-300/20 bg-emerald-400/10 shadow-[0_0_60px_rgba(52,211,153,0.08)]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-[110px]" />

        <div className="relative">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            {title}
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            {text}
          </p>

          <div className="mt-5">
            <GlowButton href="/#contact">{buttonText}</GlowButton>
          </div>
        </div>
      </Card>
    </InnerPageSection>
  );
}