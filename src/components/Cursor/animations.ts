import { Variants } from 'framer-motion'

type animationTypes = {
  additionalTextVariant: Variants
  dragIconVariant: Variants
}

const animations: animationTypes = {
  additionalTextVariant: {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.4,
        delay: 0.2,
      },
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0,
        delay: 0,
      },
    },
  },
  dragIconVariant: {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.1,
        type: 'spring',
        damping: 10,
      },
    },
    exit: {
      opacity: 0,
    },
  },
}

export default animations
