import React from 'react'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { Header, Footer, SmoothScroller } from 'components'

import 'assets/css/styles.css'

const App = ({ Component, router, pageProps }: AppProps) => {
  if (router.route === '/404' || router.route === '/500') return <Component {...pageProps} />

  return (
    <React.Fragment>
      <Header />
      <AnimatePresence mode='wait'>
        <main key={router.route} id='main'>
          <Component {...pageProps} />
        </main>
      </AnimatePresence>
      <Footer />
      <SmoothScroller />
    </React.Fragment>
  )
}

export default App
