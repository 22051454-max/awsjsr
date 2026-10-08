"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { HandHeart, Mail, Menu, Phone, X } from "lucide-react"
import { SohraiBand } from "@/components/motifs"
import { nav, org, telHref } from "@/lib/site"
import { cn } from "@/lib/utils"

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  // Keep the page behind the mobile menu from scrolling while it is open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-40">
      {/* Contact strip */}
      <div className={cn("mud-wall hidden text-xs transition-all md:block", scrolled && "md:hidden")}>
        <div className="container-x flex h-9 items-center justify-between">
          <p className="font-hand text-sm text-haldi">Johar! Welcome to {org.name}</p>
          <div className="flex items-center gap-5 text-rice/85">
            <a href={telHref(org.phones[0])} className="flex items-center gap-1.5 hover:text-haldi">
              <Phone className="h-3.5 w-3.5" /> {org.phones[0]}
            </a>
            <a href={`mailto:${org.email}`} className="flex items-center gap-1.5 hover:text-haldi">
              <Mail className="h-3.5 w-3.5" /> {org.email}
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "bg-clay/90 backdrop-blur-md transition-shadow",
          scrolled && "shadow-[0_8px_24px_-16px_rgba(43,27,18,.5)]",
        )}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label={`${org.name} home`}>
            <Image
              src="/images/aws-logo.png"
              alt=""
              width={52}
              height={52}
              priority
              className="h-12 w-12 rounded-full bg-rice ring-2 ring-forest/30"
            />
            <span className="leading-tight">
              <span className="block font-display text-lg text-soil sm:text-xl">{org.name}</span>
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-forest sm:text-[11px] sm:tracking-[0.2em]">
                {org.place}
              </span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[15px] font-semibold text-soil/80 transition hover:text-sindoor",
                  isActive(item.href) && "text-sindoor",
                )}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-sindoor"
                  />
                )}
              </Link>
            ))}
            <Link href="/donate" className="btn-primary ml-3 py-2.5">
              <HandHeart className="h-4 w-4" /> Donate
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-soil/15 text-soil lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <SohraiBand className="h-2.5 text-laterite/80" />
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mud-wall absolute inset-x-0 top-full max-h-[calc(100dvh-5.25rem)] overflow-y-auto overscroll-contain border-b-4 border-haldi lg:hidden"
          >
            <ul className="container-x flex flex-col py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between border-b border-rice/10 py-3.5 font-display text-2xl",
                      isActive(item.href) ? "text-haldi" : "text-rice",
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-5">
                <Link href="/donate" onClick={() => setOpen(false)} className="btn-primary w-full">
                  <HandHeart className="h-4 w-4" /> Donate Now
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
