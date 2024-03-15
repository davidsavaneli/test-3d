import React, { useRef, ReactNode, memo } from 'react'
import clsx from 'clsx'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { springConfig } from 'animations'
import { useMediaQuery } from 'hooks'

import styles from './styles.module.css'

export type ComponentProps = {
  children?: ReactNode
  endPositionY?: number
  endPositionOpacity?: number
  startY?: string
  endY?: string
  size?: 'large' | 'medium'
  disableY?: boolean
}

const AnimatedSubText = ({
  children,
  endPositionY = 0.7,
  endPositionOpacity = 0.7,
  startY = '60px',
  endY = '-60px',
  size = 'large',
  disableY = false,
}: ComponentProps) => {
  const isTouchMode = useMediaQuery('(max-width: 1279.98px)')

  const animatedSubTextRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: animatedSubTextRef, offset: ['end start', 'start end'] })
  const transformX = useSpring(scrollYProgress, springConfig)

  const opacity = useTransform(transformX, [1, endPositionOpacity], ['0', '1'])
  const y = useTransform(
    transformX,
    [1, endPositionY],
    !isTouchMode
      ? [disableY ? '0px' : startY, disableY ? '0px' : endY]
      : [disableY ? '0px' : '20px', disableY ? '0px' : '-20px'],
  )

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
