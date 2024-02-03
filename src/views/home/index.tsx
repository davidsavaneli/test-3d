import React from 'react'
import Link from 'next/link';
import { Example } from 'components'
import styles from './styles.module.css'

const View = () => {
  return (
    <div className={styles.app}>
      <Link href="/about">About page</Link>
      <div style={{ height: '500px', backgroundColor: '#000' }}></div>
      <div style={{ height: '500px', backgroundColor: '#222' }}></div>
      <div style={{ height: '500px', backgroundColor: '#444' }}></div>
      <div style={{ height: '500px', backgroundColor: '#666' }}></div>
      <Example />
      <div style={{ height: '1500px' }}></div>
    </div>
  )
}

export default View
