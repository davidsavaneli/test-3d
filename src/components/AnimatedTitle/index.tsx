import React, { useRef, ReactNode, memo } from 'react'
import clsx from 'clsx'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { springConfig } from 'animations'

import styles from './styles.module.css'

export type ComponentProps = {
  children?: ReactNode
  animationDirection?: 'ltr' | 'rtl'
  size?: 'large' | 'medium'
  disableX?: boolean
  fontLowercase?: boolean
}

const AnimatedTitle = ({
  children,
  animationDirection = 'ltr',
  size = 'large',
  disableX = false,
  fontLowercase = false,
}: ComponentProps) => {
  const titleRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: titleRef })
  const transformX = useSpring(scrollYProgress, springConfig)

  const clipPath = useTransform(
    transformX,
    [1, 0.5],
    ['polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'],
  )

  const x = !disableX
    ? useTransform(transformX, [1, 0.5], [animationDirection === 'ltr' ? '40px' : '-40px', '0px'])
    : undefined

  return (
    <motion.div
      className={clsx(styles.titleBox, {
        [styles.ltr]: animationDirection === 'ltr',
        [styles.rtl]: animationDirection === 'rtl',
        [styles.large]: size === 'large',
        [styles.medium]: size === 'medium',
        [styles.fontLowercase]: fontLowercase,
      })}
      style={{ x }}
      ref={titleRef}
    >
      <motion.div className={clsx(styles.title, styles.first)}>
        <span>{children}</span>
      </motion.div>
      <motion.div className={clsx(styles.title, styles.second)}>
        <motion.span style={{ clipPath: clipPath }}>{children}</motion.span>
      </motion.div>
    </motion.div>
  )
}

export default memo<ComponentProps>(AnimatedTitle)
