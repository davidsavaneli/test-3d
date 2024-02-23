import React from 'react'
import Link from 'next/link'
import { Button, MagneticLayout } from 'components'
import Landing from './components/Landing'
import styles from './styles.module.css'
import { useCursorContext } from 'contexts'

const View = () => {
  const { setCursorStyle } = useCursorContext()
  
  return (
    <div className='container'>
      <Landing />
      <MagneticLayout>
        <Button label='Get in touch' />
      </MagneticLayout>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div style={{ height: '300px', border: '1px solid red', backgroundColor: 'transparent' }}></div>
      <div style={{ height: '300px', border: '1px solid red', backgroundColor: 'transparent' }}></div>
      <div style={{ height: '300px', border: '1px solid red', backgroundColor: 'transparent' }}></div>
      <div style={{ height: '300px', border: '1px solid red', backgroundColor: 'transparent' }}></div>
      <div style={{ height: '300px', border: '1px solid red', backgroundColor: 'transparent' }}></div>
      <div style={{ height: '300px', border: '1px solid red', backgroundColor: 'transparent' }}></div>
      <div style={{ height: '300px', border: '1px solid red', backgroundColor: 'transparent' }}></div>
    </div>
  )
}

export default View
