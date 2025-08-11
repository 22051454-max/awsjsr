'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#D9B382] mb-6">Contact Us</h2>
          <div className="w-24 h-1 bg-[#E96424] mx-auto mb-8" />
          <p className="text-xl text-[#C2A87E] max-w-3xl mx-auto leading-relaxed">
            Get in touch with us to learn more about our initiatives or to contribute 
            to the welfare of tribal communities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-[#4B3B30]/20 backdrop-blur-sm rounded-2xl p-8 border border-[#C98C32]/30">
              <h3 className="text-2xl font-bold text-[#D9B382] mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[#E96424] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#D9B382] mb-1">Address</h4>
                    <p className="text-[#C2A87E]">
                      Ghorabandha, Jamshedpur<br />
                      Jharkhand, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-[#E96424] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#D9B382] mb-1">Phone</h4>
                    <p className="text-[#C2A87E]">+91 9204858570</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-[#E96424] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#D9B382] mb-1">Email</h4>
                    <p className="text-[#C2A87E]">adibasi.jsr@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-[#E96424] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#D9B382] mb-1">Office Hours</h4>
                    <p className="text-[#C2A87E]">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-[#4B3B30]/20 backdrop-blur-sm rounded-2xl p-4 border border-[#C98C32]/30 h-64 flex items-center justify-center">
              <div className="text-center text-[#C2A87E]">
                <MapPin className="w-12 h-12 mx-auto mb-2 text-[#E96424]" />
                <p>Interactive Map</p>
                <p className="text-sm">Ghorabandha, Jamshedpur</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="bg-[#4B3B30]/20 backdrop-blur-sm rounded-2xl p-8 border border-[#C98C32]/30">
              <h3 className="text-2xl font-bold text-[#D9B382] mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[#D9B382] font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-[#4B3B30]/30 border-[#C98C32]/50 text-[#D9B382] placeholder-[#C2A87E]/60 focus:border-[#E96424]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[#D9B382] font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-[#4B3B30]/30 border-[#C98C32]/50 text-[#D9B382] placeholder-[#C2A87E]/60 focus:border-[#E96424]"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#D9B382] font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[#4B3B30]/30 border-[#C98C32]/50 text-[#D9B382] placeholder-[#C2A87E]/60 focus:border-[#E96424]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#D9B382] font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-[#4B3B30]/30 border-[#C98C32]/50 text-[#D9B382] placeholder-[#C2A87E]/60 focus:border-[#E96424] resize-none"
                    placeholder="Tell us how we can help you or how you'd like to contribute..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#E96424] to-[#F4A300] hover:from-[#F4A300] hover:to-[#E96424] text-white font-bold py-3 rounded-full text-lg shadow-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
