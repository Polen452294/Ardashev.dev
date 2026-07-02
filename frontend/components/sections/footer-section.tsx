"use client";

import { useState } from "react";
import Link from "next/link";
import { contactLinks } from "@/data/site-data";

const navigationLinks = [
  {
    title: "Главная",
    href: "/#hero",
  },
  {
    title: "О разработчике",
    href: "/about",
  },
  {
    title: "Контакты",
    href: "/contacts",
  },
  {
    title: "Карта сайта",
    href: "/sitemap",
  },
];

const serviceLinks = [
  {
    title: "Telegram-боты",
    href: "/telegram-bots",
  },
  {
    title: "Max-боты",
    href: "/max-bots",
  },
  {
    title: "Парсеры",
    href: "/parsers",
  },
  {
    title: "CRM-интеграции",
    href: "/crm-integrations",
  },
];

const caseLinks = [
  {
    title: "USDT Exchange Bot",
    href: "/cases/usdt-exchange-bot",
  },
  {
    title: "Max Request Bot",
    href: "/cases/max-request-bot",
  },
  {
    title: "Profi Parser Bot",
    href: "/cases/profi-parser-bot",
  },
];

export function FooterSection() {
  const [copied, setCopied] = useState<string | null>(null);

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
    <footer className="mt-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Link
              href="/#hero"
              className="text-[30px] font-semibold tracking-tight text-white transition hover:text-emerald-300"
            >
              Ardashev<span className="text-emerald-300">.</span>dev
            </Link>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-[15px]">
              Разработка Telegram-ботов, Max-ботов, парсеров сайтов и Telegram,
              CRM/API-интеграций и систем приема заявок для бизнеса.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {contactLinks.map((contact) => {
                const isEmail = contact.title === "Email";
                const isCopied = copied === contact.title;

                return isEmail ? (
                  <button
                    key={contact.title}
                    type="button"
                    onClick={() =>
                      copyToClipboard(contact.label, contact.title)
                    }
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-emerald-300/40 hover:bg-white/[0.06] hover:text-white"
                  >
                    {isCopied ? "Скопировано" : contact.title}
                  </button>
                ) : (
                  <a
                    key={contact.title}
                    href={contact.href}
                    target={
                      contact.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      contact.href.startsWith("http")
                        ? "noreferrer"
                        : undefined
                    }
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-emerald-300/40 hover:bg-white/[0.06] hover:text-white"
                  >
                    {contact.title}
                  </a>
                );
              })}

              <button
                type="button"
                onClick={() => copyToClipboard("+7 916 862-64-04", "Телефон")}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-emerald-300/40 hover:bg-white/[0.06] hover:text-white"
              >
                {copied === "Телефон" ? "Скопировано" : "+7 916 862-64-04"}
              </button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:justify-self-end">
            <nav aria-label="Навигация">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Навигация
              </div>

              <div className="mt-4 grid gap-3">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-emerald-300"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </nav>

            <nav aria-label="Услуги">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Услуги
              </div>

              <div className="mt-4 grid gap-3">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-emerald-300"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </nav>

            <nav aria-label="Кейсы">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Кейсы
              </div>

              <div className="mt-4 grid gap-3">
                {caseLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-emerald-300"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/5 pt-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <div>Telegram bots • Max bots • Parsers • CRM/API</div>
          <div>© {new Date().getFullYear()} Ardashev.dev</div>
        </div>
      </div>
    </footer>
  );
}