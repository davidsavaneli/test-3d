import React, { useRef, useEffect, useState, memo } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
import { animateScroll as Scroll } from 'react-scroll'
import { useCursorContext } from 'contexts'
import { useWindowSize } from 'hooks'
import { springConfig } from 'animations'
import { ImageSvg, MagneticLayout, Button } from 'components'

import styles from './styles.module.css'

const ProductsVideo = () => {
  const [endPos, setEndPos] = useState<number>(0)
  const [videoInitialWidth, setVideoInitialWidth] = useState<number>(1)
  const [videoInitialHeight, setVideoInitialHeight] = useState<number>(1)
  const [videoFinalWidth, setVideoFinalWidth] = useState<number>(0)
  const [videoFinalHeight, setVideoFinalHeight] = useState<number>(0)

  const videoSectionRef = useRef<HTMLDivElement>(null)
  const videoBoxRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef?.current) {
      videoRef.current.addEventListener(
        'loadedmetadata',
        function () {
          setVideoInitialWidth(this.videoWidth)
          setVideoInitialHeight(this.videoHeight)
        },
        false,
      )
    }
  })

  useEffect(() => {
    const calculateSizes = () => {
      if (videoSectionRef?.current && videoBoxRef?.current && videoRef?.current) {
        const videoSectionHeight = (videoInitialHeight * videoBoxRef?.current.clientWidth) / videoInitialWidth

        setEndPos(videoSectionRef.current?.offsetTop)
        setVideoFinalWidth(videoBoxRef?.current.clientWidth)
        setVideoFinalHeight(videoSectionHeight)

        videoSectionRef.current.style.height = `${videoSectionHeight}px`
      }
    }

    calculateSizes()
    const handleResize = () => calculateSizes()
    const resizeObserver = new ResizeObserver(handleResize)
    if (videoSectionRef?.current) resizeObserver.observe(videoSectionRef?.current)

    return () => resizeObserver.disconnect()
  })

  const { scrollY } = useScroll()

  const y = useTransform(scrollY, [0, endPos], ['-150px', `150px`])
  const width = useTransform(scrollY, [0, endPos], ['204px', `${videoFinalWidth}px`])
  const height = useTransform(scrollY, [0, endPos], ['70px', `${videoFinalHeight}px`])
  const borderRadius = useTransform(scrollY, [0, endPos], ['160px', `40px`])

  return (
    <div className={styles.videoSection} ref={videoSectionRef} id='products-video-section'>
      <div className='container'>
        <div className={styles.videoBox} ref={videoBoxRef}>
          <motion.video
            loop
            muted
            autoPlay
            style={{ y: y, width: width, height: height, borderRadius: borderRadius }}
            ref={videoRef}
          >
            <source src={require('assets/images/uploads/home/products-video.mp4')} type='video/mp4' />
          </motion.video>
        </div>
      </div>
    </div>
  )
}

export default ProductsVideo
