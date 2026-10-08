/** A small flock of painted birds that drifts across its parent. Purely decorative. */
export default function Birds({ className = "" }: { className?: string }) {
  const flock = [
    { top: "12%", delay: "0s", dur: "26s", s: 1 },
    { top: "20%", delay: "-6s", dur: "30s", s: 0.7 },
    { top: "8%", delay: "-14s", dur: "34s", s: 0.85 },
    { top: "26%", delay: "-20s", dur: "28s", s: 0.6 },
  ]
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {flock.map((b, i) => (
        <svg
          key={i}
          viewBox="0 0 40 16"
          className="animate-fly absolute -left-12 w-10"
          style={{ top: b.top, animationDelay: b.delay, animationDuration: b.dur, scale: String(b.s) }}
        >
          <path
            className="animate-flap"
            d="M2 10 Q10 0 20 10 Q30 0 38 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      ))}
    </div>
  )
}
