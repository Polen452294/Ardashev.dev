const dots = [
  { left: 7, top: 8, size: 7, delay: -1, duration: 10 },
  { left: 18, top: 22, size: 10, delay: -4, duration: 12 },
  { left: 31, top: 12, size: 6, delay: -2, duration: 9 },
  { left: 43, top: 32, size: 8, delay: -6, duration: 13 },
  { left: 57, top: 16, size: 11, delay: -3, duration: 14 },
  { left: 71, top: 27, size: 7, delay: -8, duration: 11 },
  { left: 88, top: 10, size: 9, delay: -5, duration: 12 },
  { left: 12, top: 48, size: 6, delay: -7, duration: 10 },
  { left: 25, top: 64, size: 9, delay: -2, duration: 13 },
  { left: 39, top: 53, size: 7, delay: -9, duration: 11 },
  { left: 62, top: 67, size: 10, delay: -4, duration: 14 },
  { left: 78, top: 49, size: 6, delay: -6, duration: 9 },
  { left: 91, top: 73, size: 8, delay: -3, duration: 12 },
  { left: 49, top: 86, size: 7, delay: -8, duration: 10 },
];

export default function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.06),transparent_22%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.05),transparent_22%)] opacity-60 sm:opacity-100" />
      <div className="absolute inset-0 opacity-15 sm:opacity-30 [background-image:radial-gradient(circle_at_center,rgba(52,211,153,0.18)_1px,transparent_1px)] [background-size:46px_46px]" />

      {dots.map((dot, index) => (
        <span
          key={index}
          className="floating-dot absolute hidden rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.8)] sm:block"
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animationDelay: `${dot.delay}s`,
            animationDuration: `${dot.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
