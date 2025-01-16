'use client'

import { useEffect, useRef, useState } from 'react'

export function BackgroundDots() {
  const dotsRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isSmallScreen = window.innerWidth <= 768
      setIsMobile(isTouchDevice || isSmallScreen)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const dots = dotsRef.current
    const wrapper = wrapperRef.current
    if (!dots || !wrapper) return

    const handleMove = (x: number, y: number) => {
      const rect = dots.getBoundingClientRect()
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      
      // Adjust y position for scroll
      const adjustedY = y - scrollTop
      
      const xPercent = ((x - rect.left) / rect.width - 0.5) * 100
      const yPercent = ((adjustedY - rect.top) / rect.height - 0.5) * 100

      // Apply 3D transform with adjusted sensitivity
      dots.style.transform = `
        perspective(1000px)
        rotateX(${-yPercent / (isMobile ? 25 : 20)}deg)
        rotateY(${xPercent / (isMobile ? 25 : 20)}deg)
        translateZ(${isMobile ? 15 : 25}px)
        scale(${isMobile ? 1.02 : 1.03})
      `
    }

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        handleMove(touch.clientX, touch.clientY)
      }
    }

    const handleLeave = () => {
      dots.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translateZ(0)
        scale(1)
      `
    }

    // Add both mouse and touch events
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove)
    wrapper.addEventListener('mouseleave', handleLeave)
    wrapper.addEventListener('touchend', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      wrapper.removeEventListener('mouseleave', handleLeave)
      wrapper.removeEventListener('touchend', handleLeave)
    }
  }, [isMobile])

  return (
    <div 
      ref={wrapperRef}
      className="fixed inset-0 pointer-events-none overflow-hidden touch-none"
      style={{
        perspective: '1000px',
        perspectiveOrigin: 'center center',
      } as React.CSSProperties}
    >
      <div 
        ref={dotsRef}
        className="absolute inset-[-100px] transition-all duration-300 ease-out bg-[#0a0a0a]"
        style={{
          backgroundImage: `
            radial-gradient(
              rgba(255, 255, 255, ${isMobile ? '0.2' : '0.15'}) ${isMobile ? '2px' : '2px'},
              transparent ${isMobile ? '2px' : '2px'}
            )
          `,
          backgroundSize: `
            ${isMobile ? 
              'calc(var(--grid-size)/1.8) calc(var(--grid-size)/1.8)' : 
              'calc(var(--grid-size)/1.5) calc(var(--grid-size)/1.5)'
            }
          `,
          backgroundPosition: '0 0',
          backgroundAttachment: 'fixed',
          transformStyle: 'preserve-3d',
          transform: 'translateZ(0)',
          zIndex: -1,
          willChange: 'transform',
          filter: 'contrast(1.2)',
        }}
      />
    </div>
  )
} 