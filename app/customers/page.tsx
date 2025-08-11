"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Building, Users, Award, TrendingUp, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/animated-background"

export default function CustomersPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const customers = [
    {
      name: "Tata Steel",
      logo: "/tata-steel-logo.png",
      description: "Leading steel manufacturing company",
      services: ["Material Handling", "Industrial Cleaning", "Employment Services"],
      partnership: "Since 2005",
    },
    {
      name: "JUSCO",
      logo: "/jusco-logo.png",
      description: "Jamshedpur Utilities & Services Company",
      services: ["Transportation", "Facility Management", "Workforce Solutions"],
      partnership: "Since 2008",
    },
    {
      name: "Tata Power",
      logo: "/tata-power-logo.png",
      description: "Integrated power company",
      services: ["Industrial Services", "Material Handling", "Safety Management"],
      partnership: "Since 2010",
    },
    {
      name: "Tata Motors",
      logo: "/tata-motors-logo.png",
      description: "Automotive manufacturing giant",
      services: ["Logistics Support", "Industrial Cleaning", "Employment Generation"],
      partnership: "Since 2012",
    },
  ]

  const testimonials = [
    {
      company: "Tata Steel",
      quote:
        "AWS has been instrumental in providing reliable workforce solutions while maintaining the highest standards of quality and safety.",
      author: "Operations Manager",
      rating: 5,
    },
    {
      company: "JUSCO",
      quote:
        "Their commitment to tribal welfare combined with professional service delivery makes them an ideal partner for sustainable development.",
      author: "General Manager",
      rating: 5,
    },
    {
      company: "Tata Power",
      quote:
        "AWS demonstrates exceptional dedication in bridging the gap between industrial requirements and community empowerment.",
      author: "HR Director",
      rating: 5,
    },
  ]

  const partnershipStats = [
    { icon: Building, label: "Partner Companies", value: "25+" },
    { icon: Users, label: "Jobs Created", value: "500+" },
    { icon: Award, label: "Years of Excellence", value: "25+" },
    { icon: TrendingUp, label: "Client Retention", value: "95%" },
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
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Our Valued Partners</h1>
            <div className="w-24 h-1 bg-[#E96424] mx-auto mb-8" />
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed font-semibold">
              Trusted by leading industrial partners who share our commitment to tribal welfare and sustainable
              development.
            </p>
          </motion.div>

          {/* Partnership Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {partnershipStats.map((stat, index) => (
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

          {/* Customer Profiles */}
          <div className="space-y-12 mb-16" ref={ref}>
            {customers.map((customer, index) => (
              <motion.div
                key={customer.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`grid lg:grid-cols-3 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Logo */}
                <div className={`${index % 2 === 1 ? "lg:col-start-3" : ""}`}>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#C98C32]/50 hover:border-[#E96424] transition-all duration-300 hover:shadow-xl">
                    <Image
                      src={customer.logo || "/placeholder.svg"}
                      alt={`${customer.name} logo`}
                      width={200}
                      height={120}
                      className="w-full h-24 object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-2 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#C98C32]/50">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-black text-white">{customer.name}</h3>
                      <span className="text-[#F4A300] font-bold text-sm bg-[#E96424]/20 px-3 py-1 rounded-full">
                        {customer.partnership}
                      </span>
                    </div>
                    <p className="text-white font-medium mb-6">{customer.description}</p>

                    <div className="space-y-4">
                      <h4 className="text-[#F4A300] font-bold text-lg">Services Provided:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {customer.services.map((service, idx) => (
                          <div key={idx} className="bg-[#E96424]/20 rounded-lg p-3 text-center">
                            <span className="text-white font-medium text-sm">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-black text-white mb-12 text-center">What Our Partners Say</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.company}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                  className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#C98C32]/50 relative"
                >
                  <Quote className="w-8 h-8 text-[#E96424] mb-4" />
                  <p className="text-white font-medium mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#F4A300] font-bold">{testimonial.author}</p>
                      <p className="text-[#C2A87E] text-sm">{testimonial.company}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#F4A300] fill-current" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partnership Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-12 border-2 border-[#C98C32]/50">
              <h3 className="text-3xl font-black text-white mb-6">Why Partner With Us?</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E96424]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-[#E96424]" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Skilled Workforce</h4>
                  <p className="text-[#C2A87E] text-sm">Trained and dedicated tribal workforce</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E96424]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-[#E96424]" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Quality Assurance</h4>
                  <p className="text-[#C2A87E] text-sm">Commitment to excellence and standards</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E96424]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building className="w-8 h-8 text-[#E96424]" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Social Impact</h4>
                  <p className="text-[#C2A87E] text-sm">Contributing to community development</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#E96424]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-[#E96424]" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Sustainable Growth</h4>
                  <p className="text-[#C2A87E] text-sm">Long-term partnership approach</p>
                </div>
              </div>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#E96424] to-[#F4A300] hover:from-[#F4A300] hover:to-[#E96424] text-white font-bold px-8 py-3 rounded-full text-lg">
                  Become a Partner
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
