"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import { ArrowLeft, MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AnimatedBackground from "@/components/animated-background"

export default function ContactPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Ghorabandha, Jamshedpur", "Jharkhand, India - 831001"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 6572268293", "+91 9204858570"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["adibasi.jsr@gmail.com", "info@adibasiwelfare.org"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
    },
  ]

  const departments = [
    { name: "General Inquiries", email: "info@adibasiwelfare.org" },
    { name: "Employment Services", email: "employment@adibasiwelfare.org" },
    { name: "Training Programs", email: "training@adibasiwelfare.org" },
    { name: "Partnerships", email: "partnerships@adibasiwelfare.org" },
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
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Contact Us</h1>
            <div className="w-24 h-1 bg-[#E96424] mx-auto mb-8" />
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed font-semibold">
              Get in touch with us to learn more about our initiatives or to contribute to the welfare of tribal
              communities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16" ref={ref}>
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#C98C32]/50">
                <h3 className="text-2xl font-black text-white mb-8">Get In Touch</h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      className="flex items-start space-x-4"
                    >
                      <info.icon className="w-6 h-6 text-[#E96424] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-white mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-white font-medium">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Departments */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#C98C32]/50"
              >
                <h3 className="text-2xl font-black text-white mb-6">Departments</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={dept.name} className="flex items-center justify-between p-3 bg-[#E96424]/10 rounded-lg">
                      <span className="text-white font-medium">{dept.name}</span>
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-[#F4A300] hover:text-[#E96424] transition-colors text-sm"
                      >
                        {dept.email}
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.8 }}
                className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-4 border-2 border-[#C98C32]/50 h-64 flex items-center justify-center"
              >
                <div className="text-center text-white">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-[#E96424]" />
                  <p className="font-bold">Interactive Map</p>
                  <p className="text-sm">Ghorabandha, Jamshedpur</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#C98C32]/50">
                <h3 className="text-2xl font-black text-white mb-8">Send us a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-white font-bold mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-[#4B3B30]/50 border-[#C98C32]/50 text-white placeholder-[#C2A87E]/60 focus:border-[#E96424]"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-white font-bold mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-[#4B3B30]/50 border-[#C98C32]/50 text-white placeholder-[#C2A87E]/60 focus:border-[#E96424]"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-bold mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[#4B3B30]/50 border-[#C98C32]/50 text-white placeholder-[#C2A87E]/60 focus:border-[#E96424]"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white font-bold mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-[#4B3B30]/50 border-[#C98C32]/50 text-white placeholder-[#C2A87E]/60 focus:border-[#E96424]"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-bold mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-[#4B3B30]/50 border-[#C98C32]/50 text-white placeholder-[#C2A87E]/60 focus:border-[#E96424] resize-none"
                      placeholder="Tell us how we can help you or how you'd like to contribute..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#E96424] to-[#F4A300] hover:from-[#F4A300] hover:to-[#E96424] text-white font-bold py-3 rounded-full text-lg shadow-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Quick Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-6 border border-[#C98C32]/50 text-center">
              <User className="w-12 h-12 text-[#E96424] mx-auto mb-4" />
              <h4 className="text-white font-bold text-lg mb-2">General Inquiries</h4>
              <p className="text-white mb-4">For general questions about our services and programs</p>
              <a
                href="mailto:info@adibasiwelfare.org"
                className="text-[#F4A300] hover:text-[#E96424] transition-colors"
              >
                info@adibasiwelfare.org
              </a>
            </div>

            <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-6 border border-[#C98C32]/50 text-center">
              <MessageSquare className="w-12 h-12 text-[#E96424] mx-auto mb-4" />
              <h4 className="text-white font-bold text-lg mb-2">Partnership Opportunities</h4>
              <p className="text-white mb-4">Interested in partnering with us for social impact</p>
              <a
                href="mailto:partnerships@adibasiwelfare.org"
                className="text-[#F4A300] hover:text-[#E96424] transition-colors"
              >
                partnerships@adibasiwelfare.org
              </a>
            </div>

            <div className="bg-[#4B3B30]/40 backdrop-blur-sm rounded-2xl p-6 border border-[#C98C32]/50 text-center">
              <Phone className="w-12 h-12 text-[#E96424] mx-auto mb-4" />
              <h4 className="text-white font-bold text-lg mb-2">Emergency Contact</h4>
              <p className="text-white mb-4">For urgent matters and immediate assistance</p>
              <a href="tel:+919876543210" className="text-[#F4A300] hover:text-[#E96424] transition-colors">
                +91 9876543210
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
