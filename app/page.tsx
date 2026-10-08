import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, HandHeart, Mail, MapPin, Phone } from "lucide-react"
import { SectionTitle, SohraiBand, Sun, TarpaCircle, Tree, WarliDancers } from "@/components/motifs"
import Reveal from "@/components/site/reveal"
import {
  aboutStats,
  gallery,
  heroStats,
  milestones,
  mission,
  org,
  partners,
  services,
  story,
  telHref,
  vision,
} from "@/lib/site"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <ArtBanner />
      <Journey />
      <Partners />
      <GalleryPreview />
      <DonateCta />
      <ContactStrip />
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Tree className="pointer-events-none absolute -left-12 top-10 hidden h-[24rem] text-forest/[0.06] xl:block" />
      <div className="container-x grid items-center gap-14 pb-16 pt-12 md:pt-20 lg:grid-cols-[1.05fr_1fr]">
        <Reveal>
          <span className="eyebrow">
            <Sun className="h-4 w-4" /> Since {org.founded} · {org.place}
          </span>
          <h1 className="mt-5 text-5xl leading-[0.98] text-soil sm:text-6xl xl:text-7xl">
            Rooted in tradition,
            <span className="relative mt-1 block text-sindoor">
              rising together.
              <svg
                aria-hidden
                viewBox="0 0 300 16"
                className="absolute -bottom-3 left-0 h-4 w-[min(100%,22rem)] text-haldi"
              >
                <path
                  d="M2 10 C 60 2, 120 14, 180 6 S 280 4, 298 9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mt-9 max-w-xl text-lg leading-relaxed text-soil/75">{org.intro}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/donate" className="btn-primary px-7 py-3.5 text-base">
              <HandHeart className="h-5 w-5" /> Donate Now
            </Link>
            <Link href="/our-work" className="btn-ghost px-7 py-3.5 text-base text-soil">
              See Our Work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-lg">
          {/* Painted wall in an arch, like a village doorway */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border-[10px] border-rice shadow-[0_30px_60px_-20px_rgba(43,27,18,.55)]">
            <Image
              src="/images/tribal-pattern.jpeg"
              alt="Tribal wall painting of a community dancing around a fire"
              fill
              priority
              sizes="(min-width: 1024px) 32rem, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-4 w-44 overflow-hidden rounded-2xl border-[6px] border-rice shadow-xl sm:-left-10 sm:w-56">
            <Image
              src="/images/gallery/employment-females.jpeg"
              alt="Women workers employed through AWS"
              width={448}
              height={300}
              className="aspect-[4/3] object-cover"
            />
          </div>
          <div className="absolute -right-3 top-10 rounded-2xl bg-forest px-5 py-4 text-rice shadow-xl sm:-right-8">
            <p className="font-display text-4xl leading-none text-haldi">25+</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-widest">years of seva</p>
          </div>
          <Sun className="animate-sway absolute -top-6 right-16 h-16 w-16 text-haldi" />
        </Reveal>
      </div>

      <div className="container-x pb-16">
        <dl className="grid grid-cols-2 overflow-hidden rounded-3xl border border-clay-dark bg-rice/70 md:grid-cols-4">
          {heroStats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col-reverse p-6 text-center md:p-8 ${i > 0 ? "md:border-l" : ""} ${i % 2 ? "border-l md:border-l" : ""} ${i > 1 ? "border-t md:border-t-0" : ""} border-clay-dark`}
            >
              <dt className="mt-1 text-sm font-semibold text-soil/60">{s.label}</dt>
              <dd className="font-display text-4xl text-laterite md:text-5xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function Marquee() {
  const words = services.map((s) => s.title)
  const row = [...words, ...words]
  return (
    <div className="overflow-hidden bg-haldi py-4 text-soil" aria-hidden>
      <div className="animate-marquee flex w-max items-center gap-8">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-2xl">
            {w}
            <Sun className="h-6 w-6 text-laterite" />
          </span>
        ))}
      </div>
    </div>
  )
}

function About() {
  return (
    <section className="py-24">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-[8px] border-rice shadow-xl">
            <Image
              src="/images/gallery/tailoring-training.jpeg"
              alt="Women at a dress making training centre"
              fill
              sizes="(min-width: 1024px) 40rem, 95vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-2 grid w-64 grid-cols-2 gap-px overflow-hidden rounded-2xl bg-clay-dark shadow-xl sm:-right-8">
            {aboutStats.map((s) => (
              <div key={s.label} className="bg-soil p-4 text-rice">
                <p className="font-display text-2xl text-haldi">{s.value}</p>
                <p className="text-[11px] leading-tight text-rice/70">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="pt-6 lg:pt-0">
          <SectionTitle eyebrow="Who we are" title="A beacon of hope for tribal communities" align="left" />
          <p className="-mt-4 text-lg leading-relaxed text-soil/75">{story[0]}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { title: "Our Vision", text: vision },
              { title: "Our Mission", text: mission },
            ].map((c) => (
              <div key={c.title} className="card-earth p-6">
                <h3 className="text-2xl text-forest">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-soil/75">{c.text}</p>
              </div>
            ))}
          </div>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 font-bold text-sindoor hover:gap-3 transition-all"
          >
            Read our full story <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="laterite-wall relative overflow-hidden py-24">
      <WarliDancers className="absolute inset-x-0 top-6 h-12 text-rice/15" />
      <div className="container-x relative pt-6">
        <SectionTitle eyebrow="What we do" title="Work that feeds families and builds futures" tone="light">
          Comprehensive services designed to uplift and empower tribal communities through sustainable development and
          modern opportunities.
        </SectionTitle>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/our-work#${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-rice text-soil shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 95vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-rice font-display text-lg text-sindoor">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <SohraiBand className="h-2.5 text-haldi" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl">{s.title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-soil/70">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-sindoor">
                    Learn more{" "}
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ArtBanner() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image src="/images/warli-art.jpeg" alt="" fill sizes="100vw" className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-soil/90 via-soil/60 to-soil/20" />
      <div className="container-x py-28 md:py-36">
        <Reveal className="max-w-xl">
          <p className="font-hand text-2xl text-haldi">Jal, Jangal, Jameen</p>
          <blockquote className="mt-3 font-display text-4xl leading-tight text-rice md:text-5xl">
            “Progress should never cost a people their identity.”
          </blockquote>
          <p className="mt-5 text-rice/75">{story[2]}</p>
        </Reveal>
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section className="py-24">
      <div className="container-x">
        <SectionTitle eyebrow="Our journey" title="Twenty-five years, one village at a time" />
        <div className="relative">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[2.15rem] hidden border-t-2 border-dashed border-sindoor/40 lg:block"
          />
          <ol className="relative grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 0.06} className="relative">
                <span className="relative z-10 grid h-[4.3rem] w-[4.3rem] place-items-center rounded-full border-4 border-clay bg-forest font-display text-lg text-rice">
                  {m.year}
                </span>
                <h3 className="mt-4 text-xl">{m.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-soil/70">{m.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function Partners() {
  return (
    <section className="border-y border-clay-dark bg-clay-deep/60 py-20">
      <div className="container-x">
        <SectionTitle eyebrow="Trusted by industry" title="Our valued partners">
          Leading industrial partners who share our commitment to tribal welfare and sustainable development.
        </SectionTitle>
        <ul className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {partners.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 0.08}>
              <Link
                href="/customers"
                className="group flex h-full flex-col items-center rounded-3xl border-2 border-transparent bg-white p-6 shadow-sm transition hover:border-haldi"
              >
                <div className="relative h-20 w-full">
                  <Image src={p.logo} alt={`${p.name} logo`} fill sizes="12rem" className="object-contain" />
                </div>
                <p className="mt-4 font-display text-lg text-soil">{p.name}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-soil/50">Since {p.since}</p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

function GalleryPreview() {
  const shots = gallery.slice(0, 4)
  return (
    <section className="py-24">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle eyebrow="Photo gallery" title="Moments from the field" align="left" />
          <Link href="/gallery" className="btn-ghost mb-12 text-soil">
            View full gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid auto-rows-[11rem] grid-cols-2 gap-4 md:auto-rows-[13rem] md:grid-cols-4">
          {shots.map((p, i) => (
            <Reveal
              key={p.src}
              delay={i * 0.06}
              className={i === 0 ? "col-span-2 row-span-2" : i === 3 ? "col-span-2" : ""}
            >
              <Link href="/gallery" className="group relative block h-full overflow-hidden rounded-3xl">
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soil/85 via-soil/10 to-transparent" />
                <div className="absolute bottom-0 p-4 text-rice">
                  <span className="rounded-full bg-haldi px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-soil">
                    {p.tag}
                  </span>
                  <p className="mt-2 font-display text-lg leading-tight md:text-xl">{p.title}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function DonateCta() {
  return (
    <section className="container-x pb-24">
      <div className="mud-wall relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center md:px-16 md:py-20">
        <TarpaCircle className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 text-rice/[0.06]" />
        <Reveal className="relative mx-auto max-w-2xl">
          <span className="eyebrow text-haldi">
            <Sun className="h-4 w-4" /> Join the circle
          </span>
          <h2 className="mt-4 text-4xl text-rice md:text-6xl">Your support keeps the drum beating</h2>
          <p className="mt-5 text-lg text-rice/75">
            Every donation funds training, health camps, jobs and village infrastructure. Donations are eligible for tax
            deduction under Section 80G.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/donate" className="btn-primary px-8 py-4 text-base">
              <HandHeart className="h-5 w-5" /> Donate Now
            </Link>
            <Link href="/contact" className="btn-light px-8 py-4 text-base">
              Partner With Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ContactStrip() {
  const items = [
    {
      icon: MapPin,
      label: "Visit",
      value: org.address.join(", "),
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(org.mapQuery)}`,
    },
    { icon: Phone, label: "Call", value: org.phones[0], href: telHref(org.phones[0]) },
    { icon: Mail, label: "Write", value: org.email, href: `mailto:${org.email}` },
  ]
  return (
    <section className="container-x pb-24">
      <ul className="grid gap-4 md:grid-cols-3">
        {items.map(({ icon: Icon, label, value, href }) => (
          <li key={label}>
            <a
              href={href}
              className="card-earth group flex h-full items-center gap-4 p-6 transition hover:border-sindoor"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sindoor text-rice transition group-hover:rotate-6">
                <Icon className="h-6 w-6" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-bold uppercase tracking-widest text-soil/50">{label}</span>
                <span className="block break-words font-semibold text-soil">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
