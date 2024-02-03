import React, { memo } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import animations from './animations'

import logoSmall from 'assets/images/logo-small.svg'
import logoT from 'assets/images/logo-t.svg'
import logoE from 'assets/images/logo-e.svg'
import logoC from 'assets/images/logo-c.svg'
import logoH from 'assets/images/logo-h.svg'
import logoZ from 'assets/images/logo-z.svg'
import logoY from 'assets/images/logo-y.svg'
import logoCopy from 'assets/images/logo-copy.svg'

import styles from './styles.module.css'

const Preloader = () => {
  return (
    <motion.div
      className={styles.preloader}
      variants={animations.preloaderVariant}
      initial='hidden'
      animate='enter'
      exit='exit'
    >
      <div className={styles.logoWrapper}>
        <motion.div className={styles.logo} variants={animations.logoVariant} exit='exit' initial='initial'>
          <motion.div
            className={clsx(styles.image, styles.logoSmall)}
            variants={animations.logoSmallVariant}
            animate='animate'
          >
            <Image src={logoSmall} alt='' />
          </motion.div>
          <motion.div className={clsx(styles.image, styles.logoT)} variants={animations.logoTVariant} animate='animate'>
            <Image src={logoT} alt='' />
          </motion.div>
          <motion.div className={clsx(styles.image, styles.logoE)} variants={animations.logoEVariant} animate='animate'>
            <Image src={logoE} alt='' />
          </motion.div>
          <motion.div className={clsx(styles.image, styles.logoC)} variants={animations.logoCVariant} animate='animate'>
            <Image src={logoC} alt='' />
          </motion.div>
          <motion.div className={clsx(styles.image, styles.logoH)} variants={animations.logoHVariant} animate='animate'>
            <Image src={logoH} alt='' />
          </motion.div>
          <motion.div className={clsx(styles.image, styles.logoZ)} variants={animations.logoZVariant} animate='animate'>
            <Image src={logoZ} alt='' />
          </motion.div>
          <motion.div className={clsx(styles.image, styles.logoY)} variants={animations.logoYVariant} animate='animate'>
            <Image src={logoY} alt='' />
          </motion.div>
          <motion.div
            className={clsx(styles.image, styles.logoCopy)}
            variants={animations.logoCopyVariant}
            animate='animate'
          >
            <Image src={logoCopy} alt='' />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default memo(Preloader)
