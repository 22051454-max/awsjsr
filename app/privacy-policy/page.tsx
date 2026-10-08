import type { Metadata } from "next"
import LegalPage from "@/components/site/legal-page"

export const metadata: Metadata = { title: "Privacy Policy" }

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="8 October 2026"
      intro="Adibasi Welfare Society is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or interact with our services."
      sections={[
        {
          heading: "Information We Collect",
          points: [
            "Contact information (name, email, phone number)",
            "Donation and payment information",
            "Website usage data and analytics",
            "Communication preferences",
          ],
        },
        {
          heading: "How We Use Your Information",
          points: [
            "To provide and improve our services",
            "To process donations and send receipts",
            "To communicate about our programs and initiatives",
            "To comply with legal requirements",
          ],
        },
        {
          heading: "Data Security",
          text: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All payment information is processed through secure, encrypted channels.",
        },
      ]}
    />
  )
}
