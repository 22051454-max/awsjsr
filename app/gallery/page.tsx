import type { Metadata } from "next"
import Image from "next/image"
import PageHero from "@/components/site/page-hero"
import GalleryGrid from "@/components/site/gallery-grid"
import { gallery } from "@/lib/site"

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Photos of training, employment, health camps, education and transport programs run by Adibasi Welfare Society.",
}

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Photo Gallery" title="Moments of change, captured">
        Capturing moments of transformation, celebration, and community spirit in our journey of tribal empowerment.
      </PageHero>
      <section className="container-x py-20">
        <GalleryGrid photos={gallery} />
      </section>
      <section className="container-x pb-24">
        <figure className="relative overflow-hidden rounded-[2.5rem] border-[8px] border-rice shadow-xl">
          <Image
            src="/images/tribal-pattern.jpeg"
            alt="Traditional tribal wall painting of a community celebration"
            width={2048}
            height={2048}
            sizes="(min-width: 1280px) 80rem, 95vw"
            className="h-80 w-full object-cover md:h-[28rem]"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-soil/90 to-transparent p-8 pt-20 text-rice">
            <p className="font-hand text-xl text-haldi">Our heritage</p>
            <p className="font-display text-3xl">Painted stories of dance, harvest and fire</p>
          </figcaption>
        </figure>
      </section>
    </>
  )
}
