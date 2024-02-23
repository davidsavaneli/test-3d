import React from 'react'
import Link from 'next/link'
import { MagneticLayout } from 'components'
import { useMouseContext } from 'contexts'
import styles from './styles.module.css'

const Landing = () => {
  const { onMouseOver, onMouseOut } = useMouseContext()

  return (
    <div className={styles.landing}>
      <h1 className={styles.title} onMouseOver={() => onMouseOver('large')} onMouseOut={() => onMouseOut('default')}>
        Tech Zone for You
      </h1>
    </div>
  )
}

export default Landing
