import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      data-no-dots
      className={[
        "rounded-[24px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.24)] backdrop-blur-md transition-all duration-300 sm:rounded-3xl sm:p-6 sm:hover:-translate-y-1 sm:hover:border-emerald-300/30 sm:hover:bg-white/[0.06]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
