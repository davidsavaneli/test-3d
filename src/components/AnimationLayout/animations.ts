import { Variants } from 'framer-motion'

type animationTypes = {
  svg: Variants
  layout: Variants
}

const animations: animationTypes = {
  layout: {
    hidden: {
      opacity: 0,
      y: '50px',
      transition: {
        duration: 0.6,
      },
    },
    enter: {
      opacity: 1,
      y: '0',
      transition: {
        duration: 1.2,
        delay: 0.4,
      },
    },
    exit: {
      opacity: 0,
      y: '0',
      transition: {
        duration: 0.6,
      },
    },
  },
  svg: {
    initial: {
      top: '-300px',
    },
    enter: {
      top: '-100vh',
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
      transitionEnd: {
        top: '100vh',
      },
    },
    exit: {
      top: '-300px',
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
  },
}

export default animations
