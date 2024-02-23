'use client'
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { motion, useMotionValue } from 'framer-motion'
import { useCursorContext } from 'contexts'
import animations from './animations'
import styles from './styles.module.css'

type CursorType = {
  text?: string | undefined
}

const Cursor = ({ text }: CursorType) => {
  const { cursorStyle } = useCursorContext()

  const [cursorSize, setCursorSize] = useState<number>(1)

  useEffect(() => {
    switch (cursorStyle) {
      case 'default':
        setCursorSize(4)
        break
      case 'button':
        setCursorSize(6)
        break
      default:
        setCursorSize(1)
    }
  }, [cursorStyle])

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
          [styles.default]: cursorStyle === 'default',
          [styles.button]: cursorStyle === 'button',
        })}
      >
        <motion.div className={clsx(styles.cursor)} style={{ scale: cursorSize }}></motion.div>
        {text && (
          <motion.div
            className={styles.additionalText}
            variants={animations.additionalTextVariant}
            initial='initial'
            animate='animate'
            exit='exit'
          >
            {text}
          </motion.div>
        )}
      </motion.div>
    </React.Fragment>
  )
}

export default Cursor
