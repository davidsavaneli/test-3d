import React, { useState, Suspense, useEffect } from 'react'
import { Button, MagneticLayout, Technologies } from 'components'
import Landing from './components/Landing'
import Services from './components/Services'
import ProductsVideo from './components/ProductsVideo'
import styles from './styles.module.css'
import { useCursorContext } from 'contexts'

const View = () => {
  const { setCursorStyle } = useCursorContext()

  return (
    <>
      <Landing />
      <ProductsVideo />
      <Services />
      <Technologies />
      <div className='container'>
        <Button label='Get in touch' />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button label='Get in touch' href='./about' />
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default View
