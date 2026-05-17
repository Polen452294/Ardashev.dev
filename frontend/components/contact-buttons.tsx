"use client";

const contacts = [
  {
    label: "Telegram",
    href: "https://t.me/YOUR_USERNAME",
    copy: null,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/79680757896",
    copy: null,
  },
  {
    label: "Email",
    href: null,
    copy: "your@email.com",
  },
  {
    label: "+7 968 075 78 96",
    href: null,
    copy: "+79680757896",
  },
];

const buttonClass =
  "rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-emerald-300/40 hover:bg-white/[0.08]";

export function ContactButtons() {
  const copyToClipboard = async (value: string) => {
    await navigator.clipboard.writeText(value);
  };

  return (
    <div className="hidden items-center gap-2 sm:flex">
      {contacts.map((item) =>
        item.href ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={buttonClass}
          >
            {item.label}
          </a>
        ) : (
          <button
            key={item.label}
            type="button"
            onClick={() => copyToClipboard(item.copy!)}
            className={buttonClass}
          >
            {item.label}
          </button>
        )
      )}
    </div>
  );
}