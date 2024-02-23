import React, { useRef, useState, memo } from 'react'
import { motion } from 'framer-motion'

type MagneticLayoutProps = {
  children: React.ReactNode
}

const MagneticLayout = ({ children }: MagneticLayoutProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (ref.current) {
      const { clientX, clientY } = e

      const { height, width, left, top } = ref.current.getBoundingClientRect()

      const middleX = clientX - (left + width / 2)
      const middleY = clientY - (top + height / 2)

      setPosition({ x: middleX, y: middleY })
    }
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  return (
    <React.Fragment>
      <motion.div
        style={{ display: 'inline-flex' }}
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x, y }}
        transition={{ type: 'spring', stiffness: 100, damping: 25, mass: 0.1 }}
      >
        {children}
      </motion.div>
    </React.Fragment>
  )
}

export default memo<MagneticLayoutProps>(MagneticLayout)
