import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedSubText, AnimatedTitle, Button } from 'components'

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
  const productItemRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({ target: productItemRef, offset: ['start end', 'end start'] })

  const InfoY = useTransform(scrollYProgress, [0, 1], ['-150px', `150px`])
  const ImageY = useTransform(scrollYProgress, [0, 1], ['150px', `-150px`])

  return (
    <motion.article className={styles.productItem} ref={productItemRef}>
      <div className={styles.productItemRow}>
        <div className={styles.productItemCol}>
          <motion.div className={styles.productItemInfo} style={{ y: InfoY }}>
            <div className={styles.productItemTitle}>
              <AnimatedTitle size='medium' disableX fontLowercase>
                Altfolio
              </AnimatedTitle>
            </div>
            <p className={styles.productItemDescription}>
              Track your net worth across alternative investments like precious metals and cryptocurrencies.
            </p>
            <p className={styles.productItemDescription}>UI Design, UX, Wireframe</p>
            <div className={styles.productItemButton}>
              <Button label='View More' />
            </div>
          </motion.div>
        </div>
        <div className={styles.productItemCol}>
          <motion.div className={styles.productItemImgBox} style={{ y: ImageY }}></motion.div>
        </div>
      </div>
    </motion.article>
  )
}

export default Projects
