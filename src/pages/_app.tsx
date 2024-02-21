import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { Preloader, SmoothScroll, Header, CursorFluidAnimation } from 'components'
import { useShowPreloader, useViewportHeight, useScrollToTop } from 'hooks'

import 'assets/css/styles.css'

const App = ({ Component, router, pageProps }: AppProps) => {
  const { showPreloader } = useShowPreloader(true)
  useViewportHeight()
  useEffect(() => useScrollToTop(), [router.route])

  if (router.route === '/404' || router.route === '/500') return <Component {...pageProps} />

  return (
    <React.Fragment>
      <CursorFluidAnimation />
      <Header />
      <AnimatePresence mode='wait'>
        {showPreloader ? (
          <Preloader />
        ) : (
          <main key={router.route} id='main'>
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
