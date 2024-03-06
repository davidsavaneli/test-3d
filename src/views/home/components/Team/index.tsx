import React from 'react'
import { AnimatedSubText, AnimatedTitle, HorizontalDragCarousell, AnimatedImage } from 'components'
import { teamData } from 'testData'
import { teamDataTypes } from 'types'

import styles from './styles.module.css'

const Team = () => {
  return (
    <div className={styles.teamSection}>
      <div className='container'>
        <div className='row'>
          <div className='col-8'>
            <div className={styles.titleBox}>
              <AnimatedTitle animationDirection='rtl'>Our</AnimatedTitle>
              <AnimatedTitle animationDirection='ltr'>Team</AnimatedTitle>
            </div>
          </div>
          <div className='col-4'>
            <AnimatedSubText>
              We are a diverse group of digital specialists, building innovative brands and products.
            </AnimatedSubText>
          </div>
        </div>
      </div>
      <div className={styles.slider}>
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
      </div>
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
