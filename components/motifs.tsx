"use client"

// Hand-drawn style tribal motifs (Warli figures, Sohrai borders) as inline SVG.
// They inherit `currentColor`, so colour them with Tailwind text-* classes.

import { useId } from "react"
import { cn } from "@/lib/utils"

type Props = { className?: string }

/** One Warli figure: two triangles, a round head, stick limbs. Drawn in a 40x60 box. */
function WarliFigure({ arms = "down" }: { arms?: "down" | "up" | "join" }) {
  const armPath =
    arms === "up"
      ? "M11 18 L4 8 M29 18 L36 8"
      : arms === "join"
        ? "M11 18 L0 25 M29 18 L40 25"
        : "M11 18 L5 30 M29 18 L35 30"
  return (
    <g>
      <circle cx="20" cy="8" r="5" fill="currentColor" />
      <path d="M10 16 H30 L20 30 Z M20 30 L10 44 H30 Z" fill="currentColor" />
      <path
        d={`${armPath} M15 44 L12 57 M25 44 L28 57`}
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  )
}

/** A horizontal chain of dancers holding hands; tiles to any width. */
export function WarliDancers({ className }: Props) {
  const id = useId().replace(/:/g, "")
  return (
    <svg aria-hidden className={cn("h-12 w-full", className)} preserveAspectRatio="xMinYMid slice">
      <defs>
        <pattern id={id} width="40" height="60" patternUnits="userSpaceOnUse" viewBox="0 0 40 60">
          <WarliFigure arms="join" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

/** Sohrai-style border: alternating triangles with a dotted rice-paste line. */
export function SohraiBand({ className, flip = false }: Props & { flip?: boolean }) {
  const id = useId().replace(/:/g, "")
  return (
    <svg aria-hidden className={cn("h-5 w-full", flip && "rotate-180", className)} preserveAspectRatio="none">
      <defs>
        <pattern id={id} width="28" height="20" patternUnits="userSpaceOnUse">
          <path d="M0 20 L14 4 L28 20 Z" fill="currentColor" />
          <circle cx="14" cy="15" r="2" fill="#FFF8EC" />
          <circle cx="0" cy="3" r="1.6" fill="currentColor" />
          <circle cx="28" cy="3" r="1.6" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

/** Thin zigzag divider used under headings. */
export function Zigzag({ className }: Props) {
  return (
    <svg aria-hidden viewBox="0 0 120 12" className={cn("h-3 w-28", className)}>
      <path
        d="M0 6 L10 1 L20 11 L30 1 L40 11 L50 1 L60 11 L70 1 L80 11 L90 1 L100 11 L110 1 L120 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Warli tarpa dance: a ring of dancers around a musician, under a sun and moon. */
export function TarpaCircle({ className, musician = true }: Props & { musician?: boolean }) {
  const rings = [
    { r: 150, n: 18 },
    { r: 98, n: 11 },
  ]
  return (
    <svg aria-hidden viewBox="-200 -200 400 400" className={className}>
      <circle r="190" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 7" strokeLinecap="round" />
      {rings.map(({ r, n }, ri) => (
        <g key={r}>
          {Array.from({ length: n }, (_, i) => {
            const a = (360 / n) * i + ri * 9
            return (
              <g key={i} transform={`rotate(${a}) translate(0 ${-r}) scale(.8) translate(-20 -30)`}>
                {/* inner group animates; the outer one keeps its placement transform */}
                <g className={i % 2 ? "dance-b" : "dance-a"}>
                  <WarliFigure arms="join" />
                </g>
              </g>
            )
          })}
        </g>
      ))}
      {/* tarpa player in the centre */}
      {musician && (
        <g transform="translate(-20 -34) scale(1.1)">
          <WarliFigure arms="up" />
          <path d="M36 8 L52 -6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <circle cx="54" cy="-8" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
        </g>
      )}
    </svg>
  )
}

/** Small sun motif. */
export function Sun({ className }: Props) {
  return (
    <svg aria-hidden viewBox="0 0 60 60" className={className}>
      <circle cx="30" cy="30" r="11" fill="currentColor" />
      {Array.from({ length: 12 }, (_, i) => (
        <path key={i} d="M30 4 L33 13 L27 13 Z" fill="currentColor" transform={`rotate(${i * 30} 30 30)`} />
      ))}
    </svg>
  )
}

/** Stylised tree of life, as painted on mud walls. */
export function Tree({ className }: Props) {
  return (
    <svg aria-hidden viewBox="0 0 100 140" className={className}>
      <path d="M50 140 V40" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      {[
        [50, 95, -40],
        [50, 80, 40],
        [50, 65, -35],
        [50, 52, 35],
      ].map(([x, y, rot], i) => (
        <g key={i} transform={`rotate(${rot} ${x} ${y})`}>
          <path d={`M${x} ${y} V${y - 34}`} stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          {[0, 1, 2, 3].map((k) => (
            <ellipse
              key={k}
              cx={x + (k % 2 ? 7 : -7)}
              cy={y - 8 - k * 7}
              rx="6"
              ry="3"
              fill="currentColor"
              transform={`rotate(${k % 2 ? -30 : 30} ${x + (k % 2 ? 7 : -7)} ${y - 8 - k * 7})`}
            />
          ))}
        </g>
      ))}
      <ellipse cx="50" cy="28" rx="16" ry="22" fill="currentColor" />
      <ellipse
        cx="50"
        cy="28"
        rx="9"
        ry="15"
        fill="none"
        stroke="#FFF8EC"
        strokeWidth="1.5"
        strokeDasharray="1 4"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Section heading with eyebrow, display title and zigzag rule. */
export function SectionTitle({
  eyebrow,
  title,
  children,
  align = "center",
  tone = "dark",
}: {
  eyebrow: string
  title: React.ReactNode
  children?: React.ReactNode
  align?: "center" | "left"
  tone?: "dark" | "light"
}) {
  const center = align === "center"
  return (
    <div className={cn("mb-12 max-w-3xl", center && "mx-auto text-center")}>
      <span className={cn("eyebrow", tone === "light" && "text-haldi")}>
        <Sun className="h-4 w-4" />
        {eyebrow}
      </span>
      <h2 className={cn("mt-3 text-4xl leading-[1.05] md:text-5xl", tone === "light" ? "text-rice" : "text-soil")}>
        {title}
      </h2>
      <Zigzag className={cn("mt-4 text-sindoor", center && "mx-auto", tone === "light" && "text-haldi")} />
      {children && (
        <p className={cn("mt-5 text-lg leading-relaxed", tone === "light" ? "text-rice/80" : "text-soil/75")}>
          {children}
        </p>
      )}
    </div>
  )
}
