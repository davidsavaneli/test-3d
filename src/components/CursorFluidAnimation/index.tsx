import React, { memo, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { IFluidAnimationProps } from '@usertive/react-fluid-animation'
import styles from './styles.module.css'

const DynamicAnimation = dynamic(() => import('@usertive/react-fluid-animation'))

interface CursorFluidAnimationProps extends IFluidAnimationProps {
  textureDownsample?: number
  densityDissipation?: number
  velocityDissipation?: number
  pressureDissipation?: number
  pressureIterations?: number
  curl?: number
  splatRadius?: number
  colorsPool?: string[]
}

const CursorFluidAnimation = ({}: CursorFluidAnimationProps) => {
  const dynamicAnimationConfig: CursorFluidAnimationProps = {
    textureDownsample: 0,
    densityDissipation: 0.96,
    velocityDissipation: 0.99,
    pressureDissipation: 0.8,
    pressureIterations: 25,
    curl: 0,
    splatRadius: 0.001,
    colorsPool: ['#fff'],
  }

  const [isAfterHydration, setIsAfterHydration] = useState<boolean>(false)

  useEffect(() => {
    if (!isAfterHydration) setIsAfterHydration(true)
  }, [isAfterHydration, setIsAfterHydration])

  return (
    <div className={styles.overlay}>
      {isAfterHydration ? <DynamicAnimation config={dynamicAnimationConfig} style={{backgroundColor: 'red'}} /> : null}
    </div>
  )
}

export default memo(CursorFluidAnimation)
