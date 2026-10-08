import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { HandHeart, Leaf, ShieldCheck } from "lucide-react"
import { SectionTitle, SohraiBand, Tree } from "@/components/motifs"
import PageHero from "@/components/site/page-hero"
import Reveal from "@/components/site/reveal"
import { aboutStats, milestones, mission, policies, story, vision } from "@/lib/site"

export const metadata: Metadata = { title: "About Us", description: story[0] }

const policyIcons = [ShieldCheck, Leaf]

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="A bridge between tradition and progress">
        The Adibasi Welfare Society has been a beacon of hope for tribal communities, working tirelessly to bridge the
        gap between tradition and progress.
      </PageHero>

      <section className="py-24">
        <div className="container-x grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border-[10px] border-rice shadow-xl">
              <Image
                src="/images/gallery/employment-females.jpeg"
                alt="Women employed through the society"
                fill
                sizes="(min-width: 1024px) 34rem, 95vw"
                className="object-cover"
              />
            </div>
            <p className="absolute -bottom-6 left-1/2 w-max -translate-x-1/2 rounded-full bg-forest px-6 py-3 font-hand text-xl text-rice shadow-lg">
              Est. 1998, Ghorabandha
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle eyebrow="Our story" title="From a small initiative to 1000+ families" align="left" />
            <div className="-mt-4 space-y-5 text-lg leading-relaxed text-soil/80">
              {story.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="laterite-wall relative overflow-hidden py-20">
        <Tree className="pointer-events-none absolute -right-8 -top-10 h-96 text-rice/[0.07]" />
        <div className="container-x relative grid gap-6 md:grid-cols-2">
          {[
            { title: "Our Vision", text: vision },
            { title: "Our Mission", text: mission },
          ].map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.1}
              className="rounded-3xl border border-rice/20 bg-rice/10 p-8 backdrop-blur-sm md:p-10"
            >
              <p className="font-hand text-xl text-haldi">{i === 0 ? "Where we are going" : "How we get there"}</p>
              <h2 className="mt-1 text-4xl text-rice">{c.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-rice/85">{c.text}</p>
            </Reveal>
          ))}
        </div>
        <div className="container-x relative mt-10">
          <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {aboutStats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse rounded-2xl bg-soil/40 p-6 text-center">
                <dt className="mt-1 text-sm text-rice/70">{s.label}</dt>
                <dd className="font-display text-4xl text-haldi">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x max-w-4xl">
          <SectionTitle eyebrow="Our journey" title="Milestones along the path" />
          <ol className="relative space-y-10 before:absolute before:bottom-2 before:left-[2.1rem] before:top-2 before:border-l-2 before:border-dashed before:border-sindoor/40 md:before:left-1/2">
            {milestones.map((m, i) => (
              <Reveal
                as="li"
                key={m.year}
                className="relative grid grid-cols-[4.25rem_1fr] items-start gap-5 md:grid-cols-2 md:gap-14"
              >
                <span className="relative z-10 grid h-[4.25rem] w-[4.25rem] place-items-center rounded-full border-4 border-clay bg-forest font-display text-lg text-rice md:absolute md:left-1/2 md:-translate-x-1/2">
                  {m.year}
                </span>
                <div className={`card-earth p-6 ${i % 2 ? "md:col-start-2" : "md:col-start-1 md:text-right"} md:mx-6`}>
                  <h3 className="text-2xl">{m.title}</h3>
                  <p className="mt-1 leading-relaxed text-soil/70">{m.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-clay-dark bg-clay-deep/60 py-24">
        <div className="container-x">
          <SectionTitle eyebrow="What guides us" title="Our policies" />
          <div className="grid gap-6 md:grid-cols-2">
            {policies.map((p, i) => {
              const Icon = policyIcons[i]
              return (
                <Reveal key={p.title} delay={i * 0.1} className="card-earth overflow-hidden">
                  <SohraiBand className="h-3 text-forest" />
                  <div className="flex gap-5 p-8">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-forest text-rice">
                      <Icon className="h-7 w-7" />
                    </span>
                    <div>
                      <h3 className="text-2xl">{p.title}</h3>
                      <p className="mt-2 leading-relaxed text-soil/75">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <div className="mt-14 text-center">
            <Link href="/donate" className="btn-primary px-8 py-4 text-base">
              <HandHeart className="h-5 w-5" /> Support Our Mission
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
