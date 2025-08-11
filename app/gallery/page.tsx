"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, X, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/animated-background"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const galleryImages = [
    {
      src: "/images/gallery/tailoring-training.jpeg",
      alt: "Skill Development - Dress Making Training",
      title: "Skill Development - Dress Making Training",
      description: "Women learning tailoring and dress making skills for employment generation",
    },
    {
      src: "/images/gallery/women-employment.jpeg",
      alt: "Employment Generation for Women",
      title: "Employment Generation for Women",
      description: "Empowering women through industrial employment opportunities",
    },
    {
      src: "/images/gallery/health-camp.jpeg",
      alt: "Free Health Checkup Camp",
      title: "Free Health Checkup Camp",
      description: "Providing free healthcare services to tribal communities",
    },
    {
      src: "/images/gallery/computer-education.jpeg",
      alt: "Computer Training Program",
      title: "Computer Training Program",
      description: "Digital literacy and computer skills training for youth",
    },
    {
      src: "/images/gallery/infrastructure-equipment.jpeg",
      alt: "Infrastructure and Equipment",
      title: "Infrastructure and Equipment",
      description: "Modern equipment and infrastructure for material handling services",
    },
    {
      src: "/images/gallery/bus-fleet.jpeg",
      alt: "AWS Bus Services",
      title: "AWS Bus Services",
      description: "Transportation services connecting tribal areas to employment centers",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

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
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Photo Gallery</h1>
            <div className="w-24 h-1 bg-[#E96424] mx-auto mb-8" />
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed font-semibold">
              Capturing moments of transformation, celebration, and community spirit in our journey of tribal
              empowerment.
            </p>
          </motion.div>

          {/* Main Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative mb-16"
          >
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden border-2 border-[#C98C32]/50">
              <Image
                src={galleryImages[currentSlide].src || "/placeholder.svg"}
                alt={galleryImages[currentSlide].alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4B3B30]/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white text-2xl font-bold mb-2">{galleryImages[currentSlide].title}</h3>
                <p className="text-white text-lg">{galleryImages[currentSlide].description}</p>
              </div>
            </div>

            {/* Carousel Controls */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 bg-black/50 rounded-full"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 bg-black/50 rounded-full"
              onClick={nextSlide}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-[#E96424]" : "bg-white/50"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </motion.div>

          {/* Thumbnail Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden rounded-2xl border-2 border-[#C98C32]/50 hover:border-[#E96424] transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4B3B30]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-white text-sm">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 bg-black/50 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 bg-black/50 rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 bg-black/50 rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            <Image
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />

            <div className="absolute bottom-4 left-4 right-4 text-center bg-black/70 rounded-lg p-4">
              <h3 className="text-white text-xl font-bold mb-2">{galleryImages[selectedImage].title}</h3>
              <p className="text-white text-sm">{galleryImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
