import React, { memo } from 'react'
import clsx from 'clsx'
import { useCursorContext } from 'contexts'

import styles from './styles.module.css'

export type ComponentProps = React.ComponentProps<'button'> & {
  label?: string
}

const Button = ({ label, ...props }: ComponentProps) => {
  const { setCursorStyle } = useCursorContext()

  return (
    <button
      className={clsx(styles.button)}
      {...props}
      onMouseOver={() => setCursorStyle('button')}
      onMouseOut={() => setCursorStyle('none')}
      onClick={() => setCursorStyle('none')}
    >
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.borderLine}></div>
    </button>
  )
}

export default memo<ComponentProps>(Button)
