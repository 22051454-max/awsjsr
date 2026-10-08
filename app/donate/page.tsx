import type { Metadata } from "next"
import Image from "next/image"
import { BadgeCheck, Megaphone, Handshake, Users } from "lucide-react"
import { SectionTitle, SohraiBand } from "@/components/motifs"
import DonatePicker from "@/components/site/donate-picker"
import PageHero from "@/components/site/page-hero"
import Reveal from "@/components/site/reveal"
import { donationNotes, impactAreas, waysToHelp } from "@/lib/site"

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support education, healthcare, employment and infrastructure for tribal communities. Donations are eligible for 80G tax deduction.",
}

const helpIcons = [Users, Handshake, Megaphone]

export default function DonatePage() {
  return (
    <>
      <PageHero eyebrow="Donate" title="Give a gift that grows">
        Your contribution can transform lives. Every rupee supports education, healthcare, employment and infrastructure
        in tribal villages.
      </PageHero>

      <section className="container-x grid gap-10 py-20 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionTitle eyebrow="Where your gift goes" title="Your impact, in real terms" align="left" />
          <div className="grid gap-5 sm:grid-cols-2">
            {impactAreas.map((a, i) => (
              <Reveal key={a.title} delay={(i % 2) * 0.08} className="card-earth overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 95vw"
                    className="object-cover"
                  />
                </div>
                <SohraiBand className="h-2 text-haldi" />
                <div className="p-5">
                  <h3 className="text-xl">{a.title}</h3>
                  <p className="mt-1 text-sm text-soil/70">{a.description}</p>
                  <p className="mt-3 rounded-xl bg-forest/10 px-3 py-2 text-sm font-bold text-forest">{a.impact}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal className="card-earth overflow-hidden">
            <div className="mud-wall px-8 py-6">
              <p className="font-hand text-xl text-haldi">Every rupee counts</p>
              <h2 className="text-4xl text-rice">Make a donation</h2>
            </div>
            <SohraiBand className="h-3 text-laterite" />
            <div className="p-6 md:p-8">
              <DonatePicker />
              <ul className="mt-8 space-y-2 border-t border-clay-dark pt-6">
                {donationNotes.map((n) => (
                  <li key={n} className="flex items-start gap-2 text-sm text-soil/80">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-forest" /> {n}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="laterite-wall py-20">
        <div className="container-x">
          <SectionTitle eyebrow="Other ways to help" title="Not ready to give? Walk with us." tone="light" />
          <div className="grid gap-5 md:grid-cols-3">
            {waysToHelp.map((w, i) => {
              const Icon = helpIcons[i]
              return (
                <Reveal
                  key={w.title}
                  delay={i * 0.08}
                  className="rounded-3xl border border-rice/20 bg-rice/10 p-8 text-center"
                >
                  <Icon className="mx-auto h-10 w-10 text-haldi" />
                  <h3 className="mt-4 text-2xl text-rice">{w.title}</h3>
                  <p className="mt-2 text-rice/75">{w.text}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
