import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { SectionTitle, SohraiBand, WarliDancers } from "@/components/motifs"
import PageHero from "@/components/site/page-hero"
import Reveal from "@/components/site/reveal"
import { partnerStats, partners, whyPartner } from "@/lib/site"

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "Tata Steel, JUSCO, Tata Power and Tata Motors partner with Adibasi Welfare Society to create employment for tribal communities.",
}

export default function PartnersPage() {
  return (
    <>
      <PageHero eyebrow="Our Partners" title="Partnerships that create livelihoods">
        Trusted by leading industrial partners who share our commitment to tribal welfare and sustainable development.
      </PageHero>

      <section className="container-x pt-12">
        <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {partnerStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="card-earth flex flex-col-reverse p-6 text-center">
              <dt className="mt-1 text-sm font-semibold text-soil/60">{s.label}</dt>
              <dd className="font-display text-4xl text-laterite">{s.value}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="py-24">
        <div className="container-x">
          <SectionTitle eyebrow="Who we work with" title="Our valued partners" />
          <div className="grid gap-8 md:grid-cols-2">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 0.1} className="card-earth overflow-hidden">
                <div className="flex items-center gap-6 bg-white p-6">
                  <div className="relative h-20 w-32 shrink-0">
                    <Image src={p.logo} alt={`${p.name} logo`} fill sizes="8rem" className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-3xl">{p.name}</h3>
                    <p className="text-soil/60">{p.description}</p>
                  </div>
                </div>
                <SohraiBand className="h-2.5 text-haldi" />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-sindoor">Partner since {p.since}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.services.map((s) => (
                      <li key={s} className="rounded-full bg-forest/10 px-3 py-1.5 text-sm font-semibold text-forest">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="laterite-wall relative overflow-hidden py-24">
        <WarliDancers className="absolute inset-x-0 bottom-6 h-12 text-rice/15" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Why partner with us"
              title="A workforce rooted in community"
              align="left"
              tone="light"
            />
            <ul className="-mt-2 space-y-4">
              {whyPartner.map((w) => (
                <li key={w} className="flex items-center gap-3 text-lg text-rice">
                  <Check className="h-6 w-6 shrink-0 rounded-full bg-haldi p-1 text-soil" /> {w}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-light mt-10 px-8 py-4 text-base">
              Become a partner
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-[8px] border-rice/90 shadow-2xl">
            <Image
              src="/images/gallery/bus-fleet.jpeg"
              alt="The society's bus fleet"
              fill
              sizes="(min-width: 1024px) 40rem, 95vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  )
}
