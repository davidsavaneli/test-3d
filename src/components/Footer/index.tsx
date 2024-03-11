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
          <div className={styles.topItem}>
            <div className={styles.topItemLabel}>Email:</div>
            <a
              href='mailto:someone@example.com'
              target='_blank'
              className={styles.topItemValue}
              {...smallTextCursorProps}
            >
              Send email
            </a>
          </div>
          <div className={styles.topItem}>
            <div className={styles.topItemLabel}>Phone:</div>
            <a href='tel:+995551318884' target='_blank' className={styles.topItemValue} {...smallTextCursorProps}>
              +995 551 31 88 84
            </a>
          </div>
          <div className={styles.topItem}>
            <div className={styles.topItemLabel}>Address:</div>
            <a
              href='https://maps.app.goo.gl/44VaNYLndFg1wDrWA'
              target='_blank'
              className={styles.topItemValue}
              {...smallTextCursorProps}
            >
              80 Chavchavadze ave, 0162, Tbilisi, Georgia
            </a>
          </div>
        </div>
        <div className={styles.middle}>
          <div className='row'>
            <div className='col-6 d-flex align-items-center'>
              <Link href='./' className={styles.logo} {...logoCursorProps} scroll={false}>
                <ImageSvg src={logoSrc} alt='Techzy' fullHeight />
              </Link>
              <div className={styles.links}>
                <Link className={styles.link} href='./privacy-policy' {...smallTextCursorProps} scroll={false}>
                  Privacy Policy
                </Link>
                <Link className={styles.link} href='./terms-and-conditions' {...smallTextCursorProps} scroll={false}>
                  Terms & Conditions
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
          <div className={styles.copyrightTitle}>
            &copy; {new Date().getFullYear()} Techzy Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
