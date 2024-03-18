import React, { useRef, memo } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import ScrollContainer from 'react-indiana-drag-scroll'
import { AnimatedSubText, AnimatedTitle, HorizontalDragCarousell, AnimatedImage } from 'components'
import { teamData } from 'testData'
import { teamDataTypes } from 'types'
import { springConfig } from 'animations'
import { useMediaQuery } from 'hooks'

import styles from './styles.module.css'

const Team = () => {
  const isTouchMode = useMediaQuery('(max-width: 1279.98px)')

  const sliderRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: sliderRef, offset: ['end start', 'start end'] })
  const transformX = useSpring(scrollYProgress, springConfig)

  const y = useTransform(transformX, [1, 0], isTouchMode ? ['50px', '-50px'] : ['80px', '-80px'])

  return (
    <div className={styles.teamSection}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-5'>
            <AnimatedSubText endPositionY={0}>
              We are a diverse group of digital specialists, building innovative brands and products.
            </AnimatedSubText>
          </div>
          <div className='col-7'>
            <div className={styles.titleBox}>
              <AnimatedTitle transformDirection='rtl'>Our</AnimatedTitle>
              <AnimatedTitle transformDirection='ltr'>Team</AnimatedTitle>
            </div>
          </div>
        </div>
      </div>
      <motion.div className={styles.slider} ref={sliderRef} style={{ y }}>
        {isTouchMode ? (
          <ScrollContainer className='scroll-container' vertical={false}>
            <div className={styles.respSlides}>
              {teamData.map((o: teamDataTypes, index) => {
                return (
                  <React.Fragment key={index}>
                    <TeamItem data={o} key={o.id} />
                  </React.Fragment>
                )
              })}
            </div>
          </ScrollContainer>
        ) : (
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
        )}
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

export default memo(Team)
