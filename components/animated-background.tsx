"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function AnimatedBackground() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Initialize audio
    const audioElement = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dcpoke__birds-singing-03%28chosic.com%29-pxyrOWYy6YyXcc0bMaGmkZPXnNH9kw.mp3")
    audioElement.loop = true
    audioElement.volume = 0.3 // Set volume to 30%
    setAudio(audioElement)

    // Auto-play after user interaction
    const handleUserInteraction = () => {
      if (audioElement && !isPlaying) {
        audioElement
          .play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch(console.error)
      }
      // Remove listeners after first interaction
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("keydown", handleUserInteraction)
      document.removeEventListener("scroll", handleUserInteraction)
    }

    // Add event listeners for user interaction
    document.addEventListener("click", handleUserInteraction)
    document.addEventListener("keydown", handleUserInteraction)
    document.addEventListener("scroll", handleUserInteraction)

    return () => {
      if (audioElement) {
        audioElement.pause()
        audioElement.src = ""
      }
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("keydown", handleUserInteraction)
      document.removeEventListener("scroll", handleUserInteraction)
    }
  }, [isPlaying])

  const toggleMusic = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        audio
          .play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch(console.error)
      }
    }
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C2A87E] via-[#4B3B30] to-[#4F6D4A]" />

      {/* Animated Tribal Pattern Overlay */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "url('/images/tribal-pattern.jpeg')",
          backgroundSize: "400px 400px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Floating Leaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="leaf"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 8 + 12}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Music Control Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <motion.button
          onClick={toggleMusic}
          className="w-12 h-12 bg-[#4B3B30]/80 backdrop-blur-md rounded-full border-2 border-[#C98C32]/50 hover:border-[#E96424] transition-all duration-300 flex items-center justify-center group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? (
            <div className="flex space-x-1">
              <div className="w-1 h-4 bg-[#E96424] rounded-full animate-pulse"></div>
              <div className="w-1 h-4 bg-[#F4A300] rounded-full animate-pulse" style={{ animationDelay: "0.1s" }}></div>
              <div className="w-1 h-4 bg-[#E96424] rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
            </div>
          ) : (
            <div className="w-0 h-0 border-l-[6px] border-l-[#E96424] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
          )}
        </motion.button>
      </div>
    </div>
  )
}
