'use client'

import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

const SmoothScroller = () => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const handleResize = () => {
      lenis.resize()
    }

    window.addEventListener('resize', () => handleResize())

    return () => window.removeEventListener('resize', () => handleResize())
  }, [])

  return <></>
}

export default SmoothScroller
