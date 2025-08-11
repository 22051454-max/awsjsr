'use client'

import { useState } from 'react'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ServicesSection from '@/components/services-section'
import CustomersSection from '@/components/customers-section'
import GallerySection from '@/components/gallery-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'
import Chatbot from '@/components/chatbot'
import AnimatedBackground from '@/components/animated-background'

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CustomersSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}
