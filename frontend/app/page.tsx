import FloatingShapes from "@/components/background/floating-shapes";
import { ExtraSection } from "@/components/sections/extra-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ProcessSection } from "@/components/sections/process-section";
import { RequestSection } from "@/components/sections/request-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TrustSection } from "@/components/sections/trust-section";
import { GlowButton } from "@/components/ui/glow-button";
import { ContactButtons } from "@/components/contact-buttons";
import { contactLinks } from "@/data/site-data";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#020817] text-white selection:bg-emerald-300 selection:text-slate-950">
      <div className="relative isolate overflow-hidden">
        <FloatingShapes />

        <header className="sticky top-0 z-40 border-b border-white/5 bg-[#020817]/90 backdrop-blur-xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12 xl:px-16">
  <a
    href="#hero"
    className="text-[34px] font-semibold tracking-tight text-white transition hover:text-emerald-300"
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

    <div className="flex items-center gap-2">
      {contactLinks.map((contact) => (
        <a
          key={contact.title}
          href={contact.href}
          target={contact.href.startsWith("http") ? "_blank" : undefined}
          rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
          className="rounded-full border border-emerald-300/30 bg-white/[0.04] px-4 py-2 text-[14px] font-semibold leading-none text-white shadow-[0_0_35px_rgba(52,211,153,0.22)] transition hover:border-emerald-200/60 hover:bg-white/[0.08] hover:text-emerald-100 hover:shadow-[0_0_55px_rgba(52,211,153,0.35)]"
        >
          {contact.title}
        </a>
      ))}
    </div>
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