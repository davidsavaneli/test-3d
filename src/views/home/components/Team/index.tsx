import React, { useRef } from 'react'
import { AnimatedSubText, AnimatedTitle, HorizontalDragCarousell, AnimatedImage } from 'components'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { teamData } from 'testData'
import { teamDataTypes } from 'types'
import { springConfig } from 'animations'

import styles from './styles.module.css'

const Team = () => {
  const sliderRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: sliderRef, offset: ['end start', 'start end'] })
  const transformX = useSpring(scrollYProgress, springConfig)

  const y = useTransform(transformX, [1, 0], ['80px', '-80px'])

  return (
    <div className={styles.teamSection}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-8'>
            <div className={styles.titleBox}>
              <AnimatedTitle animationDirection='rtl'>Our</AnimatedTitle>
              <AnimatedTitle animationDirection='ltr'>Team</AnimatedTitle>
            </div>
          </div>
          <div className='col-4'>
            <AnimatedSubText endPositionY={0}>
              We are a diverse group of digital specialists, building innovative brands and products.
            </AnimatedSubText>
          </div>
        </div>
      </div>
      <motion.div className={styles.slider} ref={sliderRef} style={{ y }}>
        <HorizontalDragCarousell>
          <div className={styles.slideSpace}></div>
          {teamData.map((o: teamDataTypes, index) => {
            return (
              <React.Fragment key={index}>
                <TeamItem data={o} key={o.id} />
              </React.Fragment>
            )
          })}
          <div className={styles.slideSpace}></div>
        </HorizontalDragCarousell>
      </motion.div>
    </div>
  )
}

type TeamItemProps = {
  data: teamDataTypes
}

const TeamItem = ({ data }: TeamItemProps) => {
  return (
    <div className={styles.slide}>
      <div className={styles.slideItem}>
        <div className={styles.slideImgBox}>
          <AnimatedImage src={data.image.src} alt={data.image.alt} />
        </div>
        <div className={styles.slideInfo}>
          <div className={styles.slideName}>{data.name}</div>
          <div className={styles.slidePosition}>{data.position}</div>
        </div>
      </div>
    </div>
  )
}

export default Team
