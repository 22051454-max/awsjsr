'use client'

import { useState, useEffect } from 'react'
import IntroPage from '@/components/intro-page'
import HomePage from '@/components/home-page'

export default function Page() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 4500) // Changed to 4.5 seconds

    return () => clearTimeout(timer)
  }, [])

  if (showIntro) {
    return <IntroPage />
  }

  return <HomePage />
}
