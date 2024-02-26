import React from 'react'
import { useCursorContext } from 'contexts'

import styles from './styles.module.css'

const Landing = () => {
  const { setCursorStyle } = useCursorContext()

  return (
    <div className={styles.landing}>
      <h1
        className={styles.title}
        onMouseOver={() => setCursorStyle('largeText')}
        onMouseOut={() => setCursorStyle('none')}
      >
        Tech Zone for You
      </h1>
    </div>
  )
}

export default Landing
