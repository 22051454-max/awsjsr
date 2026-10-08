// A small, offline question answerer for the site chatbot. It matches what the
// visitor types against topics built from the site's own content, so it needs
// no server or API key. Keywords include common Hindi words typed in English.

import { donationNotes, impactAreas, milestones, mission, org, partners, services, vision } from "@/lib/site"

export type ChatOption = { label: string; action: string }
export type ChatReply = { text: string; options?: ChatOption[] }

const home: ChatOption = { label: "Main menu", action: "main_menu" }
const go = (label: string, path: string): ChatOption => ({ label, action: `go:${path}` })
const service = (slug: string) => services.find((s) => s.slug === slug)!
const serviceText = (slug: string, emoji: string) => {
  const s = service(slug)
  return `${emoji} ${s.title}: ${s.description}\n\n${s.achievements.map((a) => `• ${a}`).join("\n")}`
}

type Topic = { id: string; keywords: string[]; reply: () => ChatReply }

export const mainMenu: ChatOption[] = [
  { label: "About us", action: "about" },
  { label: "What we do", action: "services" },
  { label: "Donate", action: "donate" },
  { label: "Contact details", action: "contact" },
  { label: "Jobs & training", action: "jobs" },
]

const topics: Topic[] = [
  {
    id: "greet",
    keywords: ["hi", "hello", "hey", "namaste", "johar", "namaskar", "good morning", "good evening", "pranam"],
    reply: () => ({
      text: `🙏 Johar! I'm the ${org.name} assistant. Ask me anything, or pick a topic.`,
      options: mainMenu,
    }),
  },
  {
    id: "thanks",
    keywords: ["thank", "thanks", "dhanyavad", "dhanyawad", "shukriya", "great", "nice", "awesome"],
    reply: () => ({ text: "🙏 Thank you! Is there anything else I can help you with?", options: mainMenu }),
  },
  {
    id: "bye",
    keywords: ["bye", "goodbye", "see you", "alvida"],
    reply: () => ({ text: `🌿 Johar! Thank you for visiting ${org.name}. Come back anytime.` }),
  },
  {
    id: "about",
    keywords: [
      "about",
      "who are you",
      "society",
      "organisation",
      "organization",
      "ngo",
      "history",
      "founded",
      "started",
      "established",
      "kab",
      "kaun",
      "story",
      "aws",
    ],
    reply: () => ({
      text: `🌿 ${org.name} was founded in ${org.founded} in ${org.place} to empower tribal communities in Jharkhand. For 25+ years we have served 1000+ families across 50+ villages through employment, skills, health and education.`,
      options: [go("Read our story", "/about"), { label: "Our journey", action: "journey" }, home],
    }),
  },
  {
    id: "journey",
    keywords: ["journey", "milestone", "timeline", "year", "1998", "2005", "2010", "2015", "2020", "2024"],
    reply: () => ({
      text: "📜 Our journey:\n\n" + milestones.map((m) => `${m.year}: ${m.title}`).join("\n"),
      options: [go("About us", "/about"), home],
    }),
  },
  {
    id: "vision",
    keywords: ["vision", "mission", "goal", "aim", "purpose", "uddeshya", "lakshya"],
    reply: () => ({
      text: `🌄 Our vision: ${vision}\n\n🎯 Our mission: ${mission}`,
      options: [go("About us", "/about"), home],
    }),
  },
  {
    id: "services",
    keywords: [
      "services",
      "what do you do",
      "work",
      "programs",
      "programmes",
      "activities",
      "kaam",
      "seva",
      "help community",
    ],
    reply: () => ({
      text: "🌾 Our work:\n\n" + services.map((s) => `• ${s.title}`).join("\n") + "\n\nAsk me about any of these.",
      options: [go("See our work", "/our-work"), { label: "Jobs & training", action: "jobs" }, home],
    }),
  },
  {
    id: "jobs",
    keywords: [
      "job",
      "jobs",
      "employment",
      "naukri",
      "rojgar",
      "vacancy",
      "hiring",
      "work for",
      "apply",
      "career",
      "salary",
      "kaam chahiye",
    ],
    reply: () => ({
      text:
        serviceText("employment", "💼") +
        `\n\nLooking for work? Call ${org.phones[0]} or email ${org.email} with your name, village and skills.`,
      options: [go("Contact us", "/contact"), { label: "Training", action: "training" }, home],
    }),
  },
  {
    id: "training",
    keywords: [
      "training",
      "skill",
      "skills",
      "course",
      "tailoring",
      "sewing",
      "silai",
      "dress making",
      "computer",
      "learn",
      "prashikshan",
      "vocational",
    ],
    reply: () => ({
      text: serviceText("training", "🧵"),
      options: [go("See our work", "/our-work#training"), go("Join a program", "/contact"), home],
    }),
  },
  {
    id: "health",
    keywords: [
      "health",
      "camp",
      "doctor",
      "medical",
      "checkup",
      "hospital",
      "medicine",
      "swasthya",
      "ilaj",
      "education",
      "school",
      "padhai",
      "literacy",
      "shiksha",
    ],
    reply: () => ({
      text: serviceText("health-education", "🩺"),
      options: [go("See our work", "/our-work#health-education"), home],
    }),
  },
  {
    id: "transport",
    keywords: ["bus", "buses", "transport", "transportation", "travel", "gaadi", "vehicle", "route"],
    reply: () => ({ text: serviceText("transport", "🚌"), options: [go("See our work", "/our-work#transport"), home] }),
  },
  {
    id: "material",
    keywords: ["material", "handling", "logistics", "loading", "equipment", "warehouse"],
    reply: () => ({
      text: serviceText("material-handling", "🏗️"),
      options: [go("See our work", "/our-work#material-handling"), home],
    }),
  },
  {
    id: "cleaning",
    keywords: ["cleaning", "clean", "housekeeping", "safai", "hygiene"],
    reply: () => ({ text: serviceText("cleaning", "✨"), options: [go("See our work", "/our-work#cleaning"), home] }),
  },
  {
    id: "donate",
    keywords: [
      "donate",
      "donation",
      "daan",
      "give",
      "contribute",
      "fund",
      "money",
      "support",
      "chanda",
      "sahayata",
      "upi",
      "bank",
      "pay",
      "payment",
    ],
    reply: () => ({
      text:
        "💛 Thank you for wanting to help! Choose an amount on our Donate page and we'll email you bank or UPI details with an official receipt.\n\n" +
        donationNotes.map((n) => `• ${n}`).join("\n"),
      options: [go("Donate now", "/donate"), { label: "Where it goes", action: "impact" }, home],
    }),
  },
  {
    id: "tax",
    keywords: ["80g", "tax", "receipt", "exemption", "deduction", "certificate", "pan"],
    reply: () => ({
      text: "🧾 Donations are eligible for tax deduction under Section 80G, and we give an official receipt for every donation. Please share your PAN with your pledge so we can issue it.",
      options: [go("Donate now", "/donate"), home],
    }),
  },
  {
    id: "impact",
    keywords: ["impact", "where money", "use of", "how much", "kitna", "1000", "2500", "5000", "10000"],
    reply: () => ({
      text: "🌟 Your gift at work:\n\n" + impactAreas.map((a) => `• ${a.impact}`).join("\n"),
      options: [go("Donate now", "/donate"), home],
    }),
  },
  {
    id: "volunteer",
    keywords: ["volunteer", "intern", "internship", "join", "help out", "sevak", "get involved"],
    reply: () => ({
      text: `🤝 We'd love your help! Volunteers join our programs in training, health camps and education. Write to ${org.email} or call ${org.phones[0]} and tell us how you'd like to help.`,
      options: [go("Contact us", "/contact"), home],
    }),
  },
  {
    id: "partners",
    keywords: [
      "partner",
      "partners",
      "partnership",
      "csr",
      "tata",
      "jusco",
      "company",
      "companies",
      "client",
      "corporate",
      "steel",
      "motors",
      "power",
    ],
    reply: () => ({
      text:
        "🏭 We work with:\n\n" +
        partners.map((p) => `• ${p.name} (since ${p.since})`).join("\n") +
        "\n\nInterested in a CSR partnership? Get in touch.",
      options: [go("Our partners", "/customers"), go("Partner with us", "/contact"), home],
    }),
  },
  {
    id: "contact",
    keywords: ["contact", "phone", "call", "number", "mobile", "email", "mail", "reach", "sampark", "baat", "whatsapp"],
    reply: () => ({
      text: `📞 ${org.phones.join(" / ")}\n✉️ ${org.email}\n📍 ${org.address.join(", ")}`,
      options: [go("Send a message", "/contact"), { label: "Office hours", action: "hours" }, home],
    }),
  },
  {
    id: "location",
    keywords: [
      "address",
      "where",
      "location",
      "located",
      "map",
      "direction",
      "kahan",
      "office",
      "ghorabandha",
      "jamshedpur",
    ],
    reply: () => ({ text: `📍 ${org.address.join(", ")}.`, options: [go("Map & directions", "/contact"), home] }),
  },
  {
    id: "hours",
    keywords: ["hours", "timing", "time", "open", "close", "closed", "sunday", "saturday", "samay"],
    reply: () => ({
      text: `🕒 ${org.hours.join("\n🕒 ")}\nSunday: closed`,
      options: [{ label: "Contact details", action: "contact" }, home],
    }),
  },
  {
    id: "gallery",
    keywords: ["photo", "photos", "picture", "gallery", "images", "video"],
    reply: () => ({
      text: "📸 See our training, health camps, buses and teams at work in the photo gallery.",
      options: [go("Open gallery", "/gallery"), home],
    }),
  },
  {
    id: "numbers",
    keywords: ["families", "villages", "people", "employees", "stats", "numbers", "achievement", "awards", "turnover"],
    reply: () => ({
      text: "📊 At a glance:\n\n• 1000+ families supported\n• 50+ villages reached\n• 500+ people employed\n• 25+ years of service\n• 15+ awards received",
      options: [go("About us", "/about"), home],
    }),
  },
  {
    id: "privacy",
    keywords: ["privacy", "data", "terms", "policy", "refund"],
    reply: () => ({
      text: "🔒 You can read our Privacy Policy and Terms of Service anytime.",
      options: [go("Privacy Policy", "/privacy-policy"), go("Terms", "/terms-of-service"), home],
    }),
  },
]

