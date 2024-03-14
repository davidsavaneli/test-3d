'use client'

import Lenis from '@studio-freight/lenis'
import React, { useEffect } from 'react'

const SmoothScroller = () => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    window.addEventListener('resize', () => lenis.resize())

    return () => window.removeEventListener('resize', () => lenis.resize())
  }, [])

  return <></>
}

export default SmoothScroller
