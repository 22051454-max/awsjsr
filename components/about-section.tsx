'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, Award, Building, TrendingUp, Shield, Leaf, Users } from 'lucide-react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { icon: Building, label: 'Infrastructure Projects', value: '50+' },
    { icon: TrendingUp, label: 'Annual Turnover', value: '₹10Cr+' },
    { icon: Users, label: 'Employees', value: '500+' },
    { icon: Award, label: 'Awards Received', value: '15+' },
  ]

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">About Us</h2>
          <div className="w-24 h-1 bg-[#E96424] mx-auto mb-8" />
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed font-semibold">
            The Adibasi Welfare Society has been a beacon of hope for tribal communities, 
            working tirelessly to bridge the gap between tradition and progress.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Vision & Mission */}
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
                To create a world where tribal communities thrive with dignity, preserving their rich cultural heritage 
                while embracing sustainable development and modern opportunities.
              </p>
            </div>

            <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#C98C32]/50">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-[#E96424] mr-3" />
                <h3 className="text-2xl font-black text-white">Our Mission</h3>
              </div>
              <p className="text-white leading-relaxed font-medium">
                To empower tribal communities through comprehensive welfare programs, education, healthcare, 
                employment generation, and sustainable development initiatives that honor their traditions.
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
                <stat.icon className="w-10 h-10 text-[#E96424] mx-auto mb-3" />
                <h4 className="text-2xl font-bold text-[#F4A300] mb-2">{stat.value}</h4>
                <p className="text-[#C2A87E] text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Policies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#C98C32]/50">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-[#E96424] mr-3" />
              <h3 className="text-2xl font-black text-white">Health & Safety Policy</h3>
            </div>
            <p className="text-white leading-relaxed font-medium">
              We prioritize the health and safety of our community members and employees, 
              implementing comprehensive safety protocols and healthcare initiatives.
            </p>
          </div>

          <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#C98C32]/50">
            <div className="flex items-center mb-4">
              <Leaf className="w-8 h-8 text-[#E96424] mr-3" />
              <h3 className="text-2xl font-black text-white">Environment Policy</h3>
            </div>
            <p className="text-white leading-relaxed font-medium">
              Committed to environmental sustainability, we promote eco-friendly practices 
              and conservation efforts that align with tribal values of living in harmony with nature.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
