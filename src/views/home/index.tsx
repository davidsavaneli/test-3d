import React, { useEffect, useState } from 'react'
import { Button, Technologies } from 'components'
import Landing from './components/Landing'
import ProjectsVideo from './components/ProjectsVideo'
import Services from './components/Services'
import Projects from './components/Projects'
import styles from './styles.module.css'

const View = () => {
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200)
  })

  return (
    <>
      <Landing />
      <ProjectsVideo />
      {loaded && <Services />} {/* TODO */}
      <Projects />
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
