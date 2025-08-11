"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Shield, Eye, Lock, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/animated-background"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />

      <div className="relative z-10 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:text-[#F4A300] mr-4">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Privacy Policy</h1>
              <div className="w-24 h-1 bg-[#E96424] mx-auto mb-6" />
              <p className="text-white text-lg">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#C98C32]/50 space-y-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-[#E96424] mr-3" />
                <h2 className="text-2xl font-bold text-white">Our Commitment to Privacy</h2>
              </div>

              <div className="space-y-6 text-white">
                <p className="leading-relaxed">
                  Adibasi Welfare Society is committed to protecting your privacy and ensuring the security of your
                  personal information. This Privacy Policy explains how we collect, use, and safeguard your information
                  when you visit our website or interact with our services.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#F4A300] flex items-center">
                    <Eye className="w-5 h-5 mr-2" />
                    Information We Collect
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Contact information (name, email, phone number)</li>
                    <li>Donation and payment information</li>
                    <li>Website usage data and analytics</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#F4A300] flex items-center">
                    <UserCheck className="w-5 h-5 mr-2" />
                    How We Use Your Information
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>To provide and improve our services</li>
                    <li>To process donations and send receipts</li>
                    <li>To communicate about our programs and initiatives</li>
                    <li>To comply with legal requirements</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#F4A300] flex items-center">
                    <Lock className="w-5 h-5 mr-2" />
                    Data Security
                  </h3>
                  <p className="leading-relaxed">
                    We implement appropriate security measures to protect your personal information against unauthorized
                    access, alteration, disclosure, or destruction. All payment information is processed through secure,
                    encrypted channels.
                  </p>
                </div>

                <div className="bg-[#E96424]/10 rounded-lg p-4 border border-[#E96424]/30">
                  <p className="text-sm">
                    <strong>Contact Us:</strong> If you have any questions about this Privacy Policy, please contact us
                    at{" "}
                    <a href="mailto:adibasi.jsr@gmail.com" className="text-[#F4A300] hover:underline">
                      adibasi.jsr@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
