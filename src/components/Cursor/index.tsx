// Cursor.tsx

'use client'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useMouseContext } from 'contexts'
import styles from './styles.module.css'

const Cursor = () => {
  const { mouseStatus } = useMouseContext()

  const [cursorSize, setCursorSize] = useState<number>(1)

  useEffect(() => {
    switch (mouseStatus) {
      case 'default':
        setCursorSize(1)
        break
      case 'text':
        setCursorSize(2)
        break
      case 'circle':
        setCursorSize(3)
        break
      default:
        setCursorSize(1)
    }

    console.log(mouseStatus)
  }, [mouseStatus])

  // const cursorSize = 15
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  }

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
  const smoothMouse = {
    // x: useSpring(mouse.x, smoothOptions),
    // y: useSpring(mouse.y, smoothOptions),
    x: mouse.x,
    y: mouse.y,
  }

  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e
    mouse.x.set(clientX - cursorSize / 2)
    mouse.y.set(clientY - cursorSize / 2)
  }

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove)
    return () => {
      window.removeEventListener('mousemove', manageMouseMove)
    }
  }, [])

  return (
    <motion.div
      style={{
        x: smoothMouse.x,
        y: smoothMouse.y,
      }}
      className={clsx(styles.cursorWrap, {
        [styles.default]: mouseStatus === 'default',
        [styles.text]: mouseStatus === 'text',
        [styles.circle]: mouseStatus === 'circle',
      })}
    >
      <motion.div className={clsx(styles.cursor)} style={{ scale: cursorSize }}></motion.div>
    </motion.div>
  )
}

export default Cursor
