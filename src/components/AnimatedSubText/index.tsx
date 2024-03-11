import React, { useRef, ReactNode, memo } from 'react'
import clsx from 'clsx'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { springConfig } from 'animations'

import styles from './styles.module.css'

export type ComponentProps = {
  children?: ReactNode
  endPositionY?: number
  endPositionOpacity?: number
  startY?: string
  endY?: string
  size?: 'large' | 'medium'
}

const AnimatedSubText = ({
  children,
  endPositionY = 0.7,
  endPositionOpacity = 0.7,
  startY = '80px',
  endY = '-80px',
  size = 'large',
}: ComponentProps) => {
  const animatedSubTextRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: animatedSubTextRef, offset: ['end start', 'start end'] })
  const transformX = useSpring(scrollYProgress, springConfig)

  const opacity = useTransform(transformX, [1, endPositionOpacity], ['0', '1'])
  const y = useTransform(transformX, [1, endPositionY], [startY, endY])

  return (
    <motion.div
      ref={animatedSubTextRef}
      style={{ opacity, y }}
      className={clsx(styles.animatedSubText, {
        [styles.large]: size === 'large',
        [styles.medium]: size === 'medium',
      })}
    >
      {children}
    </motion.div>
  )
}

export default memo<ComponentProps>(AnimatedSubText)
