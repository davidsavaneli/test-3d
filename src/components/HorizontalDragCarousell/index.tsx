import React, { useRef, useEffect, useState, ReactNode } from 'react'
import { useMotionValue, motion, useSpring } from 'framer-motion'
import styles from './styles.module.css'

type HorizontalDragCarousellTypes = {
  children: ReactNode
  bounceStiffness?: number
  bounceDamping?: number
}

const HorizontalDragCarousell = ({
  children,
  bounceStiffness = 100,
  bounceDamping = 12,
}: HorizontalDragCarousellTypes) => {
  const sliderContainerRef = useRef<HTMLDivElement>(null)
  const sliderWrapperRef = useRef<HTMLDivElement>(null)

  const transformX = useMotionValue<number>(0)
  const x = useSpring(transformX, { mass: 0.1, damping: 26, stiffness: 212 })

  const [sliderConstraints, setSliderConstraints] = useState<number>(0)

  useEffect(() => {
    const calculateSizes = () => {
      if (sliderWrapperRef?.current && sliderContainerRef?.current) {
        setSliderConstraints(sliderWrapperRef.current.scrollWidth - sliderContainerRef?.current.clientWidth)
        transformX.set(0)
      }
    }

    calculateSizes()
    const handleResize = () => calculateSizes()
    const resizeObserver = new ResizeObserver(handleResize)
    if (sliderContainerRef?.current) resizeObserver.observe(sliderContainerRef?.current)

    return () => resizeObserver.disconnect()
  })

  return (
    <div className={styles.sliderContainer} ref={sliderContainerRef}>
      <motion.div
        ref={sliderWrapperRef}
        drag='x'
        initial={{ x: 0 }}
        style={{ x: transformX }}
        dragConstraints={{
          left: -sliderConstraints,
          right: 0,
        }}
        dragTransition={{ bounceStiffness, bounceDamping }}
        className={styles.sliderWrapper}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default HorizontalDragCarousell
