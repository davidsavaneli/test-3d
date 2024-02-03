import React from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export type SmoothScrollProps = {
  children: React.ReactNode
  root?: boolean
}

const SmoothScroll = ({ children, root = false }: SmoothScrollProps) => {
  // const lenis = useLenis(({ scroll }) => {
  //   console.log(scroll)
  // })

  return <ReactLenis root={root}>{children}</ReactLenis>
}

export default SmoothScroll
