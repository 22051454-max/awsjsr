"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { TarpaCircle } from "@/components/motifs"
import { org } from "@/lib/site"

const KEY = "aws-intro-shown"

/** Once-per-visit welcome overlay on the home page. The page renders underneath, so nothing waits on it. */
export default function Intro() {
  const pathname = usePathname()
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (pathname !== "/") return
    try {
      if (sessionStorage.getItem(KEY)) return
      sessionStorage.setItem(KEY, "1")
    } catch {
      return
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    setShow(true)
    const t = setTimeout(() => setShow(false), 2500)
    return () => clearTimeout(t)
  }, [pathname])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="presentation"
          onClick={() => setShow(false)}
          className="mud-wall fixed inset-0 z-[90] grid place-items-center overflow-hidden"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute h-[140vmin] w-[140vmin] text-rice/10"
            initial={{ rotate: -30, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
          >
            <TarpaCircle musician={false} className="h-full w-full" />
          </motion.div>
          <div className="relative text-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: "backOut" }}
            >
              <Image
                src="/images/aws-logo.png"
                alt=""
                width={168}
                height={168}
                priority
                className="mx-auto rounded-full bg-rice p-1 ring-4 ring-haldi"
              />
            </motion.div>
            <motion.h1
              className="mt-6 px-4 font-display text-4xl text-rice md:text-6xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {org.name}
            </motion.h1>
            <motion.p
              className="mt-3 font-hand text-2xl text-haldi"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              Johar! {org.tagline}
            </motion.p>
            <p className="mt-10 text-xs uppercase tracking-[0.3em] text-rice/40">Tap to enter</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
