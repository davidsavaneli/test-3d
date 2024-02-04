import React, { memo } from 'react'
import Image, { ImageProps } from 'next/image'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import styles from './styles.module.css'

import logo from 'assets/images/logo.svg'

export type ComponentProps = ImageProps & {
  fullWidth?: boolean
  fullHeight?: boolean
}

const ImageSvg = ({ fullWidth = false, fullHeight = false, ...props }: ComponentProps) => {
  return (
    <Image
      className={clsx(styles.image, { [styles.fullWidth]: fullWidth, [styles.fullHeight]: fullHeight })}
      {...props}
    />
  )
}

export default memo(ImageSvg)
