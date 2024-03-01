import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useCursorContext } from 'contexts'
import { MagneticLayout, ImageSvg } from 'components'

import styles from './styles.module.css'

import logoSrc from 'assets/images/logo-small.svg'

const ContactButton = () => {
  const [windowHeight, setWindowHeight] = useState<number>(0)

  useEffect(() => {
    const calculateSizes = () => {
      if (typeof window !== 'undefined') {
        setWindowHeight(window.innerHeight)
      }
    }

    calculateSizes()
    const handleResize = () => calculateSizes()
    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(document.documentElement)

    return () => resizeObserver.disconnect()
  }, [])

  const { setCursorStyle } = useCursorContext()

  const cursorProps = {
    onMouseOver: () => setCursorStyle('default'),
    onMouseOut: () => setCursorStyle('none'),
  }

  const { scrollY } = useScroll()

  const x = useTransform(scrollY, [0, windowHeight], ['300%', `0%`])

  return (
    <motion.div className={styles.button} {...cursorProps} style={{ x: x }}>
      <MagneticLayout>
        <div className={styles.buttonInner}>
          <div className={styles.innerLine}></div>
          <div className={styles.logo}>
            <ImageSvg src={logoSrc} alt='Techzy' fullWidth />
          </div>
          <div className={styles.roundedBox}>
            <svg viewBox='0 0 200 200'>
              <path
                id='textPath'
                d='M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0'
                transform='translate(100,100)'
                fill='none'
                strokeWidth='0'
              ></path>
              <g>
                <text textAnchor='start'>
                  <textPath className={styles.text} xlinkHref='#textPath' startOffset='0%'>
                    Let`s talk! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Let`s talk!
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Let`s talk!
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </textPath>
                </text>
              </g>
            </svg>
          </div>
        </div>
      </MagneticLayout>
    </motion.div>
  )
}

export default ContactButton
