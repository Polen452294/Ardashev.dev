import { Github, Mail, MessageCircle, Phone } from "lucide-react";

import { contactLinks } from "@/data/site-data";

export function FooterSection() {
  return (
    <footer className="mt-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <a
              href="#hero"
              className="text-[30px] font-semibold tracking-tight text-white transition hover:text-emerald-300"
            >
              Ardashev<span className="text-emerald-300">.</span>dev
            </a>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-[15px]">
              Разработка Telegram / Max / VK ботов, автоматизация
              процессов, CRM-интеграции, backend-сервисы и AI-функции
              для бизнеса и частных проектов.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {contactLinks.map((contact) => (
                <a
                  key={contact.title}
                  href={contact.href}
                  target={
                    contact.href.startsWith("http")
                      ? "_blank"
                      : undefined
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
              ))}

              <a
                href="tel:+79680757896"
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-emerald-300/40 hover:bg-white/[0.06] hover:text-white"
              >
                +7 968 075-78-96
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 text-sm text-slate-500 lg:items-end">
            <div>
              Telegram bots • Max bots • CRM • AI • Automation
            </div>

            <div className="text-slate-600">
              © {new Date().getFullYear()} Ardashev.dev
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}