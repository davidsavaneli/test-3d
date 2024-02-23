'use client'
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { motion, useMotionValue } from 'framer-motion'
import { useMouseContext } from 'contexts'
import animations from './animations'
import styles from './styles.module.css'

type CursorType = {
  additionalText?: string | undefined
}

const Cursor = ({ additionalText }: CursorType) => {
  const { mouseStatus } = useMouseContext()

  const [cursorSize, setCursorSize] = useState<number>(1)

  useEffect(() => {
    switch (mouseStatus) {
      case 'primary':
        setCursorSize(3.6)
        break
      case 'secondary':
        setCursorSize(3.6)
        break
      case 'text':
        setCursorSize(3.6)
        break
      default:
        setCursorSize(1)
    }
  }, [mouseStatus])

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  }

  const smoothMouse = {
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
    <React.Fragment>
      <motion.div
        style={{
          x: smoothMouse.x,
          y: smoothMouse.y,
        }}
        className={clsx(styles.cursorWrap, {
          [styles.primary]: mouseStatus === 'primary',
          [styles.secondary]: mouseStatus === 'secondary',
          [styles.text]: mouseStatus === 'text',
        })}
      >
        <motion.div className={clsx(styles.cursor)} style={{ scale: cursorSize }}></motion.div>
        {additionalText && (
          <motion.div
            className={styles.additionalText}
            variants={animations.additionalTextVariant}
            initial='initial'
            animate='animate'
            exit='exit'
          >
            {additionalText}
          </motion.div>
        )}
      </motion.div>
    </React.Fragment>
  )
}

export default Cursor
