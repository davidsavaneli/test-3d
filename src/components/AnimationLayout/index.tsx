import React, { memo } from 'react'
import { motion } from 'framer-motion'
import animations from './animations'

type AnimationLayoutProps = {
  children: React.ReactNode
}

const AnimationLayout = ({ children }: AnimationLayoutProps) => {
  return (
    <React.Fragment>
      <motion.div variants={animations.layout} initial='hidden' animate='enter' exit='exit'>
        {children}
      </motion.div>
    </React.Fragment>
  )
}

export default memo<AnimationLayoutProps>(AnimationLayout)
