import React from 'react'
import Link from 'next/link'
import { Button } from 'components'
import styles from './styles.module.css'

const View = () => {
  return (
    <div className='container'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button label='View More'></Button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link href='./about' className={styles.link} style={{ position: 'relative' }}>
        About Page
      </Link>
      <br />
      <br />
      <br />
      <div style={{ display: 'inline-flex' }}>
        <div data-cursor-magnetic>
          <h1>Magnetic Cursor</h1>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div style={{ display: 'inline-flex' }}>
        <div data-cursor-stick='#stick-title'>
          <h1 id='stick-title' style={{ textAlign: 'center' }}>
            Sticky Cursor
          </h1>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div style={{ display: 'inline-flex' }}>
        <div data-cursor-color='#61dbfb'>
          <h1 id='stick-title'>Colorized Cursor</h1>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div style={{ display: 'inline-flex' }}>
        <div data-cursor-size='80px' data-cursor-exclusion>
          <h1 id='stick-title'>Sized Cursor</h1>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div style={{ display: 'inline-flex' }}>
        <div data-cursor-x-image='https://reactjs.org/logo-og.png' data-cursor-size='200px'>
          <h1 id='stick-title'>React.js</h1>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div style={{ display: 'inline-flex' }}>
        <div data-cursor-exclusion>
          <h1 id='stick-title'>React.js</h1>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div style={{ display: 'inline-flex' }}>
        <div data-cursor-text='React' data-cursor-size='100px'>
          <h1 id='stick-title'>React.js</h1>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* <div data-cursor-magnetic className={styles.test}>cxcx</div> */}

      <div data-cursor-magnetic data-cursor-stick='#stick-title2' data-cursor-size='80px' className={styles.test}>
        <div className={styles.test2} id='stick-title2'></div>
      </div>

      <br />
      <br />

      <div data-cursor-magnetic data-cursor-size='80px' data-cursor-text='React' className={styles.test}>
        <div className={styles.test2} id='stick-titlee' style={{ textAlign: 'center' }}></div>
      </div>

      <div style={{ height: '300px', border: '1px solid #', backgroundColor: 'transparent' }}></div>
      <div style={{ height: '300px', border: '1px solid #', backgroundColor: 'transparent' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti incidunt excepturi minima explicabo debitis
        vitae dolores ut, accusantium rem. Architecto fugit praesentium quas velit harum sunt dicta molestias tenetur
        in! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti incidunt excepturi minima explicabo
        debitis vitae dolores ut, accusantium rem. Architecto fugit praesentium quas velit harum sunt dicta molestias
        tenetur in! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti incidunt excepturi minima
        explicabo debitis vitae dolores ut, accusantium rem. Architecto fugit praesentium quas velit harum sunt dicta
        molestias tenetur in! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti incidunt excepturi
        minima explicabo debitis vitae dolores ut, accusantium rem. Architecto fugit praesentium quas velit harum sunt
        dicta molestias tenetur in! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti incidunt
        excepturi minima explicabo debitis vitae dolores ut, accusantium rem. Architecto fugit praesentium quas velit
        harum sunt dicta molestias tenetur in!
      </div>
      <div style={{ height: '300px', border: '1px solid #', backgroundColor: 'transparent' }}></div>
      <div style={{ height: '300px', border: '1px solid #', backgroundColor: 'transparent' }}></div>
      <div style={{ height: '300px', border: '1px solid #', backgroundColor: 'transparent' }}></div>
      <div style={{ height: '300px', border: '1px solid #', backgroundColor: 'transparent' }}></div>
    </div>
  )
}

export default View
