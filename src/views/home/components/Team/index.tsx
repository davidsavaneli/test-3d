import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedSubText, AnimatedTitle, Button, AnimatedImage } from 'components'

import styles from './styles.module.css'

const Team = () => {
  return (
    <div className={styles.teamSection}>
      <div className='container'>
        <div className='row'>
          <div className='col-8'>
            <div className={styles.titleBox}>
              <AnimatedTitle animationDirection='rtl'>Our</AnimatedTitle>
              <AnimatedTitle animationDirection='ltr'>Team</AnimatedTitle>
            </div>
          </div>
          <div className='col-4'>
            <AnimatedSubText>
              We are a diverse group of digital specialists, building innovative brands and products.
            </AnimatedSubText>
          </div>
        </div>
      </div>
      sdsd
    </div>
  )
}

export default Team
