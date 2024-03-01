import React, { memo, useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useVelocity } from 'framer-motion'
import clsx from 'clsx'

import styles from './styles.module.css'

const BackgrundOverlay = () => {
  const [test, setTest] = useState<number>(0)

  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleBackgroundSize = () => {
      backgroundRef.current && setTest(backgroundRef.current.offsetHeight)
    }

    handleBackgroundSize()
    const handleResize = () => handleBackgroundSize()
    const resizeObserver = new ResizeObserver(handleResize)
    if (backgroundRef?.current) resizeObserver.observe(backgroundRef?.current)

    return () => resizeObserver.disconnect()
  }, [])

  const { scrollYProgress } = useScroll({ target: backgroundRef })
  const velocity = useVelocity(scrollYProgress)

  const y = useTransform(scrollYProgress, [0, 1], [-test / 10, test / 10])
  const opacity = useTransform(velocity, [1, 0, -1], [1, 0.5, 1], {
    clamp: false,
  })

  return (
    <div className={styles.background} ref={backgroundRef}>
      <motion.div className={clsx(styles.overlay, styles.stars)} style={{ y, opacity }}></motion.div>
      <motion.div className={clsx(styles.overlay, styles.twinkling)} style={{ y }}></motion.div>
    </div>
  )
}

export default BackgrundOverlay
