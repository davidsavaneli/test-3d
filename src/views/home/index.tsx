import React from 'react'
import { Example } from 'components'
import styles from './styles.module.css'

const View = () => {
  return (
    <div className={styles.app}>
      <div style={{ height: '1500px' }}></div>
      <Example />
      <div style={{ height: '1500px' }}></div>
    </div>
  )
}

export default View
