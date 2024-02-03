import React from 'react'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { SmoothScroll } from 'components'
import { useViewportHeight } from 'hooks'

import 'assets/css/styles.css'

const App = ({ Component, router, pageProps }: AppProps) => {
  useViewportHeight()

  if (router.route === '/404' || router.route === '/500') return <Component {...pageProps} />
  return (
    <AnimatePresence mode='wait'>
      <main key={router.route}>
        <SmoothScroll root={true}>
          <Component {...pageProps} />
        </SmoothScroll>
      </main>
    </AnimatePresence>
  )
}

export default App
