import React, { memo } from 'react'
import { BackButton } from 'components'

import styles from './styles.module.css'

type ContentPageLayoutProps = {
  title?: React.ReactNode
  text?: React.ReactNode
}

const ContentPageLayout = ({ title, text }: ContentPageLayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <BackButton />
      {title && <div className={styles.title}>{title}</div>}
      {text && <div className={styles.wysiwyg} dangerouslySetInnerHTML={{ __html: text }}></div>}
    </div>
  )
}

export default memo<ContentPageLayoutProps>(ContentPageLayout)
