import React, { memo } from 'react'
import { motion } from 'framer-motion'
import { useWindowSize } from 'hooks'
import animations from './animations'
import styles from './styles.module.css'

type AnimationLayoutProps = {
  children: React.ReactNode
}

const AnimationLayout = ({ children }: AnimationLayoutProps) => {
  const { windowWidth, windowHeight } = useWindowSize()

  return (
    <React.Fragment>
      <SVG width={windowWidth} height={windowHeight} />
      <motion.div variants={animations.layout} initial='hidden' animate='enter' exit='exit'>
        {children}
      </motion.div>
    </React.Fragment>
  )
}

type SVGProps = {
  width: number
  height: number
}

const SVG = ({ height, width }: SVGProps) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `

  return (
    <motion.svg className={styles.svg} variants={animations.svg} initial='initial' animate='enter' exit='exit'>
      <motion.path
        initial={{ d: initialPath }}
        animate={{ d: targetPath, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
        exit={{ d: initialPath, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
      />
    </motion.svg>
  )
}

export default memo<AnimationLayoutProps>(AnimationLayout)
