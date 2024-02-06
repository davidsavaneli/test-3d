import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { Preloader, SmoothScroll, Header } from 'components'
import { useViewportHeight } from 'hooks'
import { Cursor } from 'react-creative-cursor'
import { IFluidAnimationProps } from '@usertive/react-fluid-animation'; // Import the types

const DynamicAnimation = dynamic(() => import('@usertive/react-fluid-animation'))

import 'assets/css/styles.css'

interface CustomFluidAnimationProps extends IFluidAnimationProps {
  textureDownsample?: number;
  densityDissipation?: number;
  velocityDissipation?: number;
  pressureDissipation?: number;
  pressureIterations?: number;
  curl?: number;
  splatRadius?: number;
  colorsPool?: string[];
}

const App = ({ Component, router, pageProps }: AppProps) => {
  const dynamicAnimationConfig: CustomFluidAnimationProps = {
    textureDownsample: 0,
    densityDissipation: 0.96,
    velocityDissipation: 0.99,
    pressureDissipation: 0.8,
    pressureIterations: 25,
    curl: 0,
    splatRadius: 0.001,
    colorsPool: ['#fff'],
  };

  const [isAfterHydration, setIsAfterHydration] = useState<boolean>(false)

  useEffect(() => {
    if (!isAfterHydration) setIsAfterHydration(true)
  }, [isAfterHydration, setIsAfterHydration])

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
      <div style={{ position: 'fixed', width: '100%', height: '100%' }}>
        {isAfterHydration ? <DynamicAnimation config={dynamicAnimationConfig} /> : null}
      </div>
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
