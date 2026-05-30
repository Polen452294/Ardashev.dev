"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function SectionTitle({ eyebrow, title, text }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mb-5 max-w-3xl sm:mb-12"
    >
      <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-300 sm:text-sm sm:tracking-[0.24em]">
        {eyebrow}
      </div>

      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:mt-4 sm:text-3xl md:text-4xl">
        {title}
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-300 sm:mt-4 sm:text-lg sm:leading-8">
        {text}
      </p>
    </motion.div>
  );
}