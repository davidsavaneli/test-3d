import React, { memo } from 'react'
import Image, { ImageProps } from 'next/image'
import clsx from 'clsx'
import styles from './styles.module.css'

type ComponentProps = ImageProps & {
  fullWidth?: boolean
  fullHeight?: boolean
}

const ImageSvg = ({ fullWidth = false, fullHeight = false, ...props }: ComponentProps) => {
  return (
    <Image
      className={clsx(styles.image, { [styles.fullWidth]: fullWidth, [styles.fullHeight]: fullHeight })}
      {...props}
      alt={props.alt}
    />
  )
}

export default memo(ImageSvg)
