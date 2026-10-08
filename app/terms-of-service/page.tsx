import type { Metadata } from "next"
import LegalPage from "@/components/site/legal-page"

export const metadata: Metadata = { title: "Terms of Service" }

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="8 October 2026"
      intro="By accessing and using the Adibasi Welfare Society website, you accept and agree to be bound by the terms and provision of this agreement."
      sections={[
        {
          heading: "Acceptable Use",
          points: [
            "Use the website for lawful purposes only",
            "Respect intellectual property rights",
            "Do not attempt to harm or disrupt our services",
            "Provide accurate information when making donations",
          ],
        },
        {
          heading: "Donations and Payments",
          points: [
            "All donations are voluntary and non-refundable",
            "Tax receipts will be provided as per applicable laws",
            "Payment information is processed securely",
            "We reserve the right to refuse donations in certain circumstances",
          ],
        },
        {
          heading: "Limitation of Liability",
          text: "Adibasi Welfare Society shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our website or services.",
        },
      ]}
    />
  )
}
