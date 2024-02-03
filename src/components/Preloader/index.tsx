import React, { memo } from 'react'
import { motion } from 'framer-motion'
import animations from './animations'

import styles from './styles.module.css'

const Preloader = () => {
  return (
    <motion.div className={styles.preloader} variants={animations.layout} initial='hidden' animate='enter' exit='exit'>
      Preloader ...
    </motion.div>
  )
}

export default memo(Preloader)
