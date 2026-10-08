"use client"

import { useState } from "react"
import { HandHeart, Mail, Phone } from "lucide-react"
import { donationAmounts, org, telHref } from "@/lib/site"
import { cn } from "@/lib/utils"

/**
 * Online payments are not set up yet, so a pledge goes to the society by email
 * and they reply with bank/UPI details and the 80G receipt.
 */
export default function DonatePicker() {
  const [preset, setPreset] = useState<number | null>(1000)
  const [custom, setCustom] = useState("")
  const amount = custom ? Number.parseInt(custom, 10) : preset
  const valid = !!amount && amount > 0

  const pledge = () => {
    if (!valid) return
    const subject = `Donation pledge: ₹${amount!.toLocaleString("en-IN")}`
    const body = `Hello ${org.name},\n\nI would like to donate ₹${amount!.toLocaleString("en-IN")}. Please share the payment details (bank transfer / UPI) and the 80G receipt process.\n\nName:\nPhone:\nPAN (for 80G receipt):\n\nThank you.`
    window.location.href = `mailto:${org.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-widest text-soil/60">Choose an amount</p>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {donationAmounts.map((a) => (
          <button
            key={a}
            type="button"
            aria-pressed={!custom && preset === a}
            onClick={() => {
              setPreset(a)
              setCustom("")
            }}
            className={cn(
              "rounded-2xl border-2 py-4 font-display text-xl transition",
              !custom && preset === a
                ? "border-sindoor bg-sindoor text-rice shadow-[0_4px_0_#7a2e18]"
                : "border-clay-dark bg-rice text-soil hover:border-sindoor",
            )}
          >
            ₹{a.toLocaleString("en-IN")}
          </button>
        ))}
      </div>
      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-bold text-soil">Or enter your own amount</span>
        <span className="relative block">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-soil/50">₹</span>
          <input
            type="number"
            min={1}
            inputMode="numeric"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            className="field pl-9"
            placeholder="Any amount"
          />
        </span>
      </label>
      <button type="button" onClick={pledge} disabled={!valid} className="btn-primary mt-6 w-full py-4 text-base">
        <HandHeart className="h-5 w-5" /> Pledge {valid ? `₹${amount!.toLocaleString("en-IN")}` : ""}
      </button>
      <p className="mt-3 text-center text-sm text-soil/60">
        This emails your pledge to us. We reply with bank or UPI details and your 80G receipt.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <a href={telHref(org.phones[0])} className="btn-ghost text-soil">
          <Phone className="h-4 w-4" /> Call to donate
        </a>
        <a
          href={`mailto:${org.email}?subject=${encodeURIComponent("Donation enquiry")}`}
          className="btn-ghost text-soil"
        >
          <Mail className="h-4 w-4" /> Email us
        </a>
      </div>
    </div>
  )
}
