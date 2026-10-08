import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { SohraiBand, Sun, TarpaCircle, Zigzag } from "@/components/motifs"

/** Dark mud-wall banner used at the top of every inner page. */
export default function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <section className="mud-wall relative overflow-hidden">
      <TarpaCircle className="pointer-events-none absolute -right-24 -top-24 h-[30rem] w-[30rem] text-rice/[0.07] md:right-0" />
      <Sun className="animate-sway absolute left-[8%] top-10 hidden h-12 w-12 text-haldi/40 md:block" />
      <div className="container-x relative py-16 md:py-24">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-rice/60">
          <Link href="/" className="hover:text-haldi">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-haldi">{eyebrow}</span>
        </nav>
        <h1 className="mt-4 max-w-3xl text-5xl leading-[1.02] text-rice md:text-7xl">{title}</h1>
        <Zigzag className="mt-5 text-haldi" />
        {children && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-rice/75">{children}</p>}
      </div>
      <SohraiBand className="h-4 text-clay" />
    </section>
  )
}
