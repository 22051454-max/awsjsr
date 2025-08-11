"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Heart, ExternalLink } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/our-work" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/adibasiwelfaresociety",
      label: "Facebook",
      color: "#1877F2",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/adibasiwelfare",
      label: "Twitter",
      color: "#1DA1F2",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/adibasiwelfaresociety",
      label: "Instagram",
      color: "#E4405F",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/adibasi-welfare-society",
      label: "LinkedIn",
      color: "#0A66C2",
    },
  ]

  const handleSocialClick = (url: string, platform: string) => {
    // Open social media links in new tab
    window.open(url, "_blank", "noopener,noreferrer")

    // Optional: Track social media clicks
    console.log(`Social media click: ${platform}`)
  }

  const handleEmailClick = () => {
    window.location.href =
      "mailto:adibasi.jsr@gmail.com?subject=Inquiry from Website&body=Hello Adibasi Welfare Society,%0D%0A%0D%0AI am interested in learning more about your programs.%0D%0A%0D%0AThank you."
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+919204858570"
  }

  return (
    <footer className="relative bg-[#3D2F24] border-t border-[#C98C32]/30">
      {/* Tribal Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[url('/images/tribal-pattern.jpeg')] bg-repeat opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="logo-glow">
                <Image
                  src="/images/aws-logo.png"
                  alt="AWS Logo"
                  width={60}
                  height={60}
                  className="logo-seesaw-right rounded-full"
                />
              </div>
              <div>
                <h3 className="text-white font-black text-xl">Adibasi Welfare Society</h3>
                <p className="text-white text-sm font-semibold">Ghorabandha, Jamshedpur</p>
              </div>
            </Link>
            <p className="text-white leading-relaxed mb-6 max-w-md font-medium">
              Dedicated to the welfare, development, and empowerment of tribal communities through sustainable
              initiatives that honor tradition while embracing progress.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.button
                  key={social.label}
                  onClick={() => handleSocialClick(social.href, social.label)}
                  className="w-12 h-12 bg-[#E96424]/20 rounded-full flex items-center justify-center text-[#E96424] hover:bg-[#E96424] hover:text-white transition-all duration-300 border border-[#E96424]/50 group relative overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={`Follow us on ${social.label}`}
                >
                  <social.icon className="w-5 h-5 relative z-10" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ backgroundColor: social.color }}
                  />
                  <ExternalLink className="w-3 h-3 absolute top-1 right-1 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-[#F4A300] transition-colors duration-300 flex items-center group font-semibold"
                  >
                    <span className="w-2 h-2 bg-[#E96424] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/donate"
                  className="text-white hover:text-[#F4A300] transition-colors duration-300 flex items-center group font-semibold"
                >
                  <span className="w-2 h-2 bg-[#E96424] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Donate Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-black text-lg mb-6">Contact Info</h4>
            <div className="space-y-4 text-white font-semibold">
              <div>
                <p className="text-[#F4A300] text-sm font-bold mb-1">Address:</p>
                <p className="text-sm leading-relaxed">
                  Ghorabandha, Jamshedpur
                  <br />
                  Jharkhand, India - 831001
                </p>
              </div>

              <div>
                <p className="text-[#F4A300] text-sm font-bold mb-1">Phone:</p>
                <button
                  onClick={handlePhoneClick}
                  className="text-sm hover:text-[#F4A300] transition-colors duration-300 underline decoration-dotted"
                  title="Click to call"
                >
                  +91 9204858570
                </button>
              </div>

              <div>
                <p className="text-[#F4A300] text-sm font-bold mb-1">Email:</p>
                <button
                  onClick={handleEmailClick}
                  className="text-sm hover:text-[#F4A300] transition-colors duration-300 underline decoration-dotted"
                  title="Click to send email"
                >
                  adibasi.jsr@gmail.com
                </button>
              </div>

              <div>
                <p className="text-[#F4A300] text-sm font-bold mb-1">Office Hours:</p>
                <p className="text-sm leading-relaxed">
                  Mon-Fri: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 9:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C98C32]/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-white text-sm font-semibold">
                © {new Date().getFullYear()} Adibasi Welfare Society. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <Link
                  href="/privacy-policy"
                  className="text-[#C2A87E] hover:text-[#F4A300] transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-[#C2A87E] hover:text-[#F4A300] transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            <div className="flex items-center text-white text-sm font-semibold">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-[#E96424] mx-1 animate-pulse" />
              <span>for tribal communities</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
