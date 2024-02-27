import { Variants } from 'framer-motion'
import { springConfig } from 'animations'


type animationTypes = {
  logoVariant: Variants
  btnVariant: Variants
}

const animations: animationTypes = {
  logoVariant: {
    initial: {
      x: '-100%',
    },
    animate: {
      x: '0',
      transition: {
        delay: 3.8,
        duration: 1.2,
        type: 'spring',
        bounce: 0,
        ...springConfig
      },
    },
  },
  btnVariant: {
    initial: {
      opacity: 0,
      scale: 0.4,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 4.2,
        duration: 0.8,
        type: 'spring',
        ...springConfig
      },
    },
  },
}

export default animations
