// Cursor.tsx

'use client'
import { useEffect } from 'react'
import clsx from 'clsx'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useMouseContext } from 'contexts'
import styles from './styles.module.css'

const Cursor = () => {
  const { mouseStatus } = useMouseContext()

  const cursorSize = 15
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  }

  const smoothOptions = { damping: 20, stiffness: 280, mass: 0.1 }
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
    <div className={styles.cursorContainer}>
      <motion.div
        style={{
          x: smoothMouse.x,
          y: smoothMouse.y,
          width: cursorSize,
          height: cursorSize,
        }}
        className={clsx(styles.cursor, {
          [styles.default]: mouseStatus === 'default',
          [styles.text]: mouseStatus === 'text',
          [styles.circle]: mouseStatus === 'circle',
        })}
      ></motion.div>
    </div>
  )
}

export default Cursor
