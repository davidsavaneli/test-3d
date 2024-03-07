import React, { memo } from 'react'
import Link from 'next/link'
import { useCursorContext } from 'contexts'
import { ImageSvg } from 'components'

import styles from './styles.module.css'

import logoSrc from 'assets/images/logo-small.svg'

const Footer = () => {
  const { setCursorStyle } = useCursorContext()

  const smallTextCursorProps = {
    onMouseOver: () => setCursorStyle('smallText'),
    onMouseOut: () => setCursorStyle('none'),
  }

  const logoCursorProps = {
    onMouseOver: () => setCursorStyle('default'),
    onMouseOut: () => setCursorStyle('none'),
  }

  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.top}>
          <div className='row'>
            <div className='col-6 d-flex align-items-center'>
              <Link href='./' className={styles.logo} {...logoCursorProps}>
                <ImageSvg src={logoSrc} alt='Techzy' fullHeight />
              </Link>
              <div className={styles.links}>
                <Link className={styles.link} href='./privacy-policy' {...smallTextCursorProps}>
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className='col-6 d-flex align-items-center justify-content-end'>
              <div className={styles.socials}>
                <Link
                  className={styles.link}
                  href='https://www.linkedin.com/company/techzy1/'
                  target='_blank'
                  {...smallTextCursorProps}
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <div className={styles.copyrightTitle}>&copy; {new Date().getFullYear()} Techzy Inc. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
