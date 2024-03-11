import React from 'react'
import { ReactLenis } from '@studio-freight/react-lenis'

type SmoothScrollProps = {
  children: React.ReactNode
  root?: boolean
}

const SmoothScroll = ({ children, root = false }: SmoothScrollProps) => {
  return <ReactLenis root={root}>{children}</ReactLenis>
  // return <>{children}</>
}

export default SmoothScroll
