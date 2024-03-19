import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { AnimatePresence } from 'framer-motion'
import {
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
      <Head>
        <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='site_name' />
        <meta name='resource-type' content='document' />
        <meta name='theme-color' content='#000000' />
        <meta name='msapplication-navbutton-color' content='#000000' />
        <meta name='apple-mobile-web-app-status-bar-style' content='#000000' />
        <link rel='shortcut icon' type='image/x-icon' href='./favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='./icon-180x180.png' />
        <link rel='manifest' href='./manifest.json' />

        <title>Techzy</title>
        <meta
          name='description'
          content='Innovating software solutions for limitless growth. Customer-focused, quality-driven, and team-centric. Revolutionizing the digital landscape.'
        />
        <meta property='og:title' content='Techzy' />
        <meta
          property='og:description'
          content='Innovating software solutions for limitless growth. Customer-focused, quality-driven, and team-centric. Revolutionizing the digital landscape.'
        />
        <meta property='og:url' content='https://techzy.app' />
        <meta property='og:image' content='./share-photo.jpeg' />
        <meta property='og:image:type' content='image/jpeg' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='675' />
        <link rel='canonical' href='https://techzy.app' />
      </Head>
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
