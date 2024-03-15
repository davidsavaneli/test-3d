import React, { useRef, useState, memo } from 'react'
import { motion } from 'framer-motion'
import { springConfig } from 'animations'
import { useMediaQuery } from 'hooks'

import styles from './styles.module.css'

type MagneticLayoutProps = {
  children: React.ReactNode
}

const MagneticLayout = ({ children }: MagneticLayoutProps) => {
  const isTouchMode = useMediaQuery('(max-width: 1279.98px)')

  const ref = useRef<HTMLDivElement>(null)

  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (ref.current) {
      const { clientX, clientY } = e

      const { height, width, left, top } = ref.current.getBoundingClientRect()

      const middleX = clientX - (left + width / 2)
      const middleY = clientY - (top + height / 2)

      setPosition({ x: !isTouchMode ? middleX : 0, y: !isTouchMode ? middleY : 0 })
    }
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  return (
    <React.Fragment>
      <motion.div
        className={styles.magneticLayout}
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x, y }}
        transition={{ type: 'spring', ...springConfig }}
      >
        {children}
      </motion.div>
    </React.Fragment>
  )
}

export default memo<MagneticLayoutProps>(MagneticLayout)
