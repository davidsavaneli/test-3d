import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth ?? 0)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight ?? 0)

  useEffect(() => {
    const resetWindowSizes = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener('resize', resetWindowSizes)
    return () => window.removeEventListener('resize', resetWindowSizes)
  }, [])

  return { windowWidth, windowHeight }
}

export default useWindowSize
