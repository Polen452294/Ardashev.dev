import FloatingShapes from "@/components/background/floating-shapes";
import { ContactButtons } from "@/components/contact-buttons";
import { ExtraSection } from "@/components/sections/extra-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustSection } from "@/components/sections/trust-section";
import { ServicesSection } from "@/components/sections/services-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { BotUseCasesSection } from "@/components/sections/bot-use-cases-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#020817] text-white selection:bg-emerald-300 selection:text-slate-950">
      <div className="relative isolate overflow-hidden">
        <FloatingShapes />

        <header className="sticky top-0 z-40 border-b border-white/5 bg-[#020817]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 sm:py-5 lg:px-12 xl:px-16">
            <a
              href="#hero"
              className="text-[26px] font-semibold tracking-tight text-white transition hover:text-emerald-300 min-[390px]:text-[28px] sm:text-[34px]"
            >
              Ardashev<span className="text-emerald-300">.</span>dev
            </a>

            <div className="hidden items-center gap-6 sm:flex">
              <a
                href="tel:+7(968)075-78-96"
                className="text-[18px] font-semibold leading-none text-white transition hover:text-emerald-300"
              >
                +7 968 075-78-96
              </a>

              <ContactButtons />
            </div>
          </div>
        </header>

        <main id="top">
          <HeroSection />
          <BotUseCasesSection />
          <TrustSection />
          <ServicesSection />
          <PortfolioSection />
          <ProcessSection />
          <ExtraSection />
          <ContactSection />
          <FooterSection />
        </main>
      </div>
    </div>
  );
}