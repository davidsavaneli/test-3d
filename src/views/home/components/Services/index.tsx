import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useSpring, useTransform, useVelocity, MotionValue } from 'framer-motion'
import { springConfig } from 'animations'
import { ImageSvg, AnimatedTitle, AnimatedSubText } from 'components'
import { servicesData } from 'testData'
import { servicesDataTypes } from 'types'

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

  const scale = useTransform(smoothVelocity, [3, 0, -3], [0, 1, 0], {
    clamp: false,
  })

  return (
    <div className={styles.slider} ref={sliderRef}>
      <motion.div className={styles.sliderContainer} ref={sliderContainerRef}>
        <div className={styles.headlineSection}>
          <div className='container'>
            <div className={styles.titles}>
              <AnimatedTitle animationDirection='rtl'>Our</AnimatedTitle>
              <AnimatedTitle animationDirection='ltr'>Services</AnimatedTitle>
            </div>
            <AnimatedSubText endY="0px">
              We are dedicated to delivering exceptional software solutions that drive business success through
              cutting-edge technology.
            </AnimatedSubText>
          </div>
        </div>
        <motion.div className={styles.sliderContent} ref={sliderContentRef}>
          <div className={styles.sliderWrapper}>
            <motion.div ref={slidesRef} className={styles.slides} style={{ x }}>
              <div className={styles.slide}>
                <div className={styles.slideItem}>
                  <div className={styles.slideItemSpaceLarge}></div>
                </div>
              </div>
              {servicesData.map((o: servicesDataTypes) => (
                <div className={styles.slide} key={o.id}>
                  <div className={styles.slideItem}>
                    <ServiceItem scale={scale} data={o} />
                  </div>
                </div>
              ))}
              <div className={styles.slide}>
                <div className={styles.slideItem}>
                  <div className={styles.slideItemSpaceSmall}></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

type ServiceItemProps = {
  scale: MotionValue
  data: servicesDataTypes
}

const ServiceItem = ({ scale, data }: ServiceItemProps) => {
  return (
    <motion.div className={styles.serviceItem} style={{ scale }}>
      <div className={styles.serviceItemNumber}>{data.number}.</div>
      <h2 className={styles.serviceItemTitle}>{data.title}</h2>
      <p className={styles.serviceItemText}>{data.description}</p>
      <div className={styles.serviceItemIcon}>
        <ImageSvg src={data.icon} alt={data.title} fullWidth />
      </div>
    </motion.div>
  )
}

export default Services
