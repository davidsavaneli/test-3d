import React, { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { Preloader, SmoothScroll, Header, CursorFluidAnimation, CursorFluidAnimationJs } from 'components'
import { useViewportHeight } from 'hooks'
import { Cursor } from 'react-creative-cursor'

import 'assets/css/styles.css'

const App = ({ Component, router, pageProps }: AppProps) => {
  const [showPreloader, setShowPreloader] = useState<boolean>(true)

  useEffect(() => {
    document.body.classList.remove('preload')

    const handleBeforeUnload = () => setShowPreloader(true)
    window.addEventListener('beforeunload', handleBeforeUnload)

    const timeoutId = setTimeout(() => setShowPreloader(false), 500)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      clearTimeout(timeoutId)
    }
  }, [])

  useViewportHeight()

  if (router.route === '/404' || router.route === '/500') return <Component {...pageProps} />

  return (
    <React.Fragment>
      <CursorFluidAnimation />
      {/* <CursorFluidAnimationJs /> */}
      <Header />
      <AnimatePresence mode='wait'>
        {showPreloader ? (
          <Preloader />
        ) : (
          <main key={router.route}>
            <Cursor
              isGelly={true}
              animationDuration={0.5}
              cursorSize={24}
              cursorBackgrounColor='#fff'
              cursorInnerColor='#000'
              magneticAnimationAmount={0.4}
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
