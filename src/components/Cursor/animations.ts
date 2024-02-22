import { Variants } from 'framer-motion'

type animationTypes = {
  additionalTextVariant: Variants
}

const animations: animationTypes = {
  additionalTextVariant: {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.4,
        delay: 0.2
      },
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.2
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0,
        delay: 0
      },
    },
  },
}

export default animations
