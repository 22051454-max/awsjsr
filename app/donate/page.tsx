"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, Users, GraduationCap, Building, CreditCard, Smartphone, Banknote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import AnimatedBackground from "@/components/animated-background"

export default function DonatePage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")

  const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000]

  const impactAreas = [
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Support skill development programs and educational initiatives",
      impact: "₹1000 can train 1 person for a month",
      image: "/images/gallery/computer-education.jpeg",
    },
    {
      icon: Heart,
      title: "Healthcare Services",
      description: "Provide medical care and health camps for tribal communities",
      impact: "₹2500 can organize a health camp for 50 people",
      image: "/images/gallery/health-camp.jpeg",
    },
    {
      icon: Users,
      title: "Employment Generation",
      description: "Create sustainable job opportunities for tribal families",
      impact: "₹5000 can support job placement for 5 individuals",
      image: "/images/gallery/women-employment.jpeg",
    },
    {
      icon: Building,
      title: "Infrastructure Development",
      description: "Build facilities and infrastructure for community development",
      impact: "₹10000 can contribute to building community centers",
      image: "/images/gallery/infrastructure-equipment.jpeg",
    },
  ]

  const paymentMethods = [
    { icon: CreditCard, name: "Credit/Debit Card", description: "Secure online payment" },
    { icon: Smartphone, name: "UPI Payment", description: "Pay using UPI apps" },
    { icon: Banknote, name: "Bank Transfer", description: "Direct bank transfer" },
  ]

  const handleDonate = () => {
    const amount = selectedAmount || Number.parseInt(customAmount)
    if (amount && amount > 0) {
      // Here you would integrate with Razorpay or other payment gateway
      alert(`Thank you for your generous donation of ₹${amount}! Payment integration will be implemented.`)
    } else {
      alert("Please select or enter a valid donation amount.")
    }
  }

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />

      {/* Header */}
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
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Donate Now</h1>
            <div className="w-24 h-1 bg-[#E96424] mx-auto mb-8" />
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed font-semibold">
              Your contribution can transform lives and empower tribal communities. Every donation makes a difference in
              building a sustainable future.
            </p>
          </motion.div>

          {/* Impact Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-16"
            ref={ref}
          >
            <h2 className="text-3xl font-black text-white mb-12 text-center">Where Your Donation Goes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {impactAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-[#C98C32]/50 hover:border-[#E96424] transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image src={area.image || "/placeholder.svg"} alt={area.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4B3B30]/80 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <area.icon className="w-10 h-10 text-[#E96424]" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                    <p className="text-white mb-4 font-medium">{area.description}</p>
                    <div className="bg-[#E96424]/20 rounded-lg p-3">
                      <p className="text-[#F4A300] font-bold text-sm">{area.impact}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-2xl mx-auto mb-16"
          >
            <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#C98C32]/50">
              <h3 className="text-2xl font-black text-white mb-8 text-center">Make a Donation</h3>

              {/* Amount Selection */}
              <div className="mb-8">
                <h4 className="text-white font-bold mb-4">Select Amount (₹)</h4>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount)
                        setCustomAmount("")
                      }}
                      className={`p-3 rounded-lg border-2 transition-all duration-300 font-bold ${
                        selectedAmount === amount
                          ? "border-[#E96424] bg-[#E96424]/20 text-[#F4A300]"
                          : "border-[#C98C32]/50 text-white hover:border-[#E96424]/50"
                      }`}
                    >
                      ₹{amount.toLocaleString()}
                    </button>
                  ))}
                </div>

                <div>
                  <label htmlFor="customAmount" className="block text-white font-bold mb-2">
                    Or enter custom amount
                  </label>
                  <Input
                    id="customAmount"
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setSelectedAmount(null)
                    }}
                    placeholder="Enter amount in ₹"
                    className="bg-[#4B3B30]/50 border-[#C98C32]/50 text-white placeholder-[#C2A87E]/60 focus:border-[#E96424]"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-8">
                <h4 className="text-white font-bold mb-4">Payment Methods</h4>
                <div className="grid gap-3">
                  {paymentMethods.map((method, index) => (
                    <div
                      key={method.name}
                      className="flex items-center p-4 bg-[#4B3B30]/30 rounded-lg border border-[#C98C32]/30 hover:border-[#E96424]/50 transition-all duration-300"
                    >
                      <method.icon className="w-6 h-6 text-[#E96424] mr-4" />
                      <div>
                        <h5 className="text-white font-bold">{method.name}</h5>
                        <p className="text-[#C2A87E] text-sm">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Donate Button */}
              <Button
                onClick={handleDonate}
                className="w-full bg-gradient-to-r from-[#E96424] to-[#F4A300] hover:from-[#F4A300] hover:to-[#E96424] text-white font-bold py-4 rounded-full text-lg shadow-lg"
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate{" "}
                {selectedAmount
                  ? `₹${selectedAmount.toLocaleString()}`
                  : customAmount
                    ? `₹${Number.parseInt(customAmount).toLocaleString()}`
                    : "Now"}
              </Button>
            </div>
          </motion.div>

          {/* Tax Benefits & Trust Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#C98C32]/50">
              <h3 className="text-2xl font-black text-white mb-6">Tax Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#E96424] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <p className="text-white font-medium">Donations are eligible for tax deduction under Section 80G</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#E96424] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <p className="text-white font-medium">Official receipt will be provided for all donations</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#E96424] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <p className="text-white font-medium">100% of your donation goes directly to community programs</p>
                </div>
              </div>
            </div>

            <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#C98C32]/50">
              <h3 className="text-2xl font-black text-white mb-6">Other Ways to Help</h3>
              <div className="space-y-4">
                <Link
                  href="/our-work"
                  className="block p-3 bg-[#E96424]/10 rounded-lg hover:bg-[#E96424]/20 transition-colors"
                >
                  <h4 className="text-[#F4A300] font-bold mb-1">Volunteer with Us</h4>
                  <p className="text-white text-sm">Join our programs and make a direct impact</p>
                </Link>
                <Link
                  href="/customers"
                  className="block p-3 bg-[#E96424]/10 rounded-lg hover:bg-[#E96424]/20 transition-colors"
                >
                  <h4 className="text-[#F4A300] font-bold mb-1">Corporate Partnership</h4>
                  <p className="text-white text-sm">Partner with us for CSR initiatives</p>
                </Link>
                <Link
                  href="/contact"
                  className="block p-3 bg-[#E96424]/10 rounded-lg hover:bg-[#E96424]/20 transition-colors"
                >
                  <h4 className="text-[#F4A300] font-bold mb-1">Spread Awareness</h4>
                  <p className="text-white text-sm">Help us reach more people in need</p>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
