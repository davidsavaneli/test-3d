import React, { useEffect, useState } from 'react'
import { Button, Technologies } from 'components'
import Landing from './components/Landing'
import ProjectsVideo from './components/ProjectsVideo'
import Services from './components/Services'
import Projects from './components/Projects'
import Team from './components/Team'
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
      <Team />
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
