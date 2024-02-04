import React, { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { Preloader, SmoothScroll, Header, Cursor } from 'components'
import { useViewportHeight } from 'hooks'

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
      <Cursor />
      <Header />
      <AnimatePresence mode='wait'>
        {showPreloader ? (
          <Preloader />
        ) : (
          <main key={router.route}>
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
