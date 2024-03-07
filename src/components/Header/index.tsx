import React, { memo } from 'react'
import { motion } from 'framer-motion'
import { animateScroll as Scroll } from 'react-scroll'
import { ImageSvg } from 'components'
import { useCursorContext } from 'contexts'
import animations from './animations'

import styles from './styles.module.css'

import logo from 'assets/images/logo.svg'

const Header = () => {
  const { setCursorStyle } = useCursorContext()

  const cursorProps = {
    onMouseOver: () => setCursorStyle('default'),
    onMouseOut: () => setCursorStyle('none'),
  }

  const scrollToTop = () => {
    Scroll.scrollTo(0, {
      duration: 1000,
      smooth: 'easeOutQuad',
    })
  }

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className='row'>
          <div className='col-6 d-flex align-items-center'>
            <div className={styles.logoWrapper} {...cursorProps} onClick={() => scrollToTop()}>
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
            {/* <MagneticLayout>
              <motion.div
                className={styles.btn}
                variants={animations.btnVariant}
                initial='initial'
                animate='animate'
              ></motion.div>
            </MagneticLayout> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
