import React, { useRef, ReactNode, memo } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { springConfig } from 'animations'

import styles from './styles.module.css'

export type ComponentProps = {
  children?: ReactNode
}

const AnimatedSubText = ({ children }: ComponentProps) => {
  const animatedSubTextRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: animatedSubTextRef })
  const transformX = useSpring(scrollYProgress, springConfig)

  const opacity = useTransform(transformX, [1, 0.7], ['0', '1'])
  const y = useTransform(transformX, [1, 0.7], ['100px', '0px'])

  return (
    <motion.div ref={animatedSubTextRef} className={styles.animatedSubText} style={{ opacity, y }}>
      {children}
    </motion.div>
  )
}

export default memo<ComponentProps>(AnimatedSubText)
