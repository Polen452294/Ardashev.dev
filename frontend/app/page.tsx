import FloatingShapes from "@/components/background/floating-shapes";
import { ExtraSection } from "@/components/sections/extra-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ProcessSection } from "@/components/sections/process-section";
import { RequestSection } from "@/components/sections/request-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TrustSection } from "@/components/sections/trust-section";
import { GlowButton } from "@/components/ui/glow-button";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#020817] text-white selection:bg-emerald-300 selection:text-slate-950">
      <div className="relative isolate overflow-hidden">
        <FloatingShapes />

        <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/65 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 sm:py-4 lg:px-12 xl:px-16">
            <a href="#top" className="text-[15px] font-semibold tracking-tight text-white sm:text-lg">
              Ardashev<span className="text-emerald-300">.</span>dev
            </a>

            <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
              <a href="#services" className="transition hover:text-white">
                Услуги
              </a>
              <a href="#portfolio" className="transition hover:text-white">
                Портфолио
              </a>
              <a href="#process" className="transition hover:text-white">
                Процесс
              </a>
              <a href="#contact" className="transition hover:text-white">
                Контакты
              </a>
            </nav>

            <div className="scale-[0.86] sm:scale-100">
              <GlowButton href="#contact">Обсудить проект</GlowButton>
            </div>
          </div>
        </header>

        <main id="top">
          <HeroSection />
          <TrustSection />
          <ServicesSection />
          <PortfolioSection />
          <ProcessSection />
          <ExtraSection />
          <RequestSection />
        </main>
      </div>
    </div>
  );
}