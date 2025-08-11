'use client'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import IntroPage from '@/components/intro-page'
import HomePage from '@/components/home-page'

export default function Page() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 4500)

    return () => clearTimeout(timer)
  }, [])

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
