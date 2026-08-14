'use client'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import IntroPage from '@/components/intro-page'
import HomePage from '@/components/home-page'

export default function Page() {
  const [showIntro, setShowIntro] = useState<boolean | null>(null)

  useEffect(() => {
    // Check if intro has been shown in this session
    const introShown = sessionStorage.getItem('introShown')
    
    if (introShown === 'true') {
      // Intro was already shown, skip it
      setShowIntro(false)
    } else {
      // Show intro and mark it as shown
      setShowIntro(true)
      const timer = setTimeout(() => {
        setShowIntro(false)
        sessionStorage.setItem('introShown', 'true')
      }, 4500)

      return () => clearTimeout(timer)
    }
  }, [])

  // Don't render anything until state is determined (prevents hydration mismatch)
  if (showIntro === null) {
    return null
  }

  return (
    <>
      <Head>
        <title>Adibasi Welfare Society</title>
        <meta name="description" content="A modern Next.js site with intro animation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {showIntro ? <IntroPage /> : <HomePage />}
    </>
  )
}
