import React, { useEffect, useState } from 'react'
import { Button, Technologies, ContactButton } from 'components'
import Landing from './components/Landing'
import Services from './components/Services'
import ProductsVideo from './components/ProductsVideo'
import styles from './styles.module.css'

const View = () => {
  const [loading, setLoading] = useState<boolean>()

  useEffect(() => {
    setTimeout(() => setLoading(true), 200)
  })

  return (
    <>
      <Landing />
      <ProductsVideo />
      {loading && <Services />}
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
