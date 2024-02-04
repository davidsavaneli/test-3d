import { Variants } from 'framer-motion'

type animationTypes = {
  cursorVariant: Variants
}

const animations: animationTypes = {
  cursorVariant: {
    hidden: { opacity: 1, transition: { duration: 0.3 } },
    enter: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  }
}

export default animations
