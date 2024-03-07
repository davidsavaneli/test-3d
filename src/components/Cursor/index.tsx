'use client'
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { motion, useMotionValue } from 'framer-motion'
import { useCursorContext } from 'contexts'
import animations from './animations'
import { ImageSvg } from 'components'
import styles from './styles.module.css'

import dragArrowLeftSrc from 'assets/images/drag-arrow-left.svg'
import dragArrowRightSrc from 'assets/images/drag-arrow-right.svg'
import dragCircleSrc from 'assets/images/drag-circle.svg'

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
      case 'largeText':
        setCursorSize(10)
        break
      case 'smallText':
        setCursorSize(2.5)
        break
      case 'drag':
        setCursorSize(5)
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
  })

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
          [styles.largeText]: cursorStyle === 'largeText',
          [styles.smallText]: cursorStyle === 'smallText',
          [styles.drag]: cursorStyle === 'drag',
        })}
      >
        <motion.div className={clsx(styles.cursor)} style={{ scale: cursorSize }}></motion.div>
        {cursorStyle === 'drag' && <DragIcon />}
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

const DragIcon = () => {
  return (
    <motion.div
      className={styles.dragIcon}
      variants={animations.dragIconVariant}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <div className={styles.dragArrow}>
        <ImageSvg src={dragArrowLeftSrc} alt='left' fullHeight />
      </div>
      <div className={styles.dragCircle}>
        <ImageSvg src={dragCircleSrc} alt='left' fullWidth />
      </div>
      <div className={styles.dragArrow}>
        <ImageSvg src={dragArrowRightSrc} alt='right' fullHeight />
      </div>
    </motion.div>
  )
}

export default Cursor
