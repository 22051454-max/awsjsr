import { cn } from "@/lib/utils"

// Trailing padding matches the gap so the seam is invisible: pr-0 pr-4 pr-5 pr-10

/** Endless horizontal scroller. Children are rendered twice so the loop is seamless. Pauses on hover. */
export default function Marquee({
  children,
  reverse = false,
  speed = 40,
  className,
  gap = "gap-10",
}: {
  children: React.ReactNode
  reverse?: boolean
  /** seconds per loop */
  speed?: number
  className?: string
  gap?: string
}) {
  return (
    <div className={cn("group relative flex overflow-hidden", className)}>
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1 || undefined}
          className={cn(
            "animate-marquee-copy flex shrink-0 items-center group-hover:[animation-play-state:paused]",
            gap,
            gap.replace("gap-", "pr-"),
          )}
          style={{ animationDuration: `${speed}s`, animationDirection: reverse ? "reverse" : "normal" }}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
