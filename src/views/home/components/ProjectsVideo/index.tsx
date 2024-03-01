import React, { useRef, useEffect, useState } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'

import styles from './styles.module.css'

const ProjectsVideo = () => {
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

  const { scrollYProgress } = useScroll({target: videoSectionRef, offset: ['start end', 'start start']})

  const y = useTransform(scrollYProgress, [0, 1], ['-150px', `150px`])
  const width = useTransform(scrollYProgress, [0, 1], ['204px', `${videoFinalWidth}px`])
  const height = useTransform(scrollYProgress, [0, 1], ['70px', `${videoFinalHeight}px`])
  const borderRadius = useTransform(scrollYProgress, [0, 1], ['160px', `40px`])

  return (
    <div className={styles.videoSection} ref={videoSectionRef} id='projects-video-section'>
      <div className='container'>
        <div className={styles.videoBox} ref={videoBoxRef}>
          <motion.video
            loop
            muted
            autoPlay
            style={{ y: y, width: width, height: height, borderRadius: borderRadius }}
            ref={videoRef}
          >
            <source src={require('assets/images/uploads/home/projects-video.mp4')} type='video/mp4' />
          </motion.video>
        </div>
      </div>
    </div>
  )
}

export default ProjectsVideo
