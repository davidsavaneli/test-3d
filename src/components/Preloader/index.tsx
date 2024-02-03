import React, { memo } from 'react'
import { motion } from 'framer-motion'
import animations from './animations'

import styles from './styles.module.css'

export type PreloaderProps = {
  children?: React.ReactNode
}

const Preloader = ({ children }: PreloaderProps) => {
  return (
    <div className={styles.test}>
      <motion.div variants={animations.layout} initial='hidden' animate='enter' exit='exit'>
        Preloader ...
      </motion.div>
    </div>
  )
}

export default memo<PreloaderProps>(Preloader)