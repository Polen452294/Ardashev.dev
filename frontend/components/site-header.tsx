import Link from "next/link";
import { ContactButtons } from "@/components/contact-buttons";

const navLinks = [
  {
    title: "Что я создаю",
    href: "/#services",
  },
  {
    title: "Примеры выполнения",
    href: "/#portfolio",
  },
  {
    title: "Что входит в заказ",
    href: "/#process",
  },
  {
    title: "Связь со мной",
    href: "/#contact",
  },
];

export function SiteHeader() {
  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#020817]/90 backdrop-blur-xl">
        <div className="flex w-full items-center justify-between gap-4 px-5 py-3 sm:px-8 sm:py-5 lg:px-10 xl:px-12 2xl:px-14">
          <div className="flex min-w-0 items-center gap-5">
            <Link
              href="/#hero"
              className="shrink-0 text-[24px] font-semibold tracking-tight text-white transition hover:text-emerald-300 min-[390px]:text-[26px] sm:text-[30px]"
            >
              Ardashev<span className="text-emerald-300">.</span>dev
            </Link>

            <div className="hidden h-5 w-px bg-white/10 lg:block" />

            <nav
              aria-label="Основная навигация"
              className="hidden items-center gap-5 lg:flex xl:gap-7"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap text-[14px] font-medium text-slate-400 transition hover:text-emerald-300 xl:text-[15px]"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="ml-auto flex shrink-0 items-center justify-end gap-2 sm:gap-3">
            <a
              href="tel:+79168626404"
              className="hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[14px] font-semibold leading-none text-white transition hover:border-emerald-300/40 hover:bg-white/[0.06] hover:text-emerald-300 sm:inline-flex"
            >
              +7 916 862-64-04
            </a>

            <ContactButtons />
          </div>
        </div>
      </header>

      <div aria-hidden="true" className="h-[64px] sm:h-[78px]" />
    </>
  );
}