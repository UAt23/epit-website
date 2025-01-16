'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to about page when landing on home page
    router.push('/about')
  }, [router])

  // Return null or a loading state while redirecting
  return null
}

