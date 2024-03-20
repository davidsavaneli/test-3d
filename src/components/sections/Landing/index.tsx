import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
import { animateScroll as Scroll } from 'react-scroll'
import { useCursorContext } from 'contexts'
import { useMediaQuery, useWindowSize } from 'hooks'
import { springConfig } from 'animations'
import { ImageSvg, MagneticLayout, Button } from 'components'

import styles from './styles.module.css'

import arrowDownSrc from 'assets/images/arrow-down.svg'

const Landing = () => {
  const isTouchMode = useMediaQuery('(max-width: 1279.98px)')

  const { windowWidth, windowHeight } = useWindowSize()

  const landingRef = useRef<HTMLDivElement>(null)
  const { setCursorStyle } = useCursorContext()

  const x = useMotionValue(windowWidth / 2)
  const y = useMotionValue(windowHeight / 2)

  const hoverState = useMotionValue(0)

  function handleMouse(event: any) {
    const rect = event.currentTarget.getBoundingClientRect()

    hoverState.set(1)
    x.set(event.clientX - rect.left)
    y.set(event.clientY - rect.top)
  }

  function mouseLeave() {
    hoverState.set(0)
    x.set(windowWidth / 2)
    y.set(windowHeight / 2)
  }

  const projectsVideoSectionEl = document.getElementById('video-section')

  const scrollDown = () => {
    if (projectsVideoSectionEl) {
      const scrollH = isTouchMode ? projectsVideoSectionEl.offsetTop - 100 : projectsVideoSectionEl.offsetTop
      Scroll.scrollTo(scrollH, {
        duration: isTouchMode ? 800 : 1200,
        smooth: 'easeOutQuad',
      })
    }
  }

  const { scrollYProgress } = useScroll({ target: landingRef, offset: ['start end', 'end start'] })

  const AnimationValues = () => {
    const wrapperScaleValue = isTouchMode ? ['1', '1'] : ['2', '0']
    const wrapperYValue = isTouchMode ? ['0', '0'] : ['-300px', '300px']
    const wrapperOpacityValue = isTouchMode ? ['1', '1'] : ['3', '-1']
    const rotateValue = isTouchMode ? 0 : 8

    const wrapperScale = useTransform(scrollYProgress, [0, 1], wrapperScaleValue)
    const wrapperY = useTransform(scrollYProgress, [0, 1], wrapperYValue)
    const wrapperOpacity = useTransform(scrollYProgress, [0, 1], wrapperOpacityValue)

    const rotateY = useSpring(useTransform(x, [0, windowWidth], [rotateValue, -rotateValue]), springConfig)
    const rotateX = useSpring(useTransform(y, [0, windowHeight], [-rotateValue, rotateValue]), springConfig)

    return { wrapperScale, wrapperY, wrapperOpacity, rotateY, rotateX }
  }

  const { wrapperScale, wrapperY, wrapperOpacity, rotateY, rotateX } = AnimationValues()

  return (
    <div className={styles.landing} onMouseLeave={mouseLeave} onMouseMove={handleMouse} ref={landingRef}>
      <motion.div className={styles.wrapper} style={{ scale: wrapperScale, y: wrapperY, opacity: wrapperOpacity }}>
        <motion.div
          className={styles.inner}
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
          }}
        >
          <motion.h1
            className={styles.title}
            onMouseOver={() => setCursorStyle('largeText')}
            onMouseOut={() => setCursorStyle('none')}
            whileHover={{
              scale: 1.08,
            }}
            transition={{
              duration: 0.6,
              springConfig,
            }}
          >
            Tech Zone for You
          </motion.h1>
          <motion.div className={styles.text}>
            We roar with success, delivering the TECHZY through versatile design, branding and the latest tech
            development to companies.
          </motion.div>
          {isTouchMode && (
            <div className={styles.scrollDownBtnBox}>
              <MagneticLayout>
                <motion.div
                  className={styles.scrollDownBtn}
                  onClick={() => scrollDown()}
                  onMouseOver={() => setCursorStyle('default')}
                  onMouseOut={() => setCursorStyle('none')}
                  whileTap={{ scale: 0.9 }}
                >
                  <ImageSvg src={arrowDownSrc} alt='Scroll Down' fullWidth />
                </motion.div>
              </MagneticLayout>
            </div>
          )}
        </motion.div>
      </motion.div>
      {!isTouchMode && (
        <div className={styles.scrollDownBtnBox}>
          <MagneticLayout>
            <motion.div
              className={styles.scrollDownBtn}
              onClick={() => scrollDown()}
              onMouseOver={() => setCursorStyle('default')}
              onMouseOut={() => setCursorStyle('none')}
              whileTap={{ scale: 0.9 }}
            >
              <ImageSvg src={arrowDownSrc} alt='Scroll Down' fullWidth />
            </motion.div>
          </MagneticLayout>
        </div>
      )}
      <div className={styles.contactBtnBox}>
        <Button label='Get in touch' href='./contact' />
      </div>
    </div>
  )
}

export default Landing
