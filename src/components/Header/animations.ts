import { Variants } from 'framer-motion'
import { springConfig } from 'animations'

type animationTypes = {
  logoVariant: Variants
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
        ...springConfig,
      },
    },
  },
}

export default animations
