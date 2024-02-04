import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const View = () => {
  return (
    <div className={styles.app}>
      <Link href='./' className={styles.link}>Home</Link>
    </div>
  )
}

export default View
