import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { animateScroll as Scroll } from 'react-scroll'
import { useCursorContext } from 'contexts'
import { useWindowSize } from 'hooks'
import { springConfig } from 'animations'

import styles from './styles.module.css'

const Landing = () => {
  const { setCursorStyle } = useCursorContext()
  const { width = 0, height = 0 } = useWindowSize()

  const x = useMotionValue(width / 2)
  const y = useMotionValue(height / 2)

  const hoverState = useMotionValue(0)

  const rotateY = useSpring(useTransform(x, [0, width], [8, -8]), springConfig)
  const rotateX = useSpring(useTransform(y, [0, height], [-8, 8]), springConfig)

  function handleMouse(event: any) {
    const rect = event.currentTarget.getBoundingClientRect()

    hoverState.set(1)
    x.set(event.clientX - rect.left)
    y.set(event.clientY - rect.top)
  }

  function mouseLeave() {
    hoverState.set(0)
    x.set(width / 2)
    y.set(height / 2)
  }

  const xx = document.getElementById('services-section')

  const scrollDown = () => {
    if (xx) {
      Scroll.scrollTo(xx.offsetTop, {
        duration: 1200,
        smooth: 'easeOutExpo',
      })
    }
  }

  return (
    <div className={styles.landing} onMouseLeave={mouseLeave} onMouseMove={handleMouse}>
      <div className={styles.wrapper}>
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
          <div className={styles.text}>
            We roar with success, delivering the TECHZY through versatile design, branding and the latest tech
            development to companies.
          </div>
        </motion.div>
      </div>
      <div className={styles.test} onClick={() => scrollDown()}>Scroll</div>
    </div>
  )
}

export default Landing
