"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/our-work" },
    { name: "Our Partners", href: "/customers" },
    { name: "Photo Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-40 bg-[#4B3B30]/90 backdrop-blur-md border-b border-[#C98C32]/30"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="logo-glow">
              <Image
                src="/images/aws-logo.png"
                alt="AWS Logo"
                width={50}
                height={50}
                className="logo-seesaw-left rounded-full"
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-white font-black text-lg">Adibasi Welfare Society</h1>
              <p className="text-white text-sm font-semibold">Ghorabandha, Jamshedpur</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                <Link
                  href={item.href}
                  className="text-white hover:text-[#F4A300] transition-colors duration-300 font-bold relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E96424] group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}

            {/* Donate Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/donate">
                <Button className="bg-gradient-to-r from-[#E96424] to-[#F4A300] hover:from-[#F4A300] hover:to-[#E96424] text-white font-bold px-6 py-2 rounded-full shadow-lg border-2 border-[#C98C32] relative overflow-hidden group">
                  <span className="relative z-10">Donate Now</span>
                  <div className="absolute inset-0 bg-[url('/images/tribal-pattern.jpeg')] opacity-20 bg-cover bg-center" />
                </Button>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[#D9B382]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4 border-t border-[#C98C32]/30"
          >
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-[#F4A300] transition-colors duration-300 font-bold py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/donate">
                <Button className="bg-gradient-to-r from-[#E96424] to-[#F4A300] text-white font-bold mt-4 rounded-full w-full">
                  Donate Now
                </Button>
              </Link>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
