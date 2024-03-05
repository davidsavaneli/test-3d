// import React, { useRef } from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import { AnimatedSubText, AnimatedTitle, Button, AnimatedImage } from 'components'

// import styles from './styles.module.css'

// const Team = () => {
//   return (
//     <div className={styles.teamSection}>
//       <div className='container'>
//         <div className='row'>
//           <div className='col-8'>
//             <div className={styles.titleBox}>
//               <AnimatedTitle animationDirection='rtl'>Our</AnimatedTitle>
//               <AnimatedTitle animationDirection='ltr'>Team</AnimatedTitle>
//             </div>
//           </div>
//           <div className='col-4'>
//             <AnimatedSubText>
//               We are a diverse group of digital specialists, building innovative brands and products.
//             </AnimatedSubText>
//           </div>
//         </div>
//       </div>
//       sdsd
//     </div>
//   )
// }

// export default Team

import React, { useRef, useEffect, useState, ReactNode } from 'react'
import { useMotionValue, motion, useSpring, useMotionValueEvent } from 'framer-motion'
import styles from './styles.module.css'

type TeamTypes = {
  children: ReactNode
  bounceStiffness?: number
  bounceDamping?: number
}

export const Team = ({ children, bounceStiffness = 100, bounceDamping = 10 }: TeamTypes) => {
  const ref = useRef<HTMLDivElement>(null)

  const transformX = useMotionValue<number>(0)
  const x = useSpring(transformX)

  const [sliderConstraints, setSliderConstraints] = useState<number>(0)

  useEffect(() => {
    const calculateSizes = () => {
      if (ref?.current) {
        setSliderConstraints(ref.current.scrollWidth - window.innerWidth)
        x.set(0)
      }
    }

    calculateSizes()
    const handleResize = () => calculateSizes()
    const resizeObserver = new ResizeObserver(handleResize)
    if (ref?.current) resizeObserver.observe(ref?.current)

    return () => resizeObserver.disconnect()
  })

  return (
    <div className={styles.sliderCont}>
      <motion.div
        ref={ref}
        drag='x'
        initial={{ x: 0 }}
        style={{ x }}
        dragConstraints={{
          left: -sliderConstraints,
          right: 0,
        }}
        dragTransition={{ bounceStiffness, bounceDamping }}
        className={styles.test}
      >
        {children}
      </motion.div>
    </div>
  )
}
