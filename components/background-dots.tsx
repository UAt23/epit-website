'use client'

import { useEffect, useRef } from 'react'

export function BackgroundDots() {
  const dotsRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dots = dotsRef.current
    const wrapper = wrapperRef.current
    if (!dots || !wrapper) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const rect = wrapper.getBoundingClientRect()
      
      const xPercent = ((clientX - rect.left) / rect.width - 0.5) * 100
      const yPercent = ((clientY - rect.top) / rect.height - 0.5) * 100

      dots.style.transform = `
        perspective(1000px)
        rotateX(${-yPercent / 20}deg)
        rotateY(${xPercent / 20}deg)
        translateZ(0)
      `
    }

    const handleMouseLeave = () => {
      dots.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translateZ(0)
      `
    }

    window.addEventListener('mousemove', handleMouseMove)
    wrapper.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      wrapper.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div 
      ref={wrapperRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{
        perspective: '1000px',
        perspectiveOrigin: 'center center',
      }}
    >
      {/* Dark background with dots pattern */}
      <div 
        ref={dotsRef}
        className="absolute inset-[-20px] transition-transform duration-200 ease-out bg-[#0a0a0a]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            radial-gradient(rgba(255, 255, 255, 0.05) 1.5px, transparent 1.5px)
          `,
          backgroundSize: `
            var(--grid-size) var(--grid-size),
            var(--grid-size) var(--grid-size),
            calc(var(--grid-size)/2) calc(var(--grid-size)/2)
          `,
          backgroundPosition: 'center center',
          transformStyle: 'preserve-3d',
          zIndex: -1,
        }}
      />
    </div>
  )
} 