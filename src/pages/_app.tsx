import React from 'react'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { AnimatePresence } from 'framer-motion'
import {
  Seo,
  BackgrundOverlay,
  CursorLayout,
  Preloader,
  CursorFluidAnimation,
  Header,
  ContactButton,
  Footer,
  SmoothScroller,
} from 'components'
import { useShowPreloader, useScrollToTop } from 'hooks'
import { CursorProvider } from 'contexts'

import 'assets/css/styles.css'
import 'react-toastify/dist/ReactToastify.css'

const App = ({ Component, router, pageProps }: AppProps) => {
  const { showPreloader } = useShowPreloader(true)
  useScrollToTop(router)

  if (router.route === '/404' || router.route === '/500') return <Component {...pageProps} />

  return (
    <React.Fragment>
      <Seo />
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
                <Component {...pageProps} />
              </main>
            )}
          </AnimatePresence>
          <Footer />
        </CursorLayout>
      </CursorProvider>
      <ToastContainer position='bottom-right' />
      <SmoothScroller />
    </React.Fragment>
  )
}

export default App
