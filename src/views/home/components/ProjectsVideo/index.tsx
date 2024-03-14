import React, { useRef, useEffect, useState } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
import { useMediaQuery } from 'hooks'

import styles from './styles.module.css'

const ProjectsVideo = () => {
  const isLg = useMediaQuery('(max-width: 1679.98px)')

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

  const { scrollYProgress } = useScroll({ target: videoSectionRef, offset: ['start end', 'start start'] })

  const animationValues = () => {
    let width
    let y
    let height
    let borderRadius

    borderRadius = useTransform(scrollYProgress, [0, 1], ['160px', `40px`])

    if (isLg) {
      y = useTransform(scrollYProgress, [0, 1], ['-112px', `112px`])
      width = useTransform(scrollYProgress, [0, 1], ['172px', `${videoFinalWidth}px`])
      height = useTransform(scrollYProgress, [0, 1], ['62px', `${videoFinalHeight}px`])
    } else {
      y = useTransform(scrollYProgress, [0, 1], ['-150px', `150px`])
      width = useTransform(scrollYProgress, [0, 1], ['204px', `${videoFinalWidth}px`])
      height = useTransform(scrollYProgress, [0, 1], ['70px', `${videoFinalHeight}px`])
    }
    return { width, y, height, borderRadius }
  }

  const { width, y, height, borderRadius } = animationValues()

  return (
    <div className={styles.videoSection} ref={videoSectionRef} id='projects-video-section'>
      <div className='container'>
        <div className={styles.videoBox} ref={videoBoxRef}>
          <motion.video loop muted autoPlay style={{ y, width, height, borderRadius }} ref={videoRef}>
            <source src={require('assets/images/uploads/home/projects-video.mp4')} type='video/mp4' />
          </motion.video>
        </div>
      </div>
    </div>
  )
}

export default ProjectsVideo
