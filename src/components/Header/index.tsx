import React, { memo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
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

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.wrapper}>
          <Link href='./' className={styles.logoWrapper} {...cursorProps} scroll={false}>
            <motion.div
              className={styles.logo}
              variants={animations.logoVariant}
              initial='initial'
              animate='animate'
              data-cursor-exclusion
            >
              <ImageSvg src={logo} alt='' fullWidth />
            </motion.div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
