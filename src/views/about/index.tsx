import React from 'react'
import Link from 'next/link';
import styles from './styles.module.css'

const View = () => {
  return (
    <div className={styles.app}>
      <Link href="/">Back to home</Link>
      <div style={{ height: '500px', backgroundColor: '#000' }}></div>
      <div style={{ height: '500px', backgroundColor: '#222' }}></div>
    </div>
  )
}

export default View
