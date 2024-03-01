import React, { memo } from 'react'
import { VelocityAnimation, ImageSvg } from 'components'

import styles from './styles.module.css'

import logo1 from 'assets/images/uploads/technologies/logo-angular-white.svg'
import logo2 from 'assets/images/uploads/technologies/logo-apple-white.svg'
import logo3 from 'assets/images/uploads/technologies/logo-css3-white.svg'
import logo4 from 'assets/images/uploads/technologies/logo-flutter-white.svg'
import logo5 from 'assets/images/uploads/technologies/logo-go-white.svg'
import logo6 from 'assets/images/uploads/technologies/logo-html5-white.svg'
import logo7 from 'assets/images/uploads/technologies/logo-ionic-white.svg'
import logo8 from 'assets/images/uploads/technologies/logo-java-white.svg'
import logo9 from 'assets/images/uploads/technologies/logo-javascript-white.svg'
import logo10 from 'assets/images/uploads/technologies/logo-mongodb-white.svg'
import logo11 from 'assets/images/uploads/technologies/logo-mysql-white.svg'
import logo12 from 'assets/images/uploads/technologies/logo-node-white.svg'
import logo13 from 'assets/images/uploads/technologies/logo-php-white.svg'
import logo14 from 'assets/images/uploads/technologies/logo-postgresql-white.svg'
import logo15 from 'assets/images/uploads/technologies/logo-react-white.svg'
import logo16 from 'assets/images/uploads/technologies/logo-ruby-white.svg'

const Images = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <ImageSvg src={logo1} alt='' fullHeight />
      </div>
      <div className={styles.img}>
        <ImageSvg src={logo2} alt='' fullHeight />
      </div>
      <div className={styles.img}>
        <ImageSvg src={logo3} alt='' fullHeight />
      </div>
      <div className={styles.img}>
        <ImageSvg src={logo4} alt='' fullHeight />
      </div>
      <div className={styles.img}>
        <ImageSvg src={logo5} alt='' fullHeight />
      </div>
      <div className={styles.img}>
        <ImageSvg src={logo6} alt='' fullHeight />
      </div>
      <div className={styles.img}>
        <ImageSvg src={logo7} alt='' fullHeight />
      </div>
      <div className={styles.img}>
        <ImageSvg src={logo8} alt='' fullHeight />
      </div>
      <div className={styles.img}>
        <ImageSvg src={logo9} alt='' fullHeight />
      </div>
      <div className={styles.img}>
        <ImageSvg src={logo10} alt='' fullHeight />
      </div>
      <div className={styles.img}>
        <ImageSvg src={logo11} alt='' fullHeight />
      </div>
      <div className={styles.img}>
        <ImageSvg src={logo12} alt='' fullHeight />
      </div>
      <div className={styles.img}>
        <ImageSvg src={logo13} alt='' fullHeight />
      </div>
      <div className={styles.img}>
        <ImageSvg src={logo14} alt='' fullHeight />
      </div>
      <div className={styles.img}>
        <ImageSvg src={logo15} alt='' fullHeight />
      </div>
      <div className={styles.img}>
        <ImageSvg src={logo16} alt='' fullHeight />
      </div>
    </div>
  )
}

const Technologies = () => {
  return (
    <section className={styles.technologies}>
      <VelocityAnimation baseVelocity={-1}>
        <Images />
      </VelocityAnimation>
    </section>
  )
}

export default memo(Technologies)
