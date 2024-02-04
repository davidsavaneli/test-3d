import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const View = () => {
  return (
    <div className={styles.app}>
      <Link href='./about' className={styles.link}>About</Link>
      <div style={{height: '300px', border: '1px solid #', backgroundColor: 'transparent'}}></div>
      <div style={{height: '300px', border: '1px solid #', backgroundColor: 'transparent'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti incidunt excepturi minima explicabo debitis 
        vitae dolores ut, accusantium rem. Architecto fugit praesentium quas velit harum sunt dicta molestias tenetur in!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti incidunt excepturi minima explicabo debitis 
        vitae dolores ut, accusantium rem. Architecto fugit praesentium quas velit harum sunt dicta molestias tenetur in!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti incidunt excepturi minima explicabo debitis 
        vitae dolores ut, accusantium rem. Architecto fugit praesentium quas velit harum sunt dicta molestias tenetur in!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti incidunt excepturi minima explicabo debitis 
        vitae dolores ut, accusantium rem. Architecto fugit praesentium quas velit harum sunt dicta molestias tenetur in!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti incidunt excepturi minima explicabo debitis 
        vitae dolores ut, accusantium rem. Architecto fugit praesentium quas velit harum sunt dicta molestias tenetur in!
      </div>
      <div style={{height: '300px', border: '1px solid #', backgroundColor: 'transparent'}}></div>
      <div style={{height: '300px', border: '1px solid #', backgroundColor: 'transparent'}}></div>
      <div style={{height: '300px', border: '1px solid #', backgroundColor: 'transparent'}}></div>
      <div style={{height: '300px', border: '1px solid #', backgroundColor: 'transparent'}}></div>
    </div>
  )
}

export default View
