"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function CustomersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const customers = [
    { name: "Tata Steel", logo: "/tata-steel-logo.png" },
    { name: "JUSCO", logo: "/jusco-logo.png" },
    { name: "Tata Power", logo: "/tata-power-logo.png" },
    { name: "Tata Motors", logo: "/tata-motors-logo.png" },
  ]

  return (
    <section id="customers" className="py-20 px-4 relative">
      {/* Decorative Tribal Border */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-transparent via-[#E96424] to-transparent opacity-30" />
      <div className="absolute top-2 left-0 right-0 h-1 bg-[url('/images/tribal-pattern.jpeg')] bg-repeat-x opacity-20" />

      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#D9B382] mb-6">Our Valued Partners</h2>
          <div className="w-24 h-1 bg-[#E96424] mx-auto mb-8" />
          <p className="text-xl text-[#C2A87E] max-w-3xl mx-auto leading-relaxed">
            Trusted by leading industrial partners who share our commitment to tribal welfare and sustainable
            development.
          </p>
        </motion.div>

        {/* Customer Logos Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
        >
          {customers.map((customer, index) => (
            <motion.div
              key={customer.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border-2 border-[#C98C32]/50 hover:border-[#E96424] transition-all duration-300 hover:shadow-xl hover:shadow-[#E96424]/20 hover:bg-white">
                <Image
                  src={customer.logo || "/placeholder.svg"}
                  alt={`${customer.name} logo`}
                  width={120}
                  height={80}
                  className="w-full h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-[#4B3B30]/20 backdrop-blur-sm rounded-2xl p-8 border border-[#C98C32]/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#D9B382] mb-4">Building Lasting Partnerships</h3>
            <p className="text-[#C2A87E] leading-relaxed">
              Our partnerships with industry leaders enable us to create meaningful employment opportunities for tribal
              communities while maintaining the highest standards of service delivery. Together, we're building a
              sustainable future that honors tradition while embracing progress.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
