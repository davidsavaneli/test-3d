'use client'

import React, { useRef, useEffect, memo } from 'react'
import styles from './styles.module.css'

const FluidAnimation = () => {
  const canvas = useRef(null)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('./script').then(({ default: WebglFluid }) => {
        WebglFluid(canvas.current, {
          IMMEDIATE: false,
          TRIGGER: 'hover',
          SIM_RESOLUTION: 256,
          DYE_RESOLUTION: 1024,
          CAPTURE_RESOLUTION: 512,
          DENSITY_DISSIPATION: 1.5,
          VELOCITY_DISSIPATION: 2,
          PRESSURE: 0.55,
          PRESSURE_ITERATIONS: 20,
          CURL: 1,
          SPLAT_RADIUS: 0.05,
          SPLAT_FORCE: 6000,
          SHADING: true,
          COLORFUL: true,
          COLOR_UPDATE_SPEED: 10,
          PAUSED: false,
          BACK_COLOR: { r: 0, g: 0, b: 0 },
          TRANSPARENT: true,
          BLOOM: false,
          BLOOM_ITERATIONS: 8,
          BLOOM_RESOLUTION: 256,
          BLOOM_INTENSITY: 0.15,
          BLOOM_THRESHOLD: 0.3,
          BLOOM_SOFT_KNEE: 0.7,
          SUNRAYS: true,
          SUNRAYS_RESOLUTION: 196,
          SUNRAYS_WEIGHT: 0.5,
        })
      })
    }
  }, [])
  return (
    <div className={styles.overlay}>
      <canvas ref={canvas}></canvas>
    </div>
  )
}

export default memo(FluidAnimation)
