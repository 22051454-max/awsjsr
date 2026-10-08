"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { MessageCircle, Send, X } from "lucide-react"
import { SohraiBand } from "@/components/motifs"
import { answer, mainMenu, replyFor, type ChatOption, type ChatReply } from "@/lib/chat-brain"
import { org } from "@/lib/site"

type Message = { id: number; text: string; fromBot: boolean; options?: ChatOption[] }

export default function Chatbot() {
  const router = useRouter()
  const nextId = useRef(2)
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)
  const [typing, setTyping] = useState(false)
  const [draft, setDraft] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: `🙏 Johar! Welcome to ${org.name}. Ask me anything, like "how can I donate?" or "do you have jobs?", or pick a topic.`,
      fromBot: true,
      options: mainMenu,
    },
  ])

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, typing, open])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const push = (m: Omit<Message, "id">) => setMessages((prev) => [...prev, { ...m, id: nextId.current++ }])

  const botSays = (reply: ChatReply) => {
    setTyping(true)
    setTimeout(
      () => {
        setTyping(false)
        push({ ...reply, fromBot: true })
      },
      450 + Math.min(900, reply.text.length * 4),
    )
  }

  const choose = (opt: ChatOption) => {
    if (opt.action.startsWith("go:")) {
      setOpen(false)
      router.push(opt.action.slice(3))
      return
    }
    if (opt.action.startsWith("mail:")) {
      const body = decodeURIComponent(opt.action.slice(5))
      window.location.href = `mailto:${org.email}?subject=${encodeURIComponent("Question from website")}&body=${encodeURIComponent(body)}`
      return
    }
    push({ text: opt.label, fromBot: false })
    const r = replyFor(opt.action)
    if (r) botSays(r)
  }

  const send = (e: React.FormEvent) => {
    e.preventDefault()
    const text = draft.trim()
    if (!text || typing) return
    setDraft("")
    push({ text, fromBot: false })
    botSays(answer(text))
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
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-50 grid h-14 w-14 place-items-center sm:bottom-5 sm:right-5 sm:h-16 sm:w-16 rounded-full bg-sindoor text-rice shadow-[0_6px_0_#7a2e18,0_14px_30px_-6px_rgba(43,27,18,.6)] ring-4 ring-rice"
      >
        {!open && (
          <span className="absolute inset-0 animate-ping rounded-full bg-sindoor/40 [animation-duration:2.5s]" />
        )}
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="relative h-6 w-6 sm:h-7 sm:w-7" />}
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
            className="fixed bottom-[calc(max(1rem,env(safe-area-inset-bottom))+4.25rem)] right-4 z-50 flex h-[min(560px,calc(100dvh-7rem))] w-[calc(100vw-2rem)] sm:bottom-24 sm:h-[min(560px,calc(100dvh-8rem))] max-w-sm origin-bottom-right flex-col overflow-hidden rounded-3xl border-2 border-soil/10 bg-rice shadow-2xl"
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
                <p className="mt-1 flex items-center gap-1.5 text-xs text-rice/70">
                  <span className="h-2 w-2 rounded-full bg-green-400" /> Online, ask me anything
                </p>
              </div>
            </div>
            <SohraiBand className="h-2 text-laterite" />

            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-clay/50 p-4" aria-live="polite">
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={m.fromBot ? "pr-6" : "flex justify-end pl-10"}
                >
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
                          onClick={() => choose(o)}
                          className="rounded-full border-2 border-sindoor/30 bg-rice px-3 py-2 text-xs font-bold text-sindoor transition hover:border-sindoor hover:bg-sindoor hover:text-rice"
                        >
                          {o.label}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              {typing && (
                <div
                  className="flex w-16 items-center justify-center gap-1 rounded-2xl rounded-tl-sm bg-rice py-3 shadow-sm"
                  aria-label="Typing"
                >
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="h-2 w-2 animate-bounce rounded-full bg-sindoor/70"
                      style={{ animationDelay: `${d * 0.15}s` }}
                    />
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={send} className="flex gap-2 border-t border-clay-dark bg-rice p-3">
              <input
                ref={inputRef}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Type your question..."
                aria-label="Your question"
                className="field py-2 text-base"
              />
              <button
                type="submit"
                aria-label="Send"
                disabled={!draft.trim()}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sindoor text-rice transition disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}
