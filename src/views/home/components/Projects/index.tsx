import React, { useRef, useEffect, useState } from 'react'
import { motion, useTransform, useScroll, useSpring, useVelocity } from 'framer-motion'
import { AnimatedSubText, AnimatedTitle } from 'components'
import { springConfig } from 'animations'

import styles from './styles.module.css'

const Projects = () => {
  const productsRef = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.projectsSection} ref={productsRef}>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <AnimatedSubText>
              Our software solutions amplify opportunities for venture and private equity firms, regardless of stage or
              provided timeline.
            </AnimatedSubText>
          </div>
          <div className='col-8'>
            <div className={styles.titleBox}>
              <AnimatedTitle animationDirection='rtl'>Our</AnimatedTitle>
              <AnimatedTitle animationDirection='ltr'>Works</AnimatedTitle>
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
