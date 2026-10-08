"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { MessageCircle, Send, X } from "lucide-react"
import { SohraiBand } from "@/components/motifs"
import { org } from "@/lib/site"

type Option = { label: string; action: string }
type Message = { id: number; text: string; fromBot: boolean; options?: Option[] }

const mainMenu: Option[] = [
  { label: "About us", action: "about" },
  { label: "What we do", action: "services" },
  { label: "Donate", action: "donate" },
  { label: "Contact details", action: "contact" },
  { label: "Ask something else", action: "other" },
]
const back: Option = { label: "Main menu", action: "main_menu" }

const replies: Record<string, { text: string; options: Option[] }> = {
  about: {
    text: `🌿 ${org.name} was founded in ${org.founded} to empower tribal communities in Jharkhand. For 25+ years we have bridged tradition and progress, serving 1000+ families across 50+ villages.`,
    options: [{ label: "Read our story", action: "go:/about" }, { label: "What we do", action: "services" }, back],
  },
  services: {
    text: "🌾 Our work includes:\n\n• Employment generation (500+ jobs)\n• Skill development & training\n• Healthcare & health camps\n• Transport services (20+ buses)\n• Material handling & industrial cleaning\n• Education & digital literacy",
    options: [{ label: "See our work", action: "go:/our-work" }, { label: "Our partners", action: "partners" }, back],
  },
  donate: {
    text: "💛 Every gift supports education, healthcare, employment and village infrastructure. Donations are eligible for tax deduction under Section 80G, with an official receipt.",
    options: [{ label: "Donate now", action: "go:/donate" }, { label: "Where it goes", action: "impact" }, back],
  },
  impact: {
    text: "🌟 Your gift at work:\n\n₹1000 trains 1 person for a month\n₹2500 runs a health camp for 50 people\n₹5000 supports job placement for 5 people\n₹10000 helps build community centers",
    options: [{ label: "Donate now", action: "go:/donate" }, back],
  },
  partners: {
    text: "🤝 We work with Tata Steel, JUSCO, Tata Power and Tata Motors to create steady employment for tribal communities.",
    options: [
      { label: "Meet our partners", action: "go:/customers" },
      { label: "Partner with us", action: "go:/contact" },
      back,
    ],
  },
  contact: {
    text: `📍 ${org.address.join(", ")}\n📞 ${org.phones.join(" / ")}\n✉️ ${org.email}\n\n🕒 ${org.hours.join("\n🕒 ")}`,
    options: [{ label: "Send us a message", action: "go:/contact" }, back],
  },
  main_menu: { text: "🏡 How else can I help you?", options: mainMenu },
}

export default function Chatbot() {
  const router = useRouter()
  const nextId = useRef(2)
  const listRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [askFree, setAskFree] = useState(false)
  const [draft, setDraft] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: `🙏 Johar! Welcome to ${org.name}. How can I help you today?`,
      fromBot: true,
      options: mainMenu,
    },
  ])

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, open])

  const push = (...msgs: Omit<Message, "id">[]) =>
    setMessages((prev) => [...prev, ...msgs.map((m) => ({ ...m, id: nextId.current++ }))])

  const choose = (opt: Option) => {
    push({ text: opt.label, fromBot: false })
    if (opt.action.startsWith("go:")) {
      setOpen(false)
      router.push(opt.action.slice(3))
      return
    }
    if (opt.action === "other") {
      setAskFree(true)
      push({ text: "💬 Type your question below and we'll point you to the right person.", fromBot: true })
      return
    }
    const r = replies[opt.action]
    if (r) push({ text: r.text, fromBot: true, options: r.options })
  }

  const send = (e: React.FormEvent) => {
    e.preventDefault()
    const text = draft.trim()
    if (!text) return
    setDraft("")
    push({ text, fromBot: false })
    const subject = encodeURIComponent("Question from website")
    const body = encodeURIComponent(text)
    setTimeout(
      () =>
        push({
          text: `🙏 Thank you! Our team answers personally. Call ${org.phones[0]} or email ${org.email}, and we'll get back to you.`,
          fromBot: true,
          options: [{ label: "Email this question", action: `mail:${subject}|${body}` }, back],
        }),
      500,
    )
  }

  const handle = (opt: Option) => {
    if (opt.action.startsWith("mail:")) {
      const [subject, body] = opt.action.slice(5).split("|")
      window.location.href = `mailto:${org.email}?subject=${subject}&body=${body}`
      return
    }
    choose(opt)
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-5 right-5 z-50 grid h-16 w-16 place-items-center rounded-full bg-sindoor text-rice shadow-[0_6px_0_#7a2e18,0_14px_30px_-6px_rgba(43,27,18,.6)] ring-4 ring-rice"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
        {!open && (
          <span className="absolute right-1 top-1 h-3.5 w-3.5 animate-pulse rounded-full bg-haldi ring-2 ring-rice" />
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.section
            aria-label="Chat assistant"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-4 z-50 flex h-[min(540px,calc(100dvh-8rem))] w-[calc(100vw-2rem)] max-w-sm origin-bottom-right flex-col overflow-hidden rounded-3xl border-2 border-soil/10 bg-rice shadow-2xl"
          >
            <div className="mud-wall flex items-center gap-3 px-4 py-3.5">
              <Image
                src="/images/aws-logo.png"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-full bg-rice"
              />
              <div>
                <p className="font-display text-lg leading-none">AWS Sahayak</p>
                <p className="mt-1 text-xs text-rice/70">Here to help</p>
              </div>
            </div>
            <SohraiBand className="h-2 text-laterite" />

            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-clay/50 p-4">
              {messages.map((m) => (
                <div key={m.id} className={m.fromBot ? "pr-6" : "flex justify-end pl-10"}>
                  <p
                    className={
                      m.fromBot
                        ? "whitespace-pre-line rounded-2xl rounded-tl-sm bg-rice px-4 py-3 text-sm leading-relaxed text-soil shadow-sm"
                        : "rounded-2xl rounded-tr-sm bg-forest px-4 py-2.5 text-sm text-rice"
                    }
                  >
                    {m.text}
                  </p>
                  {m.options && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {m.options.map((o) => (
                        <button
                          key={o.action}
                          type="button"
                          onClick={() => handle(o)}
                          className="rounded-full border-2 border-sindoor/30 bg-rice px-3 py-1.5 text-xs font-bold text-sindoor transition hover:border-sindoor hover:bg-sindoor hover:text-rice"
                        >
                          {o.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {askFree && (
              <form onSubmit={send} className="flex gap-2 border-t border-clay-dark bg-rice p-3">
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Type your question..."
                  aria-label="Your question"
                  className="field py-2 text-sm"
                />
                <button
                  type="submit"
                  aria-label="Send"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sindoor text-rice"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}
