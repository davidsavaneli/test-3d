import React from 'react'
import type { NextPage } from 'next'
import { AnimationLayout } from 'components'
import View from '../views/home'

const HomePage: NextPage = () => {
  return (
    <AnimationLayout>
      <View />
    </AnimationLayout>
  )
}

export default HomePage
