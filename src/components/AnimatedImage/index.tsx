import React, { useRef, ReactNode, memo } from 'react'
import Image, { ImageProps } from 'next/image'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'

import styles from './styles.module.css'

type ComponentProps = ImageProps & {
  fullWidth?: boolean
}

const AnimatedImage = ({ fullWidth, ...props }: ComponentProps) => {
  const imageRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['start end', 'end start'] })

  const y = useTransform(scrollYProgress, [0, 1], ['-100px', `100px`])

  // TODO
  return (
    <motion.div className={clsx(styles.image)} ref={imageRef}>
      <Image {...props} />
    </motion.div>
  )
}

export default memo<ComponentProps>(AnimatedImage)
