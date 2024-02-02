import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import 'assets/css/styles.css'

const App = ({ Component, router, pageProps }: AppProps) => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    console.log('ds')
  })

  useEffect(() => {
    const setWindowHeight = () =>
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01 - 0.01}px`)
    setWindowHeight()
    window.addEventListener('resize', setWindowHeight)

    return () => {
      window.removeEventListener('resize', setWindowHeight)
    }
  })

  if (router.route === '/404' || router.route === '/500') return <Component {...pageProps} />
  return (
    <ReactLenis root>
      <AnimatePresence mode='wait'>
        <main key={router.route}>
          <Component {...pageProps} />
        </main>
      </AnimatePresence>
    </ReactLenis>
  )
}

export default App
