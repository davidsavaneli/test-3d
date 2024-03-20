import React, { useEffect, useState } from 'react'
import { Landing, Video, Services, Projects, Team } from 'components'

const View = () => {
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200)
  })

  return (
    <>
      <Landing />
      <Video />
      {loaded && <Services />} {/* TODO */}
      <Projects />
      <Team />
    </>
  )
}

export default View
