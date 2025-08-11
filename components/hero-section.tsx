"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, Users, TreePine } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
          >
            Empowering
            <span className="text-[#F4A300] block">Tribal Communities</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed font-semibold"
          >
            Dedicated to the welfare, development, and empowerment of tribal communities through education, healthcare,
            employment, and sustainable development initiatives.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="bg-[#4F6D4A]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-[#E96424]" />
              </div>
              <h3 className="text-2xl font-bold text-[#F4A300]">1000+</h3>
              <p className="text-[#C2A87E]">Families Supported</p>
            </div>
            <div className="text-center">
              <div className="bg-[#4F6D4A]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-[#E96424]" />
              </div>
              <h3 className="text-2xl font-bold text-[#F4A300]">25+</h3>
              <p className="text-[#C2A87E]">Years of Service</p>
            </div>
            <div className="text-center">
              <div className="bg-[#4F6D4A]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <TreePine className="w-8 h-8 text-[#E96424]" />
              </div>
              <h3 className="text-2xl font-bold text-[#F4A300]">50+</h3>
              <p className="text-[#C2A87E]">Villages Reached</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#E96424] to-[#F4A300] hover:from-[#F4A300] hover:to-[#E96424] text-white font-bold px-8 py-4 rounded-full text-lg shadow-2xl border-2 border-[#C98C32] relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Donate Now
                </span>
                <div className="absolute inset-0 bg-[url('/images/tribal-pattern.jpeg')] opacity-20 bg-cover bg-center" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#D9B382] text-[#D9B382] hover:bg-[#D9B382] hover:text-[#4B3B30] font-bold px-8 py-4 rounded-full text-lg bg-transparent"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
