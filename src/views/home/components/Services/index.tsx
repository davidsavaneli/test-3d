import React, { memo, useRef, useState, useEffect } from 'react'
import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'

import styles from './styles.module.css'

const Services = () => {
  const [startPos, setStartPos] = useState<number>(0)
  const [endPos, setEndPos] = useState<number>(0)
  const [startTrValue, setStartTrValue] = useState<number>(0)
  const [endTrValue, setEndTrValue] = useState<number>(0)

  const sliderRef = useRef<HTMLDivElement>(null)
  const sliderContainerRef = useRef<HTMLDivElement>(null)
  const sliderContentRef = useRef<HTMLDivElement>(null)
  const slidesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const calculateSizes = () => {
      if (sliderRef?.current && sliderContentRef?.current && slidesRef?.current) {
        const windowWidth = window.innerWidth
        const boxWidth = sliderContentRef.current.offsetWidth
        const wrapperWidth = slidesRef.current.offsetWidth

        const offsetTop = sliderRef.current.offsetTop
        const boxHeight = sliderContentRef.current.offsetHeight
        const height = (boxWidth - windowWidth + boxHeight) * 2

        sliderRef.current.style.height = `${height}px`

        setStartPos(offsetTop)
        setEndPos(height - (boxHeight - offsetTop))
        setStartTrValue(0)
        setEndTrValue(-(wrapperWidth - windowWidth))
      }
    }

    calculateSizes()
    const handleResize = () => calculateSizes()
    const resizeObserver = new ResizeObserver(handleResize)
    if (sliderContainerRef?.current) resizeObserver.observe(sliderContainerRef?.current)

    return () => resizeObserver.disconnect()
  })

  const springConfig = {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  }

  const { scrollY } = useScroll()

  const transformX = useSpring(scrollY, springConfig)
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, springConfig)

  const x = useTransform(transformX, [startPos, endPos], [startTrValue, endTrValue])

  const scale = useTransform(smoothVelocity, [1000, 0, -1000], [0.9, 1, 0.9], {
    clamp: false,
  })

  return (
    <div className={styles.slider} ref={sliderRef}>
      <motion.div className={styles.sliderContainer} ref={sliderContainerRef}>
        <motion.div className={styles.sliderContent} ref={sliderContentRef}>
          <div className={styles.sliderWrapper}>
            <motion.div ref={slidesRef} className={styles.slides} style={{ x }}>
              <div className={styles.slide}>
                <div className={styles.slideItem}>
                  <motion.div className={styles.slideItemInner} style={{ scale }}></motion.div>
                </div>
              </div>
              <div className={styles.slide}>
                <div className={styles.slideItem}>
                  <motion.div className={styles.slideItemInner} style={{ scale }}></motion.div>
                </div>
              </div>
              <div className={styles.slide}>
                <div className={styles.slideItem}>
                  <motion.div className={styles.slideItemInner} style={{ scale }}></motion.div>
                </div>
              </div>
              <div className={styles.slide}>
                <div className={styles.slideItem}>
                  <motion.div className={styles.slideItemInner} style={{ scale }}></motion.div>
                </div>
              </div>
              <div className={styles.slide}>
                <div className={styles.slideItem}>
                  <motion.div className={styles.slideItemInner} style={{ scale }}></motion.div>
                </div>
              </div>
              <div className={styles.slide}>
                <div className={styles.slideItem}>
                  <motion.div className={styles.slideItemInner} style={{ scale }}></motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default memo(Services)
