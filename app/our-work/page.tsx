"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Heart,
  Bus,
  Package,
  Sparkles,
  Users,
  Award,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/animated-background"

export default function OurWorkPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      icon: Briefcase,
      title: "Employment Generation",
      description:
        "Creating sustainable job opportunities for tribal communities in various sectors including industrial, construction, and service industries.",
      image: "/images/gallery/women-employment.jpeg",
      achievements: ["500+ Jobs Created", "25+ Partner Companies", "80% Retention Rate"],
    },
    {
      icon: GraduationCap,
      title: "Skill Development & Training",
      description:
        "Comprehensive skill development and vocational training programs to enhance employability and entrepreneurship among tribal youth.",
      image: "/images/gallery/tailoring-training.jpeg",
      achievements: ["1000+ Trained", "15+ Skill Programs", "90% Success Rate"],
    },
    {
      icon: Heart,
      title: "Education & Healthcare",
      description:
        "Holistic education and healthcare services ensuring comprehensive development and well-being of tribal communities.",
      image: "/images/gallery/health-camp.jpeg",
      achievements: ["50+ Villages Covered", "Free Health Camps", "Digital Literacy Programs"],
    },
    {
      icon: Bus,
      title: "Transportation Services",
      description:
        "Reliable transportation services connecting remote tribal areas to urban centers, facilitating access to employment and opportunities.",
      image: "/images/gallery/bus-fleet.jpeg",
      achievements: ["20+ Buses", "Daily Services", "Safe Transportation"],
    },
    {
      icon: Package,
      title: "Material Handling",
      description:
        "Professional material handling and logistics services for industrial partners, providing employment while maintaining quality standards.",
      image: "/images/gallery/infrastructure-equipment.jpeg",
      achievements: ["Modern Equipment", "24/7 Operations", "Quality Assurance"],
    },
    {
      icon: Sparkles,
      title: "Industrial Cleaning",
      description:
        "Comprehensive cleaning services for industrial and commercial establishments, ensuring hygiene and safety standards.",
      image: "/images/gallery/industrial-cleaning.png",
      achievements: ["Industrial Standards", "Trained Staff", "Eco-friendly Methods"],
    },
  ]

  const impactStats = [
    { icon: Users, label: "Families Impacted", value: "1000+" },
    { icon: Award, label: "Training Programs", value: "15+" },
    { icon: TrendingUp, label: "Employment Rate", value: "85%" },
    { icon: Heart, label: "Villages Served", value: "50+" },
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
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Our Work</h1>
            <div className="w-24 h-1 bg-[#E96424] mx-auto mb-8" />
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed font-semibold">
              Comprehensive services designed to uplift and empower tribal communities through sustainable development
              and modern opportunities.
            </p>
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="bg-[#4F6D4A]/20 backdrop-blur-sm rounded-xl p-6 text-center border border-[#C98C32]/30 hover:border-[#E96424]/50 transition-all duration-300"
              >
                <stat.icon className="w-10 h-10 text-[#E96424] mx-auto mb-3" />
                <h4 className="text-2xl font-bold text-[#F4A300] mb-2">{stat.value}</h4>
                <p className="text-[#C2A87E] text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Services Grid */}
          <div className="space-y-16" ref={ref}>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#C98C32]/50">
                    <div className="flex items-center mb-6">
                      <service.icon className="w-10 h-10 text-[#E96424] mr-4" />
                      <h3 className="text-2xl font-black text-white">{service.title}</h3>
                    </div>
                    <p className="text-white leading-relaxed font-medium mb-6">{service.description}</p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-[#F4A300] font-bold text-lg">Key Achievements:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-[#E96424] rounded-full mr-3" />
                            <span className="text-white font-medium">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="relative h-80 rounded-2xl overflow-hidden border-2 border-[#C98C32]/50 hover:border-[#E96424] transition-all duration-300">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4B3B30]/60 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-12 border-2 border-[#C98C32]/50">
              <h3 className="text-3xl font-black text-white mb-6">Join Our Mission</h3>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                Partner with us to create lasting impact in tribal communities. Together, we can build a sustainable
                future that honors tradition while embracing progress.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-[#E96424] to-[#F4A300] hover:from-[#F4A300] hover:to-[#E96424] text-white font-bold px-8 py-3 rounded-full text-lg">
                    Partner With Us
                  </Button>
                </Link>
                <Link href="/donate">
                  <Button
                    variant="outline"
                    className="border-2 border-[#D9B382] text-[#D9B382] hover:bg-[#D9B382] hover:text-[#4B3B30] font-bold px-8 py-3 rounded-full text-lg bg-transparent"
                  >
                    Support Our Cause
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
