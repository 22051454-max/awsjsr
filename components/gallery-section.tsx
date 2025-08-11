"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/images/gallery/training-dress-making.jpeg",
      alt: "Skill Development - Dress Making Training",
      title: "Skill Development - Dress Making Training",
      description: "Women learning tailoring and dress making skills for employment generation",
    },
    {
      src: "/images/gallery/employment-females.jpeg",
      alt: "Employment Generation for Women",
      title: "Employment Generation for Women",
      description: "Empowering women through industrial employment opportunities",
    },
    {
      src: "/images/gallery/health-checkup.jpeg",
      alt: "Free Health Checkup Camp",
      title: "Free Health Checkup Camp",
      description: "Providing free healthcare services to tribal communities",
    },
    {
      src: "/images/gallery/computer-training.jpeg",
      alt: "Computer Training Program",
      title: "Computer Training Program",
      description: "Digital literacy and computer skills training for youth",
    },
    {
      src: "/images/gallery/bus-services.jpeg",
      alt: "AWS Bus Services",
      title: "AWS Bus Services",
      description: "Transportation services connecting tribal areas to employment centers",
    },
    {
      src: "/images/gallery/infrastructure-assets.jpeg",
      alt: "Infrastructure and Assets",
      title: "Infrastructure and Assets",
      description: "Modern equipment and infrastructure for material handling services",
    },
  ]

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
    <section id="gallery" className="py-20 px-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image src="/images/tribal-pattern.jpeg" alt="Tribal Pattern" fill className="object-cover" />
      </div>

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Photo Gallery</h2>
          <div className="w-24 h-1 bg-[#E96424] mx-auto mb-8" />
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed font-semibold">
            Capturing moments of transformation, celebration, and community spirit in our journey of tribal empowerment.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
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
        </div>

        {/* View Full Gallery Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <Link href="/gallery">
            <Button className="bg-gradient-to-r from-[#E96424] to-[#F4A300] hover:from-[#F4A300] hover:to-[#E96424] text-white font-bold px-8 py-3 rounded-full text-lg shadow-lg">
              View Full Gallery
            </Button>
          </Link>
        </motion.div>
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
    </section>
  )
}
