import React, { memo, useRef, useState, useEffect } from 'react'
import clsx from 'clsx'
import { motion, useScroll, useSpring, useTransform, useVelocity, useMotionValueEvent } from 'framer-motion'
import { springConfig } from 'animations'

import styles from './styles.module.css'

const Services = () => {
  const [startPos, setStartPos] = useState<number>(0)
  const [endPos, setEndPos] = useState<number>(0)
  const [startTrValue, setStartTrValue] = useState<number>(0)
  const [endTrValue, setEndTrValue] = useState<number>(0)
  const [titleProgress, setTitleProgress] = useState<number>(0)

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
        const height = (boxWidth - windowWidth + boxHeight) * 1

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

  const { scrollY } = useScroll()
  const { scrollYProgress } = useScroll({ target: sliderRef })

  const transformX = useSpring(scrollY, springConfig)
  const scrollVelocity = useVelocity(scrollYProgress)
  const smoothVelocity = useSpring(scrollVelocity, springConfig)

  const x = useTransform(transformX, [startPos, endPos], [startTrValue, endTrValue])

  const scale = useTransform(smoothVelocity, [1, 0, -1], [0.001, 1, 0.001], {
    clamp: false,
  })

  const titleWidth = useTransform(transformX, [startPos, endPos], [0, 100])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setTitleProgress(titleWidth.get())
  })

  return (
    <div className={styles.slider} ref={sliderRef}>
      <div className={styles.backgroundTitleBox}>
        <div className={clsx(styles.backgroundTitle, styles.first)}>
          <span>Services</span>
        </div>
        <div className={clsx(styles.backgroundTitle, styles.second)}>
          <span style={{ width: titleProgress + '%' }}>Services</span>
        </div>
      </div>
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
