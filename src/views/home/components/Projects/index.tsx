import React, { useRef, useEffect, useState } from 'react'
import { motion, useTransform, useScroll, useSpring, useVelocity } from 'framer-motion'
import { AnimatedTitle } from 'components'
import { springConfig } from 'animations'

import styles from './styles.module.css'

const Projects = () => {
  const [startPos, setStartPos] = useState<number>(0)
  const [endPos, setEndPos] = useState<number>(0)

  const productsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const calculateSizes = () => {
      if (productsRef?.current) {
        const pos = productsRef.current.offsetTop - window.innerHeight

        setStartPos(pos)
        setEndPos(pos + 500)
      }
    }

    calculateSizes()
    const handleResize = () => calculateSizes()
    const resizeObserver = new ResizeObserver(handleResize)
    if (productsRef?.current) resizeObserver.observe(productsRef?.current)

    return () => resizeObserver.disconnect()
  })

  const { scrollYProgress } = useScroll({target: productsRef})

  const transformY = useSpring(scrollYProgress, springConfig)

  const headlineSectionTextY = useTransform(transformY, [0.5, 1], ['-100px', '0px'])
  const headlineSectionTextOpacity = useTransform(transformY, [0.5, 1], ['1', '0'])

  return (
    <div className={styles.projectsSection} ref={productsRef}>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <motion.div
              className={styles.headlineSectionText}
              style={{ y: headlineSectionTextY, opacity: headlineSectionTextOpacity }}
            >
              Our software solutions amplify opportunities for venture and private equity firms, regardless of stage or
              provided timeline.
            </motion.div>
          </div>
          <div className='col-8'>
            <div className={styles.titleBox}>
              <AnimatedTitle animationDirection='rtl'>
                Our
              </AnimatedTitle>
              <AnimatedTitle animationDirection='ltr'>
                Works
              </AnimatedTitle>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className={styles.items}>
          <ProductItem />
        </div>
      </div>
    </div>
  )
}

type ProductItemProps = {
  label?: string
}

const ProductItem = ({ label }: ProductItemProps) => {
  return (
    <motion.div className={styles.productItem}>
      <div className={styles.productItemRow}>
        <div className={styles.productItemCol}>left</div>
        <div className={styles.productItemCol}>right</div>
      </div>
    </motion.div>
  )
}

export default Projects
