import React, { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { Preloader, SmoothScroll, Header } from 'components'
import { useViewportHeight } from 'hooks'

import { Cursor } from 'react-creative-cursor'

import 'assets/css/styles.css'

const App = ({ Component, router, pageProps }: AppProps) => {
  const [showPreloader, setShowPreloader] = useState<boolean>(true)

  useEffect(() => {
    document.body.classList.remove('preload')

    const handleBeforeUnload = () => setShowPreloader(true)
    window.addEventListener('beforeunload', handleBeforeUnload)

    const timeoutId = setTimeout(() => setShowPreloader(false), 3000)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      clearTimeout(timeoutId)
    }
  }, [])

  useViewportHeight()

  if (router.route === '/404' || router.route === '/500') return <Component {...pageProps} />

  return (
    <React.Fragment>
      <Header />
      <AnimatePresence mode='wait'>
        {showPreloader ? (
          <Preloader />
        ) : (
          <main key={router.route}>
            <Cursor
              isGelly={true}
              animationDuration={1}
              cursorSize={24}
              cursorBackgrounColor='#fff'
              cursorInnerColor='#000'
            />
            <SmoothScroll root={true}>
              <Component {...pageProps} />
            </SmoothScroll>
          </main>
        )}
      </AnimatePresence>
    </React.Fragment>
  )
}

export default App
