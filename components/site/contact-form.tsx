"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { org } from "@/lib/site"

const empty = { name: "", email: "", phone: "", subject: "", message: "" }

/**
 * The site has no backend yet, so the form hands the message to the visitor's
 * email app, addressed to the society, instead of silently dropping it.
 */
export default function ContactForm() {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = form.subject || `Message from ${form.name}`
    const body = [
      form.message,
      "",
      "---",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
    ]
      .filter((l) => l !== "")
      .join("\n")
    window.location.href = `mailto:${org.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-soil">Full name *</span>
          <input
            name="name"
            required
            value={form.name}
            onChange={set}
            autoComplete="name"
            className="field"
            placeholder="Your full name"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-soil">Phone</span>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={set}
            autoComplete="tel"
            className="field"
            placeholder="+91"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-sm font-bold text-soil">Email *</span>
        <input
          name="email"
          type="email"
          required
          value={form.email}
          onChange={set}
          autoComplete="email"
          className="field"
          placeholder="you@example.com"
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-bold text-soil">Subject</span>
        <select name="subject" value={form.subject} onChange={set} className="field">
          <option value="">General inquiry</option>
          <option>Employment services</option>
          <option>Training programs</option>
          <option>Partnership / CSR</option>
          <option>Donation</option>
          <option>Volunteering</option>
        </select>
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-bold text-soil">Message *</span>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={set}
          className="field resize-none"
          placeholder="Tell us how we can help, or how you'd like to contribute..."
        />
      </label>
      <button type="submit" className="btn-primary w-full py-4 text-base">
        <Send className="h-4 w-4" /> Send Message
      </button>
      <p className="text-center text-sm text-soil/60" aria-live="polite">
        {sent
          ? `Your email app should now be open with the message ready. If not, write to ${org.email} or call ${org.phones[0]}.`
          : "This opens your email app with the message ready to send."}
      </p>
    </form>
  )
}
