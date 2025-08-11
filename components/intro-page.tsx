'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function IntroPage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#4F6D4A] via-[#4B3B30] to-[#A94438] overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/tribal-pattern.jpeg')] bg-cover bg-center animate-pulse" />
      </div>
      
      {/* Falling Leaves Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="leaf"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 4}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Logo Animation */}
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-6"
        >
          <div className="logo-glow">
            <Image
              src="/images/aws-logo.png"
              alt="Adibasi Welfare Society Logo"
              width={200}
              height={200}
              className="mx-auto drop-shadow-2xl logo-seesaw-gentle rounded-full"
            />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-4xl md:text-6xl font-black text-white mb-4 tracking-wide"
        >
          ADIBASI WELFARE SOCIETY
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xl text-white font-bold"
        >
          Empowering Tribal Communities
        </motion.p>
      </motion.div>
    </div>
  )
}
