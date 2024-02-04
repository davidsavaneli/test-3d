import React, { useState, useEffect } from 'react'
import { motion, Variants } from 'framer-motion'
import styles from './styles.module.css'

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })
  console.log(mousePosition)

  // Set cursor variant to change color on hover text

  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  // Variant animation
  const variants: Variants = {
    default: {
      opacity: 1,
      height: 20,
      width: 20,
      fontSize: "16px",
      backgroundColor: "#fff",
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      transition: {
        type: "spring",
        mass: 0.4
      }
    },
    text: {
      opacity: 1,
      backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mousePosition.x - 70,
      y: mousePosition.y - 70,
    },
  }

  // function for textLeave and textEnter
  const textEnter = () => setCursorVariant('text')
  const textLeave = () => setCursorVariant('default')

  return (
    <>
      {/* <h1 className='title' onMouseEnter={textEnter} onMouseLeave={textLeave}>
        Custom Cursor
      </h1> */}
      <motion.div className={styles.cursor} variants={variants} animate={cursorVariant}></motion.div>
    </>
  )
}

export default Cursor
