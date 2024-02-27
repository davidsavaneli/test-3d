import React, { memo, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useVelocity } from 'framer-motion'
import clsx from 'clsx'

import styles from './styles.module.css'

const BackgrundOverlay = () => {
  const [bodyHeight, setBodyHeight] = useState<number>(0)

  useEffect(() => {
    const handleBodySize = () => setBodyHeight(document.body.clientHeight)

    handleBodySize()
    const handleResize = () => handleBodySize()
    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(document.body)

    return () => resizeObserver.disconnect()
  }, [])

  const { scrollY } = useScroll()

  const y = useTransform(scrollY, [0, bodyHeight], [-3000, 3000])

  const scrollVelocity = useVelocity(scrollY)

  const opacity = useTransform(scrollVelocity, [3000, 0, -3000], [1, 0.5, 1], {
    clamp: false,
  })

  return (
    <div className={styles.background}>
      <motion.div className={clsx(styles.overlay, styles.stars)} style={{ y, opacity: opacity }}></motion.div>
      <motion.div className={clsx(styles.overlay, styles.twinkling)} style={{ y }}></motion.div>
    </div>
  )
}

export default memo(BackgrundOverlay)
