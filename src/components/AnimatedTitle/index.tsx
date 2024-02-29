import React, { ReactNode, memo } from 'react'
import clsx from 'clsx'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { springConfig } from 'animations'

import styles from './styles.module.css'

export type ComponentProps = {
  children?: ReactNode
  animationDirection?: 'ltr' | 'rtl'
  animationStartPosition?: number
  animationEndPosition?: number
}

const AnimatedTitle = ({
  children,
  animationDirection = 'ltr',
  animationStartPosition = 0,
  animationEndPosition = 0,
}: ComponentProps) => {
  const { scrollY } = useScroll()
  const transformX = useSpring(scrollY, springConfig)

  const fillProgress = useTransform(transformX, [animationStartPosition, animationEndPosition], ['0%', '100%'])
  const test = useTransform(
    transformX,
    [animationStartPosition, animationEndPosition],
    [animationDirection === 'ltr' ? '40px' : '-40px', '0px'],
  )

  return (
    <motion.div
      className={clsx(styles.titleBox, {
        [styles.ltr]: animationDirection === 'ltr',
        [styles.rtl]: animationDirection === 'rtl',
      })}
      style={{ x: test }}
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
