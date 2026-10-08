import type { Metadata, Viewport } from "next"
import { Kalam, Mukta, Rozha_One } from "next/font/google"
import Header from "@/components/site/header"
import Footer from "@/components/site/footer"
import Chatbot from "@/components/site/chatbot"
import Intro from "@/components/site/intro"
import { org } from "@/lib/site"
import "./globals.css"

const display = Rozha_One({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" })
const sans = Mukta({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
})
const hand = Kalam({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-hand", display: "swap" })

export const metadata: Metadata = {
  title: { default: `${org.name} | ${org.tagline}`, template: `%s | ${org.name}` },
  description: `${org.name}, ${org.place}. ${org.intro}`,
  icons: { icon: "/images/aws-logo.png", apple: "/images/aws-logo.png" },
  openGraph: {
    title: org.name,
    description: org.intro,
    images: ["/images/tribal-pattern.jpeg"],
    type: "website",
    locale: "en_IN",
  },
}

export const viewport: Viewport = { themeColor: "#2B1B12", viewportFit: "cover" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${hand.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-soil focus:px-4 focus:py-2 focus:text-rice"
        >
          Skip to content
        </a>
        <Intro />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}
