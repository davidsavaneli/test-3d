import React, { useRef, ReactNode, memo } from 'react'
import clsx from 'clsx'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { springConfig } from 'animations'
import { useMediaQuery } from 'hooks'

import styles from './styles.module.css'

export type ComponentProps = {
  children?: ReactNode
  transformDirection?: 'ltr' | 'rtl'
  textAlign?: 'left' | 'right'
  size?: 'large' | 'medium'
  autoWidth?: boolean
  disableX?: boolean
  fontLowercase?: boolean
}

const AnimatedTitle = ({
  children,
  transformDirection = 'ltr',
  textAlign = 'left',
  size = 'large',
  autoWidth = false,
  disableX = false,
  fontLowercase = false,
}: ComponentProps) => {
  const isSmallLg = useMediaQuery('(max-width: 1439.98px)')

  const titleRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: titleRef, offset: ['end start', 'start end'] })
  const transformX = useSpring(scrollYProgress, springConfig)

  const clipPath = useTransform(
    transformX,
    [1, 0.5],
    [
      textAlign === 'left'
        ? 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
        : 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
      'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    ],
  )

  const AnimationValues = () => {
    const xValue = isSmallLg ? '30' : '40'

    const x = useTransform(
      transformX,
      [1, 0.5],
      [!disableX ? (transformDirection === 'ltr' ? `-${xValue}px` : `${xValue}px`) : '0px', '0px'],
    )

    return { x }
  }

  const { x } = AnimationValues()

  return (
    <motion.div
      className={clsx(styles.titleBox, {
        [styles.ltr]: transformDirection === 'ltr',
        [styles.rtl]: transformDirection === 'rtl',
        [styles.textAlignLeft]: textAlign === 'left',
        [styles.textAlignRight]: textAlign === 'right',
        [styles.sizeLarge]: size === 'large',
        [styles.sizeMedium]: size === 'medium',
        [styles.autoWidth]: autoWidth,
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
