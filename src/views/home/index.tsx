import React from 'react'
import Link from 'next/link'
import { useMouseContext } from 'contexts'
import styles from './styles.module.css'

const View = () => {
  const { onMouseOver, onMouseOut } = useMouseContext()

  return (
    <div className='container'>
      <div style={{ height: '300px', border: '1px solid red', backgroundColor: 'transparent' }}></div>
      <div style={{ height: '300px', border: '1px solid red', backgroundColor: 'transparent' }}></div>
      <br />
      <br />
      <br />
      <Link
        scroll={false}
        href='./about'
        className={styles.link}
        onMouseOver={() => onMouseOver('default')}
        onMouseOut={() => onMouseOut('default')}
        onClick={() => onMouseOut('default')}
      >
        About Page
      </Link>
      <br />
      <br />
      <br />
      <Link
        scroll={false}
        href='./about'
        className={styles.link}
        onMouseOver={() => onMouseOver('text', 'Drag')}
        onMouseOut={() => onMouseOut('default')}
        onClick={() => onMouseOut('default')}
      >
        About Page 2
      </Link>
      <br />
      <br />
      <br />
      <Link
        scroll={false}
        href='./about'
        className={styles.link}
        onMouseOver={() => onMouseOver('circle')}
        onMouseOut={() => onMouseOut('default')}
        onClick={() => onMouseOut('default')}
      >
        About Page 3
      </Link>
      <br />
      <br />
      <br />
      <br />
      <div style={{ height: '300px', border: '1px solid red', backgroundColor: 'transparent' }}></div>
      <div style={{ height: '300px', border: '1px solid red', backgroundColor: 'transparent' }}></div>
      <div style={{ height: '300px', border: '1px solid red', backgroundColor: 'transparent' }}></div>
      <div style={{ height: '300px', border: '1px solid red', backgroundColor: 'transparent' }}></div>
    </div>
  )
}

export default View
