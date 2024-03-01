import React, { memo } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { useCursorContext } from 'contexts'
import { MagneticLayout } from 'components'

import styles from './styles.module.css'

export type ComponentProps = React.ComponentProps<'button'> & {
  label?: string
  href?: string
}

const Button = ({ label, href, ...props }: ComponentProps) => {
  const { setCursorStyle } = useCursorContext()

  const cursorProps = {
    onMouseOver: () => setCursorStyle('button'),
    onMouseOut: () => setCursorStyle('none'),
  }

  return href ? (
    <MagneticLayout>
      <Link scroll={false} href={href} className={clsx(styles.button)} {...cursorProps}>
        {label && <div className={styles.label}>{label}</div>}
        <div className={styles.borderLine}></div>
      </Link>
    </MagneticLayout>
  ) : (
    <MagneticLayout>
      <button className={clsx(styles.button)} {...props} {...cursorProps}>
        {label && <div className={styles.label}>{label}</div>}
        <div className={styles.borderLine}></div>
      </button>
    </MagneticLayout>
  )
}

export default memo<ComponentProps>(Button)
