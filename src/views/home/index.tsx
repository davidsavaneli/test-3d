import React from 'react'
import Link from 'next/link'
import { MagneticLayout } from 'components'
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
      <MagneticLayout>
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
      </MagneticLayout>
      <br />
      <br />
      <br />
      <MagneticLayout>
        <Link
          scroll={false}
          href='./about'
          className={styles.link}
          onMouseOver={() => onMouseOver('primary')}
          onMouseOut={() => onMouseOut('default')}
          onClick={() => onMouseOut('default')}
        >
          About Page 2
        </Link>
      </MagneticLayout>
      <br />
      <br />
      <br />
      <MagneticLayout>
        <Link
          scroll={false}
          href='./about'
          className={styles.link}
          onMouseOver={() => onMouseOver('secondary')}
          onMouseOut={() => onMouseOut('default')}
          onClick={() => onMouseOut('default')}
        >
          About Page 3
        </Link>
      </MagneticLayout>
      <br />
      <br />
      <br />
      <MagneticLayout>
        <Link
          scroll={false}
          href='./about'
          className={styles.link}
          onMouseOver={() => onMouseOver('text', 'View More')}
          onMouseOut={() => onMouseOut('default')}
          onClick={() => onMouseOut('default')}
        >
          About Page 4
        </Link>
      </MagneticLayout>
      <br />
      <br />
      <div className='f-regular' style={{ fontSize: '20px', margin: '50px 0' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In blanditiis aut quibusdam? Recusandae rem voluptatum
        earum inventore cupiditate in ducimus iusto voluptatibus, sunt soluta magni aliquid iure modi totam explicabo?
      </div>
      <div className='f-medium' style={{ fontSize: '20px', margin: '50px 0' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In blanditiis aut quibusdam? Recusandae rem voluptatum
        earum inventore cupiditate in ducimus iusto voluptatibus, sunt soluta magni aliquid iure modi totam explicabo?
      </div>
      <div className='f-semiBold' style={{ fontSize: '20px', margin: '50px 0' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In blanditiis aut quibusdam? Recusandae rem voluptatum
        earum inventore cupiditate in ducimus iusto voluptatibus, sunt soluta magni aliquid iure modi totam explicabo?
      </div>
      <div className='f-bold' style={{ fontSize: '20px', margin: '50px 0' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In blanditiis aut quibusdam? Recusandae rem voluptatum
        earum inventore cupiditate in ducimus iusto voluptatibus, sunt soluta magni aliquid iure modi totam explicabo?
      </div>
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
