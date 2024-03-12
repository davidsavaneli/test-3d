import React from 'react'
import { ContentPageLayout, AnimatedTitle } from 'components'

import styles from './styles.module.css'

const View = () => {
  return (
    <div className='container'>
      <ContentPageLayout
        title={
          <AnimatedTitle animationDirection='ltr' size='medium' disableX>
            Privacy Policy
          </AnimatedTitle>
        }
        text='text ...'
      />
    </div>
  )
}

export default View