const byId = Object.fromEntries(topics.map((t) => [t.id, t]))

export const menuReply = (): ChatReply => ({ text: "🏡 How else can I help you?", options: mainMenu })

/** Reply for a quick-reply chip. */
export function replyFor(action: string): ChatReply | null {
  if (action === "main_menu") return menuReply()
  return byId[action]?.reply() ?? null
}

/** Best answer for free text, or a friendly fallback with the contact details. */
export function answer(input: string): ChatReply {
  const text = ` ${input
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")} `
  let best: Topic | null = null
  let bestScore = 0
  for (const t of topics) {
    let score = 0
    for (const k of t.keywords) {
      // whole word or phrase match; longer phrases count more
      if (text.includes(` ${k} `) || (k.length > 4 && text.includes(k))) score += k.includes(" ") ? 2 : 1
    }
    // on a tie the later, more specific topic wins (e.g. "donation tax" -> 80G)
    if (score > 0 && score >= bestScore) {
      best = t
      bestScore = score
    }
  }
  if (best) return best.reply()
  return {
    text: `🤔 I'm not sure about that one. Our team will gladly help: call ${org.phones[0]} or email ${org.email}.`,
    options: [{ label: "Email this question", action: `mail:${encodeURIComponent(input)}` }, ...mainMenu.slice(0, 3)],
  }
}
