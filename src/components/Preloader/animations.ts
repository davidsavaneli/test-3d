import { Variants } from 'framer-motion'

type animationTypes = {
  logoOverlayVariant: Variants
  logoVariant: Variants
  logoSmallVariant: Variants
  logoTVariant: Variants
  logoEVariant: Variants
  logoCVariant: Variants
  logoHVariant: Variants
  logoZVariant: Variants
  logoYVariant: Variants
  logoCopyVariant: Variants
}

const animations: animationTypes = {
  logoOverlayVariant: {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.6,
        type: 'spring',
      },
    },
  },
  logoVariant: {
    exit: {
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0.7,
        type: 'spring',
      },
    },
  },
  logoSmallVariant: {
    animate: {
      x: '390px',
      transition: {
        duration: 1.6,
        delay: 1.32,
        type: 'spring',
        bounce: 0,
      },
    },
  },
  logoTVariant: {
    animate: {
      opacity: 0,
      x: '70px',
      transition: {
        duration: 0.4,
        delay: 1.28,
        type: 'spring',
      },
    },
  },
  logoEVariant: {
    animate: {
      opacity: 0,
      x: '70px',
      transition: {
        duration: 0.4,
        delay: 1.2,
        type: 'spring',
      },
    },
  },
  logoCVariant: {
    animate: {
      opacity: 0,
      x: '70px',
      transition: {
        duration: 0.4,
        delay: 1.12,
        type: 'spring',
      },
    },
  },
  logoHVariant: {
    animate: {
      opacity: 0,
      x: '70px',
      transition: {
        duration: 0.4,
        delay: 1.04,
        type: 'spring',
      },
    },
  },
  logoZVariant: {
    animate: {
      opacity: 0,
      x: '70px',
      transition: {
        duration: 0.4,
        delay: 0.96,
        type: 'spring',
      },
    },
  },
  logoYVariant: {
    animate: {
      opacity: 0,
      x: '70px',
      transition: {
        duration: 0.4,
        delay: 0.88,
        type: 'spring',
      },
    },
  },
  logoCopyVariant: {
    animate: {
      opacity: 0,
      x: '70px',
      transition: {
        duration: 0.4,
        delay: 0.8,
        type: 'spring',
      },
    },
  },
}

export default animations
