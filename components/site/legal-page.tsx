import { SohraiBand } from "@/components/motifs"
import PageHero from "@/components/site/page-hero"
import { org } from "@/lib/site"

export type LegalSection = { heading: string; text?: string; points?: string[] }

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}) {
  return (
    <>
      <PageHero eyebrow={title} title={title}>
        Last updated: {updated}
      </PageHero>
      <section className="container-x max-w-3xl py-20">
        <article className="card-earth overflow-hidden">
          <SohraiBand className="h-3 text-forest" />
          <div className="space-y-10 p-6 md:p-12">
            <p className="text-lg leading-relaxed text-soil/80">{intro}</p>
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-3xl text-laterite">{s.heading}</h2>
                {s.text && <p className="mt-3 leading-relaxed text-soil/80">{s.text}</p>}
                {s.points && (
                  <ul className="mt-4 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3 text-soil/80">
                        <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-sindoor" />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <p className="rounded-2xl bg-clay-deep p-5 text-soil/80">
              Questions? Write to us at{" "}
              <a href={`mailto:${org.email}`} className="font-bold text-sindoor hover:underline">
                {org.email}
              </a>
              .
            </p>
          </div>
        </article>
      </section>
    </>
  )
}
