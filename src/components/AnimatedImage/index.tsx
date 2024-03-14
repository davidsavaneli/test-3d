import React, { memo } from 'react'
import Image, { ImageProps } from 'next/image'
import clsx from 'clsx'

import styles from './styles.module.css'

type ComponentProps = ImageProps & {
  fullWidth?: boolean
}

const AnimatedImage = ({ fullWidth, ...props }: ComponentProps) => {
  return (
    <div className={clsx(styles.image, { [styles.fullWidth]: fullWidth })}>
      <Image {...props} />
    </div>
  )
}

export default memo<ComponentProps>(AnimatedImage)
