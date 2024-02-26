import React, { memo, useRef, useState, useEffect } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const Services = () => {
  const [startPos, setStartPos] = useState<number>(0)
  const [endPos, setEndPos] = useState<number>(0)
  const [startTrValue, setStartTrValue] = useState<number>(0)
  const [endTrValue, setEndTrValue] = useState<number>(0)

  const shssRef = useRef<HTMLDivElement>(null)
  const shssContainerRef = useRef<HTMLDivElement>(null)
  const shssContentRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const springConfig = {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  }

  useEffect(() => {
    const calculateSizes = () => {
      if (shssRef?.current && shssContentRef?.current && wrapperRef?.current) {
        const windowWidth = window.innerWidth
        const boxWidth = shssContentRef.current.offsetWidth
        const wrapperWidth = wrapperRef.current.offsetWidth

        if (wrapperRef.current.offsetWidth > windowWidth) {
          const offsetTop = shssRef.current.offsetTop
          const boxHeight = shssContentRef.current.offsetHeight
          const height = (boxWidth - windowWidth + boxHeight) * 1

          shssRef.current.style.height = `${height}px`

          setStartPos(offsetTop)
          setEndPos(height - (boxHeight - offsetTop))
          setStartTrValue(0)
          setEndTrValue(-(wrapperWidth - windowWidth))
        } else {
          shssRef.current.style.height = `auto`
          setStartPos(0)
          setEndPos(0)
          setStartTrValue(0)
          setEndTrValue(0)
        }
      }
    }

    calculateSizes()
    const handleResize = () => calculateSizes()
    const resizeObserver = new ResizeObserver(handleResize)
    if (shssContainerRef?.current) resizeObserver.observe(shssContainerRef?.current)

    return () => resizeObserver.disconnect()
  })

  const { scrollY } = useScroll()
  const transformX = useSpring(scrollY, springConfig)
  const x = useTransform(transformX, [startPos, endPos], [startTrValue, endTrValue])

  return (
    <div className='Shss' ref={shssRef}>
      <motion.div className='Shss-container' ref={shssContainerRef}>
        <motion.div className='Shss-content' ref={shssContentRef}>
          <div className='Shss-wrapper'>
            <motion.div ref={wrapperRef} className='Shss-slides' style={{ x }}>
              <div className='Shss-slide'>
                <div className='Shss-slide-active-points'></div>
                <div className='Shss-slide-item'>
                  <div className='Shss-slide-item-inner'></div>
                </div>
              </div>
              <div className='Shss-slide'>
                <div className='Shss-slide-active-points'></div>
                <div className='Shss-slide-item'>
                  <div className='Shss-slide-item-inner'></div>
                </div>
              </div>
              <div className='Shss-slide'>
                <div className='Shss-slide-active-points'></div>
                <div className='Shss-slide-item'>
                  <div className='Shss-slide-item-inner'></div>
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
