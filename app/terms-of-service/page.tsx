"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, FileText, Scale, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/animated-background"

export default function TermsOfServicePage() {
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
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Terms of Service</h1>
              <div className="w-24 h-1 bg-[#E96424] mx-auto mb-6" />
              <p className="text-white text-lg">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#C98C32]/50 space-y-8">
              <div className="flex items-center mb-6">
                <Scale className="w-8 h-8 text-[#E96424] mr-3" />
                <h2 className="text-2xl font-bold text-white">Terms and Conditions</h2>
              </div>

              <div className="space-y-6 text-white">
                <p className="leading-relaxed">
                  By accessing and using the Adibasi Welfare Society website, you accept and agree to be bound by the
                  terms and provision of this agreement.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#F4A300] flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Acceptable Use
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Use the website for lawful purposes only</li>
                    <li>Respect intellectual property rights</li>
                    <li>Do not attempt to harm or disrupt our services</li>
                    <li>Provide accurate information when making donations</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#F4A300] flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Donations and Payments
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>All donations are voluntary and non-refundable</li>
                    <li>Tax receipts will be provided as per applicable laws</li>
                    <li>Payment information is processed securely</li>
                    <li>We reserve the right to refuse donations in certain circumstances</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#F4A300] flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Limitation of Liability
                  </h3>
                  <p className="leading-relaxed">
                    Adibasi Welfare Society shall not be liable for any indirect, incidental, special, consequential, or
                    punitive damages resulting from your use of our website or services.
                  </p>
                </div>

                <div className="bg-[#E96424]/10 rounded-lg p-4 border border-[#E96424]/30">
                  <p className="text-sm">
                    <strong>Questions:</strong> For any questions regarding these terms, please contact us at{" "}
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
