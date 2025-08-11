'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Heart, Bus, Package, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      icon: Briefcase,
      title: 'Employment',
      description: 'Creating sustainable job opportunities for tribal communities in various sectors.',
      image: '/tribal-employment.png'
    },
    {
      icon: GraduationCap,
      title: 'Training',
      description: 'Skill development and vocational training programs to enhance employability.',
      image: '/tribal-training-programs.png'
    },
    {
      icon: Heart,
      title: 'Education & Health',
      description: 'Comprehensive education and healthcare services for holistic development.',
      image: '/tribal-education-health.png'
    },
    {
      icon: Bus,
      title: 'Bus Services',
      description: 'Transportation services connecting remote tribal areas to urban centers.',
      image: '/tribal-bus.png'
    },
    {
      icon: Package,
      title: 'Material Handling',
      description: 'Efficient material handling and logistics services for industrial partners.',
      image: '/material-handling.png'
    },
    {
      icon: Sparkles,
      title: 'Industrial Cleaning',
      description: 'Professional cleaning services for industrial and commercial establishments.',
      image: '/industrial-cleaning.png'
    }
  ]

  return (
    <section id="services" className="py-20 px-4 relative">
      {/* Tribal Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/warli-art.jpeg"
          alt="Tribal Pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#D9B382] mb-6">Our Services</h2>
          <div className="w-24 h-1 bg-[#E96424] mx-auto mb-8" />
          <p className="text-xl text-[#C2A87E] max-w-3xl mx-auto leading-relaxed">
            Comprehensive services designed to uplift and empower tribal communities 
            through sustainable development and modern opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="bg-[#4B3B30]/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#C98C32]/30 hover:border-[#E96424]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#E96424]/20">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4B3B30]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="w-10 h-10 text-[#E96424]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#D9B382] mb-3 group-hover:text-[#F4A300] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#C2A87E] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
