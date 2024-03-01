import React, { useRef, ReactNode, memo } from 'react'
import clsx from 'clsx'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { springConfig } from 'animations'

import styles from './styles.module.css'

export type ComponentProps = {
  children?: ReactNode
  animationDirection?: 'ltr' | 'rtl'
}

const AnimatedTitle = ({ children, animationDirection = 'ltr' }: ComponentProps) => {
  const titleRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: titleRef })
  const transformX = useSpring(scrollYProgress, springConfig)

  const fillProgress = useTransform(transformX, [1, 0.7], ['0%', '100%'])
  const x = useTransform(transformX, [1, 0.7], [animationDirection === 'ltr' ? '40px' : '-40px', '0px'])

  return (
    <motion.div
      className={clsx(styles.titleBox, {
        [styles.ltr]: animationDirection === 'ltr',
        [styles.rtl]: animationDirection === 'rtl',
      })}
      style={{ x }}
      ref={titleRef}
    >
      <motion.div className={clsx(styles.title, styles.first)}>
        <span>{children}</span>
      </motion.div>
      <motion.div className={clsx(styles.title, styles.second)}>
        <motion.span style={{ width: fillProgress }}>{children}</motion.span>
      </motion.div>
    </motion.div>
  )
}

export default memo<ComponentProps>(AnimatedTitle)
