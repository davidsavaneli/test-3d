import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={'./'}>Home</Link>
      <Link href={'./contact'}>Contact</Link>
    </header>
  )
}

export default Header
