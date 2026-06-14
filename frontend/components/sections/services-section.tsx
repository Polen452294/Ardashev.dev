import { services } from "@/data/site-data";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="mx-auto max-w-5xl px-6 py-5 sm:px-8 sm:py-7 lg:max-w-6xl lg:px-12 lg:py-9 xl:max-w-7xl xl:px-16 xl:py-10 2xl:max-w-[1320px] 2xl:px-20 2xl:py-12"
    >
      <SectionTitle
        eyebrow="Services"
        title="Решения под реальные бизнес-задачи"
        text="От точечной автоматизации до полноценных систем с ботами, интеграциями, backend-логикой и AI-функциями."
      />

      <div className="grid grid-cols-2 gap-2.5 sm:gap-6 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isFeatured = index === 1;
          const isTransferService = service.title.includes("Перенос ботов из Telegram");
          const shouldTintCard = isFeatured && !isTransferService;

          return (
            <div key={service.title} className="relative">
              {isFeatured && (
                <>
                  <div className="pointer-events-none absolute -inset-4 rounded-[30px] bg-emerald-400/18 blur-3xl sm:-inset-8 sm:rounded-[44px]" />
                  <div className="pointer-events-none absolute -inset-3 overflow-visible rounded-[28px] sm:-inset-4 sm:rounded-[32px]">
                    <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/28 blur-[90px] sm:h-64 sm:w-64 sm:blur-[130px]" />
                    <div className="absolute left-[18%] top-[18%] h-24 w-24 rounded-full bg-emerald-400/20 blur-[56px] sm:h-36 sm:w-36 sm:blur-[80px]" />
                    <div className="absolute right-[14%] bottom-[14%] h-24 w-24 rounded-full bg-emerald-300/18 blur-[56px] sm:h-36 sm:w-36 sm:blur-[80px]" />
                  </div>
                </>
              )}

              <Card
                className={[
                  "relative z-10 flex h-full min-h-[50px] flex-col p-3.5 sm:min-h-[355px] sm:p-6",
                  shouldTintCard ? "border-emerald-400/30 bg-emerald-400/[0.04]" : "",
                  isTransferService
                    ? "border-emerald-400/45 shadow-[0_0_0_1px_rgba(52,211,153,0.3),0_0_48px_rgba(52,211,153,0.2)]"
                    : "",
                ].join(" ")}
              >
                {isFeatured ? (
                  <div className="mb-3 inline-flex w-fit items-center rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[10px] font-medium text-emerald-200 sm:mb-6 sm:px-3 sm:text-xs">
                    Популярная услуга
                  </div>
                ) : (
                  <div className="mb-2.5 inline-flex w-fit rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-2.5 text-emerald-300 sm:mb-4 sm:p-3">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                )}

                <div className="flex flex-1 flex-col">
                  <h3 className="text-base font-semibold leading-6 text-white sm:text-lg sm:leading-8">
                    {service.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-6 text-slate-300 sm:mt-3 sm:text-sm sm:leading-8">
                    {service.text}
                  </p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}