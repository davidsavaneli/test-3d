import React from 'react'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import {
  BackgrundOverlay,
  CursorLayout,
  Preloader,
  CursorFluidAnimation,
  Header,
  SmoothScroll,
  ContactButton,
} from 'components'
import { useShowPreloader, useViewportHeight, useScrollToTop } from 'hooks'
import { CursorProvider } from 'contexts'

import 'assets/css/styles.css'

const App = ({ Component, router, pageProps }: AppProps) => {
  const { showPreloader } = useShowPreloader(true)
  useViewportHeight()
  useScrollToTop(router)

  if (router.route === '/404' || router.route === '/500') return <Component {...pageProps} />

  return (
    <React.Fragment>
      <BackgrundOverlay />
      <CursorProvider>
        <CursorLayout>
          <CursorFluidAnimation />
          <Header />
          <ContactButton />
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
        </CursorLayout>
      </CursorProvider>
    </React.Fragment>
  )
}

export default App
