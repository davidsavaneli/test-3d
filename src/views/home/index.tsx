import React from 'react'
import { Button, MagneticLayout, Technologies } from 'components'
import Landing from './components/Landing'
import Services from './components/Services'
import styles from './styles.module.css'
import { useCursorContext } from 'contexts'

const View = () => {
  const { setCursorStyle } = useCursorContext()

  return (
    <>
      <Landing />
      <Services />
      <div style={{ height: '2px', backgroundColor: 'blue' }}></div>
      <div className='container'>
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
        <MagneticLayout>
          <Button label='Get in touch' href='./about' />
        </MagneticLayout>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Technologies />
      <div className='container'>
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
    </>
  )
}

export default View
