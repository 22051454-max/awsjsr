import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Check, HandHeart } from "lucide-react"
import { SohraiBand, Sun } from "@/components/motifs"
import PageHero from "@/components/site/page-hero"
import Reveal from "@/components/site/reveal"
import { impactStats, services } from "@/lib/site"

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Employment, skill development, healthcare, education, transport, material handling and industrial cleaning for tribal communities.",
}

export default function OurWorkPage() {
  return (
    <>
      <PageHero eyebrow="Our Work" title="Six paths to a better life">
        Comprehensive services designed to uplift and empower tribal communities through sustainable development and
        modern opportunities.
      </PageHero>

      <section className="container-x pt-12">
        <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {impactStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="card-earth flex flex-col-reverse p-6 text-center">
              <dt className="mt-1 text-sm font-semibold text-soil/60">{s.label}</dt>
              <dd className="font-display text-4xl text-laterite">{s.value}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <nav aria-label="Services" className="container-x mt-10 flex flex-wrap justify-center gap-2">
        {services.map((s) => (
          <a
            key={s.slug}
            href={`#${s.slug}`}
            className="rounded-full border-2 border-clay-dark bg-rice px-4 py-2 text-sm font-semibold text-soil/80 transition hover:border-sindoor hover:text-sindoor"
          >
            {s.title}
          </a>
        ))}
      </nav>

      <div className="container-x space-y-24 py-24">
        {services.map((s, i) => (
          <section key={s.slug} id={s.slug} className="grid scroll-mt-32 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className={i % 2 ? "lg:order-2" : ""}>
              <div className="relative">
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-[2rem] border-[8px] border-rice shadow-xl ${i % 2 ? "rounded-tl-[8rem]" : "rounded-tr-[8rem]"}`}
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 40rem, 95vw"
                    className="object-cover"
                  />
                </div>
                <span
                  className={`absolute -top-5 grid h-16 w-16 place-items-center rounded-full bg-haldi font-display text-2xl text-soil shadow-lg ${i % 2 ? "-right-3" : "-left-3"}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="eyebrow">
                <Sun className="h-4 w-4" /> Service {i + 1} of {services.length}
              </span>
              <h2 className="mt-3 text-4xl md:text-5xl">{s.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-soil/75">{s.description}</p>
              <div className="card-earth mt-8 overflow-hidden">
                <SohraiBand className="h-2.5 text-sindoor" />
                <ul className="grid gap-3 p-6 sm:grid-cols-3">
                  {s.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-2 font-semibold text-soil">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-forest p-0.5 text-rice" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </section>
        ))}
      </div>

      <section className="container-x pb-24">
        <div className="mud-wall rounded-[2.5rem] px-6 py-16 text-center md:px-16">
          <h2 className="text-4xl text-rice md:text-5xl">Join our mission</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-rice/75">
            Partner with us to create lasting impact in tribal communities. Together, we can build a sustainable future
            that honors tradition while embracing progress.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary px-8 py-4 text-base">
              Partner With Us
            </Link>
            <Link href="/donate" className="btn-light px-8 py-4 text-base">
              <HandHeart className="h-5 w-5" /> Support Our Cause
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
