"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react"
import type { Photo } from "@/lib/site"
import { cn } from "@/lib/utils"

export default function GalleryGrid({ photos }: { photos: Photo[] }) {
  const tags = ["All", ...Array.from(new Set(photos.map((p) => p.tag)))]
  const [tag, setTag] = useState("All")
  const [open, setOpen] = useState<number | null>(null)
  const shown = tag === "All" ? photos : photos.filter((p) => p.tag === tag)

  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + shown.length) % shown.length)),
    [shown.length],
  )

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null)
      if (e.key === "ArrowRight") step(1)
      if (e.key === "ArrowLeft") step(-1)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [open, step])

  const current = open === null ? null : shown[open]

  return (
    <>
      <div role="tablist" aria-label="Filter photos" className="mb-10 flex flex-wrap justify-center gap-2">
        {tags.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tag === t}
            onClick={() => setTag(t)}
            className={cn(
              "rounded-full border-2 px-4 py-2 text-sm font-bold transition",
              tag === t
                ? "border-soil bg-soil text-rice"
                : "border-clay-dark bg-rice text-soil/75 hover:border-sindoor hover:text-sindoor",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <motion.ul layout className="grid auto-rows-[16rem] grid-flow-dense gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <motion.li
              layout
              key={p.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={cn(
                tag === "All" && (i === 0 ? "sm:col-span-2 sm:row-span-2" : i % 3 === 0 ? "sm:col-span-2" : ""),
              )}
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group relative block h-full w-full overflow-hidden rounded-3xl border-[6px] border-rice text-left shadow-lg"
              >
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 95vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soil/90 via-soil/10 to-transparent opacity-90 transition group-hover:opacity-100" />
                <Expand className="absolute right-4 top-4 h-9 w-9 rounded-full bg-rice/90 p-2 text-soil opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-0 p-5 text-rice">
                  <span className="rounded-full bg-haldi px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-soil">
                    {p.tag}
                  </span>
                  <p className="mt-2 font-display text-xl leading-tight">{p.title}</p>
                  <p className="mt-1 text-sm text-rice/75">{p.description}</p>
                </div>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-soil/95 p-4"
            onClick={() => setOpen(null)}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-rice/10 text-rice hover:bg-rice/20"
              onClick={() => setOpen(null)}
            >
              <X />
            </button>
            <motion.div
              key={current.src}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={current.src}
                alt={current.title}
                width={1200}
                height={800}
                className="max-h-[75vh] w-full rounded-2xl object-contain"
              />
              <div className="mt-4 text-center text-rice">
                <p className="font-display text-2xl">{current.title}</p>
                <p className="mt-1 text-rice/70">{current.description}</p>
              </div>
            </motion.div>
            {shown.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous photo"
                  onClick={(e) => (e.stopPropagation(), step(-1))}
                  className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-rice/10 text-rice hover:bg-sindoor"
                >
                  <ChevronLeft />
                </button>
                <button
                  type="button"
                  aria-label="Next photo"
                  onClick={(e) => (e.stopPropagation(), step(1))}
                  className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-rice/10 text-rice hover:bg-sindoor"
                >
                  <ChevronRight />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
