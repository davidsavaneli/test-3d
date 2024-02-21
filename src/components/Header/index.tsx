import React, { memo } from 'react'
import { motion } from 'framer-motion'
import { ImageSvg } from 'components'
import animations from './animations'

import styles from './styles.module.css'

import logo from 'assets/images/logo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className='row'>
          <div className='col-6 d-flex align-items-center'>
            <div className={styles.logoWrapper}>
              <motion.div
                className={styles.logo}
                variants={animations.logoVariant}
                initial='initial'
                animate='animate'
                data-cursor-exclusion
              >
                <ImageSvg src={logo} alt='' fullWidth />
              </motion.div>
            </div>
          </div>
          <div className='col-6 d-flex align-items-center justify-content-end'>
            <motion.div
              className={styles.btn}
              variants={animations.btnVariant}
              initial='initial'
              animate='animate'
            ></motion.div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
