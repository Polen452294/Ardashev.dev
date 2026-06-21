import {
  Bot,
  Database,
  Search,
  MessageCircleMore,
  ShieldCheck,
  Clock3,
  MessageSquareText,
  Wrench,
} from "lucide-react";

export const contactLinks = [
  {
    title: "Telegram",
    label: "@aardashevdev",
    href: "https://t.me/aardashevdev",
  },
  {
    title: "Max",
    label: "Max",
    href: "https://max.ru/u/f9LHodD0cOLjnaroqIXC9x50AYUTb-v1MgisAQs3JGzrycVAMO3inOzXILw",
  },
  {
    title: "Email",
    label: "aardashev.dev@gmail.com",
    href: "mailto:aardashev.dev@gmail.com",
  },
];

export const services = [
  {
    title: "Разработка Telegram-ботов",
    text: "Создаю Telegram-ботов для приема заявок, уведомлений, CRM-интеграций, админ-панелей, оплаты и автоматизации бизнес-процессов.",
    icon: Bot,
    href: "/telegram-bots",
  },
  {
    title: "Разработка Max-ботов",
    text: "Разрабатываю ботов для Max: прием обращений, сценарии с кнопками, консультационные заявки, уведомления и интеграции с таблицами или CRM.",
    icon: MessageCircleMore,
    href: "/max-bots",
  },
  {
    title: "Парсеры сайтов и Telegram",
    text: "Разрабатываю парсеры для сбора данных с сайтов, каталогов, площадок, Telegram-каналов и открытых источников с выгрузкой в удобном виде.",
    icon: Search,
    href: "/parsers",
  },
  {
    title: "CRM и API-интеграции",
    text: "Соединяю ботов, сайты, парсеры, таблицы, базы данных и CRM, чтобы заявки, контакты, статусы и уведомления передавались автоматически.",
    icon: Database,
    href: "/crm-integrations",
  },
];

export const portfolio = [
  {
    title: "USDT Exchange Bot",
    stack: "Telegram / VK бот, заявки, CRM, напоминания",
    text: "Бот для обменного сервиса: клиент выбирает направление обмена, вводит данные, получает понятные шаги, а заявка передается в обработку. Система помогает не терять клиентов и автоматически напоминает о незавершенных заявках.",
    result: "Автоматизирован прием заявок и повторные касания клиентов.",
    githubUrl: "https://github.com/Polen452294/USDT_Exchange_bot",
    caseUrl: "/cases/usdt-exchange-bot",
    demoGif: "/demo/usdt-bot-demo.gif",
  },
  {
    title: "Max Python Bot",
    stack: "Max бот, консультации, заявки",
    text: "Бот в Max для первичного общения с клиентом. Он помогает собрать контактные данные, уточнить запрос и передать обращение дальше без ручного переписывания информации.",
    result: "Удобный сценарий приема консультационных заявок в Max.",
    githubUrl: "https://github.com/Polen452294/Max-Python-Bot",
    caseUrl: "/cases/max-request-bot",
    demoGif: "/demo/max-bot-demo.gif",
  },
  {
    title: "Парсер заказов с Profi.ru",
    stack: "Поиск заказов, фильтрация, уведомления",
    text: "Инструмент проверяет новые заказы, отбирает подходящие варианты и отправляет уведомления, чтобы быстрее реагировать на заявки.",
    result: "Экономия времени на ручном мониторинге площадки.",
    githubUrl: "https://github.com/Polen452294/Profi.ru_Parser_Bot",
    caseUrl: "/cases/profi-parser-bot",
  },
];

export const advantages = [
  {
    title: "Говорю простым языком",
    text: "Не перегружаю техническими терминами. Объясняю, что будет сделано, как это будет работать и какой результат вы получите.",
    icon: MessageSquareText,
  },
  {
    title: "Делаю под задачу бизнеса",
    text: "Сначала разбираю проблему и процесс, а потом предлагаю решение. Цель — не просто написать код, а упростить вашу работу.",
    icon: ShieldCheck,
  },
  {
    title: "Можно начать с простой версии",
    text: "Проект можно запустить поэтапно: сначала сделать рабочую основу, проверить ее в деле, а затем добавлять новые функции.",
    icon: Clock3,
  },
  {
    title: "Помогаю после запуска",
    text: "После разработки помогаю проверить работу, исправить замечания, объяснить управление и подготовить проект к использованию.",
    icon: Wrench,
  },
];

export const processSteps = [
  "Вы описываете задачу и желаемый результат",
  "Разбираем процесс и выбираем оптимальное решение",
  "Согласуем структуру, сценарий и сроки",
  "Я разрабатываю первую рабочую версию",
  "Проверяем, дорабатываем и запускаем проект",
];

export const techStack = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "SQLAlchemy",
  "Docker",
  "Next.js",
  "Tailwind",
  "Telegram API",
  "Max API",
  "VK API",
  "CRM API",
  "AI-интеграции",
];

export const metrics = [
  { value: "Боты", label: "для заявок, продаж и поддержки" },
  { value: "Парсеры", label: "для поиска данных и заказов" },
  { value: "CRM", label: "автоматическая передача заявок" },
  { value: "API", label: "интеграции сервисов между собой" },
];