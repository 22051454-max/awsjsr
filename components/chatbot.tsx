"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Info, Heart, MapPin, Phone, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: number
  text: string
  isBot: boolean
  options?: Array<{
    label: string
    action: string
    icon?: React.ComponentType<any>
  }>
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "🙏 Namaste! Welcome to Adibasi Welfare Society. I'm here to help you learn about our mission to empower tribal communities. How can I assist you today?",
      isBot: true,
      options: [
        { label: "About Us", action: "about", icon: Info },
        { label: "What We Do", action: "services", icon: Heart },
        { label: "Donate Now", action: "donate", icon: Heart },
        { label: "Contact Details", action: "contact", icon: Phone },
        { label: "Other Query", action: "other", icon: HelpCircle },
      ],
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [showInput, setShowInput] = useState(false)

  const responses = {
    about: {
      text: "🌿 Adibasi Welfare Society was founded in 1998 with a vision to empower tribal communities in Jharkhand. We've been working for 25+ years to bridge the gap between tradition and progress, serving 1000+ families across 50+ villages. Our mission is to preserve tribal culture while providing modern opportunities for growth and development.",
      options: [
        { label: "Learn More About Us", action: "visit_about", icon: Info },
        { label: "Our Services", action: "services", icon: Heart },
        { label: "Back to Main Menu", action: "main_menu", icon: MessageCircle },
      ],
    },
    services: {
      text: "🔧 We provide comprehensive services including:\n\n• Employment Generation (500+ jobs created)\n• Skill Development & Training Programs\n• Healthcare Services & Health Camps\n• Transportation Services (20+ buses)\n• Material Handling & Industrial Cleaning\n• Education & Digital Literacy Programs\n\nAll our services focus on sustainable development while honoring tribal traditions.",
      options: [
        { label: "View Our Work", action: "visit_work", icon: Heart },
        { label: "Our Partners", action: "partners", icon: Info },
        { label: "Back to Main Menu", action: "main_menu", icon: MessageCircle },
      ],
    },
    donate: {
      text: "💝 Your contribution can transform lives! Every donation directly supports:\n\n• Education & Training Programs\n• Healthcare Services for Communities\n• Employment Generation Initiatives\n• Infrastructure Development\n\nDonations are eligible for tax deduction under Section 80G. We provide official receipts for all contributions.",
      options: [
        { label: "Donate Now", action: "visit_donate", icon: Heart },
        { label: "Learn Impact Areas", action: "impact", icon: Info },
        { label: "Back to Main Menu", action: "main_menu", icon: MessageCircle },
      ],
    },
    contact: {
      text: "📞 Get in touch with us:\n\n📍 Address: Ghorabandha, Jamshedpur, Jharkhand, India\n📱 Phone: +91 9204858570\n✉️ Email: adibasi.jsr@gmail.com\n\n🕒 Office Hours:\nMonday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\n\nWe're always here to help and answer your questions!",
      options: [
        { label: "Send Message", action: "visit_contact", icon: Phone },
        { label: "View Location", action: "location", icon: MapPin },
        { label: "Back to Main Menu", action: "main_menu", icon: MessageCircle },
      ],
    },
    partners: {
      text: "🤝 We're proud to partner with leading companies:\n\n• Tata Steel - Material Handling & Employment\n• JUSCO - Transportation & Facility Management\n• Tata Power - Industrial Services\n• Tata Motors - Logistics & Employment\n\nThese partnerships help us create sustainable employment opportunities for tribal communities.",
      options: [
        { label: "View All Partners", action: "visit_customers", icon: Info },
        { label: "Partnership Opportunities", action: "visit_contact", icon: Phone },
        { label: "Back to Main Menu", action: "main_menu", icon: MessageCircle },
      ],
    },
    impact: {
      text: "🌟 Your donation creates real impact:\n\n₹1000 - Train 1 person for a month\n₹2500 - Organize health camp for 50 people\n₹5000 - Support job placement for 5 individuals\n₹10000 - Contribute to community infrastructure\n\n100% of your donation goes directly to community programs!",
      options: [
        { label: "Make a Donation", action: "visit_donate", icon: Heart },
        { label: "View Our Work", action: "visit_work", icon: Info },
        { label: "Back to Main Menu", action: "main_menu", icon: MessageCircle },
      ],
    },
    location: {
      text: "📍 We're located in Ghorabandha, Jamshedpur, Jharkhand - the heart of tribal communities in Eastern India. Our location allows us to directly serve and connect with the communities we work with every day.",
      options: [
        { label: "Get Directions", action: "visit_contact", icon: MapPin },
        { label: "Contact Us", action: "contact", icon: Phone },
        { label: "Back to Main Menu", action: "main_menu", icon: MessageCircle },
      ],
    },
    main_menu: {
      text: "🏠 How else can I help you today?",
      options: [
        { label: "About Us", action: "about", icon: Info },
        { label: "What We Do", action: "services", icon: Heart },
        { label: "Donate Now", action: "donate", icon: Heart },
        { label: "Contact Details", action: "contact", icon: Phone },
        { label: "Other Query", action: "other", icon: HelpCircle },
      ],
    },
    thank_you: {
      text: "🙏 Thank you for your interest in Adibasi Welfare Society! Your support and engagement help us continue our mission of empowering tribal communities. Together, we can build a sustainable future that honors tradition while embracing progress.\n\nIs there anything else I can help you with?",
      options: [
        { label: "Learn More", action: "main_menu", icon: Info },
        { label: "Donate Now", action: "visit_donate", icon: Heart },
        { label: "Contact Us", action: "visit_contact", icon: Phone },
      ],
    },
  }

  const handleOptionClick = (action: string) => {
    if (action.startsWith("visit_")) {
      const page = action.replace("visit_", "")
      const pageMap: { [key: string]: string } = {
        about: "/about",
        work: "/our-work",
        customers: "/customers",
        contact: "/contact",
        donate: "/donate",
      }

      // Add thank you message before redirecting
      const thankYouMessage: Message = {
        id: messages.length + 1,
        text: "🙏 Thank you for your interest! Redirecting you to the page...",
        isBot: true,
      }
      setMessages((prev) => [...prev, thankYouMessage])

      // Redirect after a short delay
      setTimeout(() => {
        window.location.href = pageMap[page] || "/"
      }, 1500)
      return
    }

    if (action === "other") {
      setShowInput(true)
      const botResponse: Message = {
        id: messages.length + 1,
        text: "💬 Please type your question below, and I'll do my best to help you! You can ask about our programs, how to get involved, volunteer opportunities, or anything else about Adibasi Welfare Society.",
        isBot: true,
      }
      setMessages((prev) => [...prev, botResponse])
      return
    }

    const response = responses[action as keyof typeof responses]
    if (response) {
      const botResponse: Message = {
        id: messages.length + 1,
        text: response.text,
        isBot: true,
        options: response.options,
      }
      setMessages((prev) => [...prev, botResponse])
    }
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")

    // Simulate bot response for custom queries
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: "🙏 Thank you for your question! For detailed information and personalized assistance, please contact us directly:\n\n📞 Phone: +91 9876543210\n✉️ Email: adibasi.jsr@gmail.com\n\nOur team will be happy to provide you with comprehensive answers and support.",
        isBot: true,
        options: [
          { label: "Contact Us", action: "visit_contact", icon: Phone },
          { label: "Thank You", action: "thank_you", icon: Heart },
          { label: "Main Menu", action: "main_menu", icon: MessageCircle },
        ],
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.div className="fixed bottom-6 right-6 z-50" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-[#E96424] to-[#F4A300] hover:from-[#F4A300] hover:to-[#E96424] shadow-2xl border-2 border-[#C98C32] relative overflow-hidden"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          {!isOpen && <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-[#4B3B30]/95 backdrop-blur-md rounded-2xl border border-[#C98C32]/50 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-[#C98C32]/30 bg-gradient-to-r from-[#E96424]/20 to-[#F4A300]/20 rounded-t-2xl">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#E96424] rounded-full flex items-center justify-center mr-3">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-[#D9B382] font-bold">AWS Assistant</h3>
                  <p className="text-[#C2A87E] text-sm">🟢 Online - Here to help!</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-[#E96424]/50">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                  <div className="max-w-[85%]">
                    <div
                      className={`p-3 rounded-2xl ${
                        message.isBot
                          ? "bg-[#4F6D4A]/30 text-[#D9B382] border border-[#C98C32]/30"
                          : "bg-gradient-to-r from-[#E96424] to-[#F4A300] text-white"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                    </div>

                    {/* Options */}
                    {message.options && (
                      <div className="mt-3 space-y-2">
                        {message.options.map((option, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleOptionClick(option.action)}
                            className="w-full flex items-center p-2 bg-[#4B3B30]/50 hover:bg-[#E96424]/20 rounded-lg border border-[#C98C32]/30 hover:border-[#E96424]/50 transition-all duration-300 text-left group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {option.icon && (
                              <option.icon className="w-4 h-4 text-[#E96424] mr-2 group-hover:text-[#F4A300]" />
                            )}
                            <span className="text-[#D9B382] text-sm font-medium group-hover:text-white">
                              {option.label}
                            </span>
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            {showInput && (
              <div className="p-4 border-t border-[#C98C32]/30 bg-[#4B3B30]/50">
                <div className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your question..."
                    className="bg-[#4B3B30]/50 border-[#C98C32]/50 text-[#D9B382] placeholder-[#C2A87E]/60 focus:border-[#E96424] text-sm"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    className="bg-[#E96424] hover:bg-[#F4A300] flex-shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
