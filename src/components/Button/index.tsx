import React, { memo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { useCursorContext } from 'contexts'
import { MagneticLayout } from 'components'

import styles from './styles.module.css'

export type ComponentProps = React.ComponentProps<'button'> & {
  label?: string
  href?: string
  loading?: boolean
}

const Button = ({ label, href, loading = false, ...props }: ComponentProps) => {
  const { setCursorStyle } = useCursorContext()

  const cursorProps = {
    onMouseOver: () => setCursorStyle('button'),
    onMouseOut: () => setCursorStyle('none'),
  }

  return href ? (
    <MagneticLayout>
      <motion.div whileTap={{ scale: 0.9 }}>
        <Link scroll={false} href={href} className={clsx(styles.button)} {...cursorProps}>
          {label && <div className={styles.label}>{label}</div>}
          <div className={styles.borderLine}></div>
        </Link>
      </motion.div>
    </MagneticLayout>
  ) : (
    <MagneticLayout>
      <motion.div whileTap={{ scale: 0.9 }}>
        <button
          className={clsx(styles.button, {
            [styles.loading]: loading,
          })}
          {...props}
          {...cursorProps}
        >
          {label && <div className={styles.label}>{label}</div>}
          <div className={styles.borderLine}></div>
        </button>
      </motion.div>
    </MagneticLayout>
  )
}

export default memo<ComponentProps>(Button)
