import React, { memo } from 'react'
import Link from 'next/link'
import { ImageSvg } from 'components'
import { useCursorContext } from 'contexts'

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
            <div className={styles.logo}>
              <ImageSvg src={logo} alt='' fullWidth />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
