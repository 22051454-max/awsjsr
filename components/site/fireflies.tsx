/** Slow drifting specks of light for dark mud-wall sections. Deterministic positions so server and client match. */
export default function Fireflies({ count = 18, className = "" }: { count?: number; className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {Array.from({ length: count }, (_, i) => {
        const left = (i * 37) % 100
        const top = (i * 61) % 100
        return (
          <span
            key={i}
            className="animate-firefly absolute h-1.5 w-1.5 rounded-full bg-haldi shadow-[0_0_10px_3px_rgba(224,162,47,.6)]"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${-(i * 1.3) % 9}s`,
              animationDuration: `${7 + (i % 5)}s`,
            }}
          />
        )
      })}
    </div>
  )
}
