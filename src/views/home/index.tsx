import React from 'react'
import Link from 'next/link'
import { MagneticLayout } from 'components'
import Landing from './components/Landing'
import { useMouseContext } from 'contexts'
import styles from './styles.module.css'

const View = () => {
  const { onMouseOver, onMouseOut } = useMouseContext()

  return (
    <div className='container'>
      <Landing />
      <MagneticLayout>
        <Link
          scroll={false}
          href='./about'
          className={styles.link}
          onMouseOver={() => onMouseOver('default')}
          onMouseOut={() => onMouseOut('default')}
          onClick={() => onMouseOut('default')}
        >
          Default
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
          onMouseOver={() => onMouseOver('small')}
          onMouseOut={() => onMouseOut('default')}
          onClick={() => onMouseOut('default')}
        >
          Small
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
          onMouseOver={() => onMouseOver('medium')}
          onMouseOut={() => onMouseOut('default')}
          onClick={() => onMouseOut('default')}
        >
          Medium
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
          onMouseOver={() => onMouseOver('large')}
          onMouseOut={() => onMouseOut('default')}
          onClick={() => onMouseOut('default')}
        >
          Large
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
          onMouseOver={() => onMouseOver('smallText', 'View More')}
          onMouseOut={() => onMouseOut('default')}
          onClick={() => onMouseOut('default')}
        >
          SmallText
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
          onMouseOver={() => onMouseOver('mediumText', 'View More')}
          onMouseOut={() => onMouseOut('default')}
          onClick={() => onMouseOut('default')}
        >
          MediumText
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
          onMouseOver={() => onMouseOver('largeText', 'View More')}
          onMouseOut={() => onMouseOut('default')}
          onClick={() => onMouseOut('default')}
        >
          LargeText
        </Link>
      </MagneticLayout>
      <br />
      <br />
      <br />

      <div style={{ height: '300px', border: '1px solid red', backgroundColor: 'transparent' }}></div>
    </div>
  )
}

export default View
