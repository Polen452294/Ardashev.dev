"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FloatingShapes from "@/components/background/floating-shapes";
import { ContactButtons } from "@/components/contact-buttons";
import { GlowButton } from "@/components/ui/glow-button";
import { Card } from "@/components/ui/card";
import { FooterSection } from "@/components/sections/footer-section";
import { SiteHeader } from "@/components/site-header";
import {
  BellRing,
  Bot,
  Braces,
  CalendarDays,
  ClipboardList,
  CreditCard,
  Database,
  FileText,
  Filter,
  GitBranch,
  Headphones,
  MapPinned,
  MessageCircleQuestion,
  Navigation,
  Search,
  Send,
  Server,
  Settings2,
  Table2,
  Timer,
  Waypoints,
} from "lucide-react";

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
  secondaryHref = "/cases",
  children,
}: InnerPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#020817] text-white selection:bg-emerald-300 selection:text-slate-950">
      <div className="relative isolate overflow-hidden">
        <FloatingShapes />

        <SiteHeader />

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
  const normalizedEyebrow = eyebrow.toLowerCase();

  const isExamples =
    normalizedEyebrow.includes("пример") ||
    normalizedEyebrow.includes("example") ||
    normalizedEyebrow.includes("use");

  const getExampleDescription = (item: string) => {
    const normalized = item.toLowerCase();

    if (normalized.includes("приема заяв") || normalized === "для заявок") {
      return "Позволяет автоматически собирать заявки от клиентов, уточнять нужные данные и передавать их менеджеру, в таблицу или CRM.";
    }

    if (normalized.includes("запис")) {
      return "Позволяет автоматически собирать записи клиентов и выстраивать расписание с учетом свободного времени, услуг и занятости.";
    }

    if (normalized.includes("консульт")) {
      return "Помогает принять обращение, задать уточняющие вопросы и передать менеджеру уже понятную заявку без лишней переписки.";
    }

    if (normalized.includes("оплат")) {
      return "Ведет клиента по сценарию до оплаты, фиксирует статус заявки и помогает не терять обращения на этапе покупки.";
    }

    if (normalized.includes("crm")) {
      return "Автоматически передает заявки, контакты, комментарии и статусы в CRM, таблицу или внутреннюю систему компании.";
    }

    if (normalized.includes("админ")) {
      return "Позволяет управлять заявками, статусами, пользователями и данными проекта без ручного редактирования файлов.";
    }

    if (normalized.includes("поддерж")) {
      return "Помогает принимать обращения клиентов, распределять вопросы и быстрее передавать их ответственным людям.";
    }

    if (normalized.includes("уведом")) {
      return "Отправляет менеджерам и сотрудникам важные уведомления о новых заявках, изменениях статуса или событиях.";
    }

    if (normalized.includes("перенос")) {
      return "Позволяет адаптировать уже готовую логику Telegram под Max или другой канал общения с клиентами.";
    }

    if (normalized.includes("мониторинг") || normalized.includes("цен")) {
      return "Позволяет регулярно отслеживать цены, изменения карточек, наличие товаров и обновления в нужных источниках.";
    }

    if (normalized.includes("поиска заказ")) {
      return "Помогает автоматически находить новые заказы по условиям и быстрее реагировать на подходящие заявки.";
    }

    if (normalized.includes("сбора контакт")) {
      return "Собирает открытые контакты, карточки компаний и данные из источников в удобный формат для дальнейшей обработки.";
    }

    if (normalized.includes("telegram канал")) {
      return "Позволяет отслеживать публикации, сообщения или нужные упоминания в Telegram каналах и передавать их дальше.";
    }

    if (normalized.includes("выгрузки в таблиц")) {
      return "Автоматически сохраняет найденные данные в Google Sheets, Excel или другую таблицу без ручного копирования.";
    }

    if (normalized.includes("регулярных отчет")) {
      return "Собирает данные по расписанию и формирует регулярные выгрузки или уведомления по новым результатам.";
    }

    if (normalized.includes("передачи заяв")) {
      return "Автоматически передает заявки с сайта, бота или формы в CRM, таблицу, базу данных или внутреннюю систему.";
    }

    if (normalized.includes("синхронизации статус")) {
      return "Помогает обновлять статусы между сервисами, чтобы менеджеры видели актуальное состояние заявки.";
    }

    if (normalized.includes("уведомлений менеджер")) {
      return "Отправляет ответственным людям уведомления о новых заявках, ошибках, изменениях статусов и важных событиях.";
    }

    if (normalized.includes("google sheets")) {
      return "Подходит, когда нужно быстро сохранять заявки и данные в таблицу без полноценной CRM на старте.";
    }

    if (normalized.includes("бота и crm")) {
      return "Связывает Telegram или Max с CRM, чтобы заявки и контакты автоматически попадали к менеджерам.";
    }

    if (normalized.includes("парсера и crm")) {
      return "Передает найденные парсером данные в CRM, таблицу или базу, чтобы не переносить результаты вручную.";
    }

    return "Сценарий можно адаптировать под конкретный бизнес-процесс, чтобы убрать ручную рутину и ускорить обработку заявок.";
  };

  if (isExamples) {
    return (
      <InnerPageSection>
        <InnerPageTitle eyebrow={eyebrow} title={title} text={text} />

        <div className="grid gap-3 sm:gap-4 lg:grid-cols-3">
          {items.map((item) => (
            <Card
              key={item}
              className="group relative min-h-[170px] overflow-hidden bg-[#081122]/72 p-5 sm:min-h-[185px] sm:p-6"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl transition duration-300 group-hover:bg-emerald-400/15" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/25 to-transparent opacity-60" />

              <div className="relative flex h-full flex-col">
                <h3 className="text-[19px] font-semibold leading-7 tracking-tight text-white transition group-hover:text-emerald-100 sm:text-xl">
                  {item}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {getExampleDescription(item)}
                </p>

                <div className="mt-auto pt-5">
                  <div className="h-px w-full bg-white/10" />
                  <div className="mt-3 text-[13px] font-medium text-emerald-300">
                    Можно адаптировать под вашу задачу
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </InnerPageSection>
    );
  }

  const isFunctions = normalizedEyebrow.includes("функц");

  const getFunctionDescription = (item: string) => {
  const normalized = item.toLowerCase();

  if (normalized.includes("пошаговое оформление")) {
    return "Бот ведет клиента по понятному сценарию, задает вопросы по порядку и помогает оформить заявку без ручной переписки.";
  }

  if (normalized.includes("выбор направления")) {
    return "Клиент сам выбирает нужный вариант, город, сумму или другой параметр, а система сразу сохраняет данные в заявке.";
  }

  if (normalized.includes("контактных данных")) {
    return "Бот аккуратно собирает имя, телефон, username и другие контакты, чтобы менеджеру не приходилось уточнять их вручную.";
  }

  if (normalized.includes("передача заявки")) {
    return "Готовая заявка автоматически уходит менеджеру, в CRM, таблицу или внутреннюю систему без копирования вручную.";
  }

  if (normalized.includes("хранение статусов")) {
    return "Данные и статусы сохраняются, поэтому можно видеть, на каком этапе находится заявка и что с ней происходило.";
  }

  if (normalized.includes("напоминания")) {
    return "Система возвращает клиента к незавершенной заявке и снижает риск потерять обращение на середине сценария.";
  }

  if (normalized.includes("стартовый сценарий")) {
    return "Пользователь сразу попадает в понятный диалог, где бот объясняет следующий шаг и ведет к заявке.";
  }

  if (normalized.includes("уточнение запроса")) {
    return "Бот задает дополнительные вопросы и помогает собрать больше контекста до того, как заявку увидит менеджер.";
  }

  if (normalized.includes("кнопки") || normalized.includes("навигация")) {
    return "Кнопки делают сценарий проще: клиенту не нужно писать всё вручную, он выбирает подходящие варианты.";
  }

  if (normalized.includes("подготовка логики")) {
    return "Проект можно расширять: добавлять новые ветки сценария, интеграции, статусы и дополнительные действия.";
  }

  if (normalized.includes("мониторинг")) {
    return "Система регулярно проверяет источник и находит новые данные без ручного открытия сайта или площадки.";
  }

  if (normalized.includes("фильтрация")) {
    return "Парсер отбирает только подходящие заявки или данные по заданным условиям и убирает лишний шум.";
  }

  if (normalized.includes("уведомления")) {
    return "При появлении подходящего события система сразу отправляет уведомление, чтобы можно было быстро отреагировать.";
  }

  if (normalized.includes("экономия времени")) {
    return "Рутинная проверка источников уходит в автоматический режим, а человек работает только с нужными результатами.";
  }

  if (normalized.includes("подготовка данных")) {
    return "Результаты приводятся к удобному виду: их проще проверить, сохранить, передать или использовать дальше.";
  }

  if (normalized.includes("расширения")) {
    return "Логику можно доработать под новые источники, фильтры, форматы выгрузки или дополнительные уведомления.";
  }

  return "Функция помогает автоматизировать часть процесса, уменьшить ручную работу и сделать сценарий удобнее для клиента или менеджера.";
};

  if (isFunctions) {
    const getFunctionIcon = (item: string) => {
      const normalized = item.toLowerCase();

      if (normalized.includes("пошаговое") || normalized.includes("сценарий")) {
        return ClipboardList;
      }

      if (normalized.includes("направления") || normalized.includes("город")) {
        return MapPinned;
      }

      if (normalized.includes("контакт")) {
        return MessageCircleQuestion;
      }

      if (normalized.includes("передача")) {
        return Send;
      }

      if (normalized.includes("статус") || normalized.includes("данных")) {
        return Database;
      }

      if (normalized.includes("напомин")) {
        return BellRing;
      }

      if (normalized.includes("кнопки") || normalized.includes("навигация")) {
        return Navigation;
      }

      if (normalized.includes("мониторинг")) {
        return Search;
      }

      if (normalized.includes("фильтрация")) {
        return Filter;
      }

      if (normalized.includes("уведомления")) {
        return BellRing;
      }

      if (normalized.includes("экономия")) {
        return Timer;
      }

      if (normalized.includes("подготовка")) {
        return FileText;
      }

      if (normalized.includes("расширения")) {
        return Settings2;
      }

      return Bot;
    };

    return (
      <InnerPageSection>
        <InnerPageTitle eyebrow={eyebrow} title={title} text={text} />

        <div className="grid gap-3 sm:gap-4 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = getFunctionIcon(item);

            return (
              <Card
                key={item}
                className="group relative min-h-[190px] overflow-hidden bg-[#081122]/72 p-5 sm:min-h-[210px] sm:p-6"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl transition duration-300 group-hover:bg-emerald-400/15" />

                <div className="relative flex h-full flex-col">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition group-hover:border-emerald-300/40 group-hover:bg-emerald-400/15">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-[19px] font-semibold leading-7 tracking-tight text-white transition group-hover:text-emerald-100 sm:text-xl">
                    {item}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {getFunctionDescription(item)}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </InnerPageSection>
    );
  }

  const isStack =
  normalizedEyebrow.includes("stack") ||
  normalizedEyebrow.includes("стек") ||
  normalizedEyebrow.includes("технолог");

const getStackDescription = (item: string) => {
  const normalized = item.toLowerCase();

  if (normalized.includes("python")) {
    return "Основной язык разработки логики бота, парсера или серверной части.";
  }

  if (normalized.includes("aiogram")) {
    return "Фреймворк для разработки Telegram ботов и сценариев общения.";
  }

  if (normalized.includes("max api")) {
    return "API для работы с ботами и сценариями внутри Max.";
  }

  if (normalized.includes("vk api")) {
    return "Интеграция с VK и обработка действий внутри VK-сценариев.";
  }

  if (normalized.includes("postgres")) {
    return "База данных для хранения заявок, пользователей, статусов и истории.";
  }

  if (normalized.includes("sqlalchemy")) {
    return "Работа с базой данных через удобные модели и запросы.";
  }

  if (normalized.includes("docker")) {
    return "Запуск проекта в изолированной среде и удобное развертывание.";
  }

  if (normalized.includes("crm")) {
    return "Передача заявок, контактов и статусов во внешнюю систему.";
  }

  if (normalized.includes("background")) {
    return "Фоновые задачи: напоминания, проверки, регулярные действия.";
  }

  if (normalized.includes("парсинг")) {
    return "Сбор данных из открытых источников, сайтов или площадок.";
  }

  if (normalized.includes("фильтрация")) {
    return "Отбор только подходящих данных по заданным условиям.";
  }

  if (normalized.includes("уведомления")) {
    return "Отправка важных событий менеджерам или пользователям.";
  }

  if (normalized.includes("прокси")) {
    return "Помогают стабильнее работать с источниками, где есть ограничения.";
  }

  if (normalized.includes("git")) {
    return "Хранение кода и удобная передача проекта для проверки.";
  }

  return "Используется как часть технической основы проекта.";
};

const getStackIcon = (item: string) => {
  const normalized = item.toLowerCase();

  if (normalized.includes("python")) return Braces;
  if (normalized.includes("api")) return Waypoints;
  if (normalized.includes("postgres") || normalized.includes("sql")) return Database;
  if (normalized.includes("docker")) return Server;
  if (normalized.includes("crm")) return Table2;
  if (normalized.includes("background")) return Timer;
  if (normalized.includes("парсинг")) return Search;
  if (normalized.includes("фильтрация")) return Filter;
  if (normalized.includes("уведомления")) return BellRing;
  if (normalized.includes("git")) return GitBranch;

  return Settings2;
};

if (isStack) {
  return (
    <InnerPageSection>
      <InnerPageTitle eyebrow={eyebrow} title={title} text={text} />

      <div className="grid gap-3 sm:gap-4 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = getStackIcon(item);

          return (
            <Card
              key={item}
              className="group relative min-h-[170px] overflow-hidden bg-[#081122]/72 p-5 sm:min-h-[190px] sm:p-6"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl transition duration-300 group-hover:bg-emerald-400/15" />

              <div className="relative flex h-full flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition group-hover:border-emerald-300/40 group-hover:bg-emerald-400/15">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-[19px] font-semibold leading-7 tracking-tight text-white transition group-hover:text-emerald-100 sm:text-xl">
                  {item}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {getStackDescription(item)}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </InnerPageSection>
  );
} 

  const getLabel = () => {
    const normalized = eyebrow.toLowerCase();

    if (normalized.includes("функц")) return "Функция";
    if (normalized.includes("stack")) return "Стек";
    if (normalized.includes("возмож")) return "Опция";

    return "Пункт";
  };

  const label = getLabel();

  return (
    <InnerPageSection>
      <InnerPageTitle eyebrow={eyebrow} title={title} text={text} />

      <div className="grid gap-2.5 sm:gap-4 lg:grid-cols-3">
        {items.map((item, index) => (
          <Card
            key={item}
            className="group relative min-h-[132px] overflow-hidden bg-[#081122]/72 p-4 sm:min-h-[150px] sm:p-5"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-400/10 blur-3xl transition group-hover:bg-emerald-400/15" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent opacity-60" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
                    {label}
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-sm font-semibold text-emerald-300 transition group-hover:border-emerald-300/40 group-hover:bg-emerald-400/15">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <h3 className="mt-5 max-w-[280px] text-[17px] font-semibold leading-6 text-white transition group-hover:text-emerald-100 sm:text-lg">
                  {item}
                </h3>
              </div>

              <div className="mt-5 flex items-center gap-2 text-[13px] font-medium text-emerald-300/90">
                <span className="h-px w-8 bg-emerald-300/40 transition group-hover:w-12" />
                Подходит для бизнеса
              </div>
            </div>
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
      <InnerPageTitle eyebrow="Cases" title={title} text={text} />

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
                Ознакомиться →
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
        eyebrow="Services"
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
