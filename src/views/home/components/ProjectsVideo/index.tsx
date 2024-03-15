import React, { useRef, useEffect, useState } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
import { useMediaQuery } from 'hooks'

import styles from './styles.module.css'

const ProjectsVideo = () => {
  const isLg = useMediaQuery('(max-width: 1679.98px)')
  const isTouchMode = useMediaQuery('(max-width: 1279.98px)')

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

  const AnimationValues = () => {
    const yValue = isLg ? (!isTouchMode ? '112' : 0) : '150'
    const widthValue = isLg ? (!isTouchMode ? '172' : videoFinalWidth) : '204'
    const heightValue = isLg ? (!isTouchMode ? '62' : videoFinalHeight) : '70'
    const borderRadiusValueFirst = !isTouchMode ? '160' : '300'
    const borderRadiusValueSecond = !isTouchMode ? '40' : '20'

    const y = useTransform(scrollYProgress, [0, 1], [`-${yValue}px`, `${yValue}px`])
    const width = useTransform(scrollYProgress, [0, 1], [`${widthValue}px`, `${videoFinalWidth}px`])
    const height = useTransform(scrollYProgress, [0, 1], [`${heightValue}px`, `${videoFinalHeight}px`])
    const borderRadius = useTransform(
      scrollYProgress,
      [0, 1],
      [`${borderRadiusValueFirst}px`, `${borderRadiusValueSecond}px`],
    )

    return { y, width, height, borderRadius }
  }

  const { y, width, height, borderRadius } = AnimationValues()

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
