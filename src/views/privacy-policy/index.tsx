import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const View = () => {
  return (
    <div className='container'>
    <Link scroll={false} href='./' className={styles.link}>
      Home Page
    </Link>
      <div style={{ height: '600px', border: '1px solid red', backgroundColor: 'transparent' }}></div>
      <div style={{ height: '600px', border: '1px solid red', backgroundColor: 'transparent' }}></div>
      <br />
      <br />
      <br />
      <Link scroll={false} href='./' className={styles.link}>
        Home Page
      </Link>
      <br />
      <br />
      <br />
      <div style={{ height: '600px', border: '1px solid red', backgroundColor: 'transparent' }}></div>
      <div style={{ height: '600px', border: '1px solid red', backgroundColor: 'transparent' }}></div>
      <div style={{ height: '600px', border: '1px solid red', backgroundColor: 'transparent' }}></div>
      <div style={{ height: '600px', border: '1px solid red', backgroundColor: 'transparent' }}></div>
    </div>
  )
}

export default View
