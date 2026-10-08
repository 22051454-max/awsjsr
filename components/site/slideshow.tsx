"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"

export type Slide = { src: string; alt: string; caption?: string }

/**
 * Photos that change on their own: each slide wipes in from a circle, then slowly
 * drifts and zooms (Ken Burns). Pauses on hover and respects reduced motion.
 */
export default function Slideshow({
  slides,
  interval = 4500,
  offset = 0,
  sizes = "100vw",
  priority = false,
  className,
  showDots = true,
  showCaption = false,
}: {
  slides: Slide[]
  interval?: number
  offset?: number
  sizes?: string
  priority?: boolean
  className?: string
  showDots?: boolean
  showCaption?: boolean
}) {
  const [i, setI] = useState(offset % slides.length)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || slides.length < 2) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const t = setTimeout(() => setI((v) => (v + 1) % slides.length), interval)
    return () => clearTimeout(t)
  }, [i, paused, interval, slides.length])

  const s = slides[i]
  const pan = i % 2 ? { x: ["0%", "-3%"], y: ["0%", "2%"] } : { x: ["0%", "3%"], y: ["0%", "-2%"] }

  return (
    <div
      className={cn("relative overflow-hidden bg-soil", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={s.src}
          className="absolute inset-0"
          initial={{ clipPath: "circle(0% at 50% 60%)" }}
          animate={{ clipPath: "circle(150% at 50% 60%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1], opacity: { duration: 0.6, delay: 0.8 } }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1.02, ...pan }}
            transition={{ duration: interval / 1000 + 1.5, ease: "linear" }}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes={sizes}
              priority={priority && i === offset}
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {showCaption && s.caption && (
        <AnimatePresence mode="wait">
          <motion.p
            key={s.caption}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute bottom-10 left-1/2 w-max max-w-[85%] -translate-x-1/2 rounded-full bg-soil/75 px-4 py-1.5 text-center text-xs font-semibold text-rice backdrop-blur"
          >
            {s.caption}
          </motion.p>
        </AnimatePresence>
      )}

      {showDots && slides.length > 1 && (
        <div className="absolute bottom-1 left-1/2 flex -translate-x-1/2">
          {slides.map((sl, k) => (
            <button
              key={sl.src}
              type="button"
              aria-label={`Show photo ${k + 1}`}
              onClick={() => setI(k)}
              className="group grid h-8 place-items-center px-1"
            >
              <span
                className={cn(
                  "h-2 rounded-full bg-rice/60 transition-all",
                  k === i ? "w-6 bg-haldi" : "w-2 group-hover:bg-rice",
                )}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
