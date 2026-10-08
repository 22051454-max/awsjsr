import Image from "next/image"
import Link from "next/link"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { SohraiBand, Tree, WarliDancers } from "@/components/motifs"
import Marquee from "@/components/site/marquee"
import Fireflies from "@/components/site/fireflies"
import { nav, org, services, telHref } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="mud-wall relative mt-0 overflow-hidden">
      <SohraiBand className="h-4 text-haldi" />
      <Marquee speed={70} reverse gap="gap-0" className="mt-6">
        <WarliDancers className="h-14 w-[60rem] text-rice/25" />
      </Marquee>
      <Fireflies count={12} />

      <Tree className="pointer-events-none absolute -right-6 bottom-10 hidden h-80 text-rice/[0.06] md:block" />

      <div className="container-x relative grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/aws-logo.png"
              alt=""
              width={60}
              height={60}
              className="h-14 w-14 rounded-full bg-rice"
            />
            <span className="font-display text-2xl leading-tight">{org.name}</span>
          </Link>
          <p className="mt-5 max-w-sm leading-relaxed text-rice/70">
            Serving tribal communities of Jharkhand since {org.founded}, bridging tradition and progress through
            employment, skills, health and education.
          </p>
          <p className="mt-5 font-hand text-xl text-haldi">Jal, Jangal, Jameen. Our roots, our future.</p>
        </div>

        <div>
          <h3 className="font-display text-xl text-haldi">Explore</h3>
          <ul className="mt-3 md:mt-5 md:space-y-2.5">
            {[...nav, { name: "Donate", href: "/donate" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-block py-2 text-rice/75 transition hover:text-haldi md:py-0">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl text-haldi">What we do</h3>
          <ul className="mt-3 md:mt-5 md:space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/our-work#${s.slug}`} className="inline-block py-2 text-rice/75 transition hover:text-haldi md:py-0">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl text-haldi">Reach us</h3>
          <ul className="mt-5 space-y-4 text-rice/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sindoor" />
              <span>{org.address.join(", ")}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-2 md:mt-0.5 h-5 w-5 shrink-0 text-sindoor" />
              <span className="flex flex-col">
                {org.phones.map((p) => (
                  <a key={p} href={telHref(p)} className="py-1.5 hover:text-haldi md:py-0">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-2 md:mt-0.5 h-5 w-5 shrink-0 text-sindoor" />
              <a href={`mailto:${org.email}`} className="break-all py-1.5 hover:text-haldi md:py-0">
                {org.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-sindoor" />
              <span className="flex flex-col text-sm">
                {org.hours.map((h) => (
                  <span key={h}>{h}</span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-rice/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm text-rice/55 md:flex-row">
          <p>
            © {new Date().getFullYear()} {org.name}, {org.place}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="py-2 hover:text-haldi md:py-0">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="py-2 hover:text-haldi md:py-0">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
