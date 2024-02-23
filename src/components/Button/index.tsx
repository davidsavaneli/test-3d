import React, { memo } from 'react'
import clsx from 'clsx'
import { useMouseContext } from 'contexts'

import styles from './styles.module.css'

export type ComponentProps = React.ComponentProps<'button'> & {
  label?: string
}

const Button = ({ label, ...props }: ComponentProps) => {
  const { onMouseOver, onMouseOut } = useMouseContext()

  return (
    <button
      className={clsx(styles.button)}
      {...props}
      onMouseOver={() => onMouseOver('small')}
      onMouseOut={() => onMouseOut('default')}
      onClick={() => onMouseOut('default')}
    >
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.borderLine}></div>
    </button>
  )
}

export default memo<ComponentProps>(Button)
