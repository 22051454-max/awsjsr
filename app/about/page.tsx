"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Target, Eye, Award, Building, TrendingUp, Shield, Leaf, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/animated-background"

export default function AboutPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { icon: Building, label: "Infrastructure Projects", value: "50+" },
    { icon: TrendingUp, label: "Annual Turnover", value: "₹10Cr+" },
    { icon: Users, label: "Employees", value: "500+" },
    { icon: Award, label: "Awards Received", value: "15+" },
  ]

  const milestones = [
    {
      year: "1998",
      title: "Foundation",
      description: "Adibasi Welfare Society was established with a vision to empower tribal communities",
    },
    {
      year: "2005",
      title: "First Training Center",
      description: "Opened our first skill development center for women's empowerment",
    },
    {
      year: "2010",
      title: "Industrial Partnerships",
      description: "Started partnerships with major industrial companies for employment generation",
    },
    {
      year: "2015",
      title: "Healthcare Initiative",
      description: "Launched comprehensive healthcare programs for tribal communities",
    },
    {
      year: "2020",
      title: "Digital Literacy",
      description: "Introduced computer training and digital literacy programs",
    },
    {
      year: "2024",
      title: "Sustainable Growth",
      description: "Achieved sustainable growth with 500+ employees and multiple service verticals",
    },
  ]

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
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">About Us</h1>
            <div className="w-24 h-1 bg-[#E96424] mx-auto mb-8" />
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed font-semibold">
              The Adibasi Welfare Society has been a beacon of hope for tribal communities, working tirelessly to bridge
              the gap between tradition and progress.
            </p>
          </motion.div>

          {/* Vision & Mission */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16" ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#C98C32]/50">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-[#E96424] mr-3" />
                  <h3 className="text-2xl font-black text-white">Our Vision</h3>
                </div>
                <p className="text-white leading-relaxed font-medium">
                  To create a world where tribal communities thrive with dignity, preserving their rich cultural
                  heritage while embracing sustainable development and modern opportunities.
                </p>
              </div>

              <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#C98C32]/50">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-[#E96424] mr-3" />
                  <h3 className="text-2xl font-black text-white">Our Mission</h3>
                </div>
                <p className="text-white leading-relaxed font-medium">
                  To empower tribal communities through comprehensive welfare programs, education, healthcare,
                  employment , and sustainable development initiatives that honor their traditions.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="bg-[#4F6D4A]/20 backdrop-blur-sm rounded-xl p-6 text-center border border-[#C98C32]/30 hover:border-[#E96424]/50 transition-all duration-300"
                >
                  {stat.icon && <stat.icon className="w-10 h-10 text-[#E96424] mx-auto mb-3" />}
                  <h4 className="text-2xl font-bold text-[#F4A300] mb-2">{stat.value}</h4>
                  <p className="text-[#C2A87E] text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mb-16"
          >
            <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#C98C32]/50">
              <h3 className="text-3xl font-black text-white mb-6 text-center">Our Story</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-white leading-relaxed font-medium mb-4">
                    Founded in 1998, the Adibasi Welfare Society emerged from a deep commitment to uplift and empower
                    tribal communities in Jharkhand. What started as a small initiative has grown into a comprehensive
                    organization serving over 1000 families across 50+ villages.
                  </p>
                  <p className="text-white leading-relaxed font-medium mb-4">
                    Our journey has been marked by unwavering dedication to preserving tribal culture while providing
                    modern opportunities for growth and development. We believe in sustainable progress that honors
                    tradition.
                  </p>
                  <p className="text-white leading-relaxed font-medium">
                    Today, we stand as a bridge between tribal communities and the modern world, ensuring that progress
                    doesn't come at the cost of cultural identity.
                  </p>
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image src="/images/gallery/women-employment.jpeg" alt="Our Story" fill className="object-cover" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-black text-white mb-12 text-center">Our Journey</h3>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                  className={`flex items-center gap-8 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
                >
                  <div className="flex-1">
                    <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-6 border border-[#C98C32]/50">
                      <div className="flex items-center mb-3">
                        <Calendar className="w-5 h-5 text-[#E96424] mr-2" />
                        <span className="text-[#F4A300] font-bold text-lg">{milestone.year}</span>
                      </div>
                      <h4 className="text-white font-bold text-xl mb-2">{milestone.title}</h4>
                      <p className="text-white font-medium">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-[#E96424] rounded-full flex-shrink-0" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Policies */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#C98C32]/50">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-[#E96424] mr-3" />
                <h3 className="text-2xl font-black text-white">Health & Safety Policy</h3>
              </div>
              <p className="text-white leading-relaxed font-medium">
                We prioritize the health and safety of our community members and employees, implementing comprehensive
                safety protocols and healthcare initiatives.
              </p>
            </div>

            <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#C98C32]/50">
              <div className="flex items-center mb-4">
                <Leaf className="w-8 h-8 text-[#E96424] mr-3" />
                <h3 className="text-2xl font-black text-white">Environment Policy</h3>
              </div>
              <p className="text-white leading-relaxed font-medium">
                Committed to environmental sustainability, we promote eco-friendly practices and conservation efforts
                that align with tribal values of living in harmony with nature.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
