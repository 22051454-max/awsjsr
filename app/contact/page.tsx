import type { Metadata } from "next"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { SohraiBand } from "@/components/motifs"
import ContactForm from "@/components/site/contact-form"
import PageHero from "@/components/site/page-hero"
import Reveal from "@/components/site/reveal"
import { org, telHref } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${org.name}, ${org.address.join(", ")}. Phone ${org.phones[0]}, email ${org.email}.`,
}

export default function ContactPage() {
  const info = [
    { icon: MapPin, title: "Address", lines: org.address },
    { icon: Phone, title: "Phone", lines: org.phones, href: telHref },
    { icon: Mail, title: "Email", lines: [org.email], href: (e: string) => `mailto:${e}` },
    { icon: Clock, title: "Office hours", lines: org.hours },
  ]

  return (
    <>
      <PageHero eyebrow="Contact Us" title="Come, sit with us">
        Get in touch to learn more about our initiatives, partner with us, or contribute to the welfare of tribal
        communities.
      </PageHero>

      <section className="container-x grid gap-10 py-20 lg:grid-cols-[1fr_1.15fr]">
        <div className="space-y-5">
          {info.map(({ icon: Icon, title, lines, href }, i) => (
            <Reveal key={title} delay={i * 0.06} className="card-earth flex gap-5 p-6">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sindoor text-rice">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-2xl">{title}</h2>
                {lines.map((l) =>
                  href ? (
                    <a key={l} href={href(l)} className="block break-all font-semibold text-soil/80 hover:text-sindoor">
                      {l}
                    </a>
                  ) : (
                    <p key={l} className="text-soil/75">
                      {l}
                    </p>
                  ),
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="card-earth overflow-hidden">
          <SohraiBand className="h-3 text-laterite" />
          <div className="p-6 md:p-10">
            <h2 className="text-4xl">Send us a message</h2>
            <p className="mb-8 mt-2 text-soil/70">We read every message and reply personally.</p>
            <ContactForm />
          </div>
        </Reveal>
      </section>

      <section className="container-x pb-24">
        <div className="overflow-hidden rounded-[2rem] border-[8px] border-rice shadow-xl">
          <iframe
            title={`Map of ${org.place}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(org.mapQuery)}&output=embed`}
            className="h-96 w-full grayscale-[30%] sepia-[20%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}
