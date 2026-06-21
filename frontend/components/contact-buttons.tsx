"use client";

import { useState } from "react";
import { contactLinks } from "@/data/site-data";

const buttonClass =
  "rounded-full border border-emerald-300/30 bg-white/[0.04] px-4 py-2 text-[14px] font-semibold leading-none text-white shadow-[0_0_35px_rgba(52,211,153,0.22)] transition hover:border-emerald-200/60 hover:bg-white/[0.08] hover:text-emerald-100 hover:shadow-[0_0_55px_rgba(52,211,153,0.35)]";

export function ContactButtons() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (value: string, title: string) => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(title);

      setTimeout(() => {
        setCopied((current) => (current === title ? null : current));
      }, 1800);
    } catch {}
  };

  return (
    <div className="hidden items-center gap-2 sm:flex">
      {contactLinks.map((contact) => {
        if (contact.title === "Email") {
          return (
            <button
              key={contact.title}
              type="button"
              onClick={() => copyToClipboard(contact.label, contact.title)}
              className={buttonClass}
            >
              {copied === contact.title ? "Скопировано" : contact.title}
            </button>
          );
        }

        return (
          <a
            key={contact.title}
            href={contact.href}
            target="_blank"
            rel="noreferrer"
            className={buttonClass}
          >
            {contact.title}
          </a>
        );
      })}
    </div>
  );
}