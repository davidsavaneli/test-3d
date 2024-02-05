import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const View = () => {
  return (
    <div className='container'>
      <br /><br /><br />
      <Link href='./' className={styles.link}>
        Home Page
      </Link>
    </div>
  )
}

export default View
