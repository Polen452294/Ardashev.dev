export type BlogPost = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  publishedLabel: string;
  updatedLabel: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  contents: Array<{ id: string; title: string }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "telegram-bot-cost",
    title: "Сколько стоит разработка Telegram-бота в 2026 году",
    shortTitle: "Стоимость Telegram-бота в 2026 году",
    description:
      "Разбираю стоимость Telegram-бота на реальных заказах: что можно сделать от 1500 ₽, почему цена зависит от сценария и как получить понятную оценку до старта.",
    excerpt:
      "Без универсального прайса и выдуманных вилок. Показываю опубликованные цены заказов и объясняю, из каких частей складывается оценка.",
    category: "Telegram-боты",
    publishedAt: "2026-07-16",
    updatedAt: "2026-07-16",
    publishedLabel: "16 июля 2026",
    updatedLabel: "16 июля 2026",
    readingTime: "8 минут",
    image: "/blog/telegram-bot-cost.webp",
    imageAlt: "Экран запуска Telegram-бота из проекта USDT Exchange Bot",
    contents: [
      { id: "short-answer", title: "Короткий ответ" },
      { id: "real-prices", title: "Реальные цены из заказов" },
      { id: "estimate", title: "Что входит в оценку" },
      { id: "save-budget", title: "Как не переплатить" },
      { id: "conclusion", title: "Вывод" },
      { id: "sources", title: "Источники" },
    ],
  },
  {
    slug: "telegram-bot-development-time",
    title: "От чего зависит срок разработки Telegram-бота",
    shortTitle: "Срок разработки Telegram-бота",
    description:
      "Какие части Telegram-бота влияют на срок разработки, почему интеграции требуют отдельной проверки и как подготовить задачу, чтобы быстрее получить рабочую версию.",
    excerpt:
      "Срок определяет не число кнопок, а количество сценариев, интеграций, состояний и проверок. Разбираю это на примере рабочего проекта.",
    category: "Telegram-боты",
    publishedAt: "2026-07-16",
    updatedAt: "2026-07-16",
    publishedLabel: "16 июля 2026",
    updatedLabel: "16 июля 2026",
    readingTime: "7 минут",
    image: "/blog/telegram-bot-timeline.webp",
    imageAlt: "Ввод суммы в Telegram-боте для обменных заявок",
    contents: [
      { id: "main-factor", title: "Главный фактор срока" },
      { id: "project-parts", title: "Какие части занимают время" },
      { id: "real-example", title: "Пример из проекта" },
      { id: "faster-start", title: "Как ускорить старт" },
      { id: "conclusion", title: "Вывод" },
      { id: "sources", title: "Источники" },
    ],
  },
  {
    slug: "telegram-bot-brief",
    title: "Как составить ТЗ на Telegram-бота",
    shortTitle: "ТЗ на Telegram-бота",
    description:
      "Практический шаблон ТЗ на Telegram-бота: цель, сценарий, данные, интеграции, ошибки, роли и критерии готовности. С заполненным примером.",
    excerpt:
      "Для старта не нужен документ на десятки страниц. Нужны понятный путь пользователя, список данных, обработка ошибок и критерии приёмки.",
    category: "Telegram-боты",
    publishedAt: "2026-07-16",
    updatedAt: "2026-07-16",
    publishedLabel: "16 июля 2026",
    updatedLabel: "16 июля 2026",
    readingTime: "9 минут",
    image: "/blog/telegram-bot-brief.webp",
    imageAlt: "Сводка заявки в Telegram-боте перед отправкой",
    contents: [
      { id: "minimum", title: "Что нужно для оценки" },
      { id: "template", title: "Шаблон ТЗ" },
      { id: "filled-example", title: "Заполненный пример" },
      { id: "acceptance", title: "Критерии приёмки" },
      { id: "conclusion", title: "Вывод" },
      { id: "sources", title: "Источники" },
    ],
  },
];

export function getBlogPost(slug: string) {
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    throw new Error(`Blog post not found: ${slug}`);
  }

  return post;
}
