import React, { memo } from 'react'
import { Cursor } from 'components'
import { useMouseContext } from 'contexts'

type CursorLayoutProps = {
  children: React.ReactNode
}

const CursorLayout = ({ children }: CursorLayoutProps) => {
  const { additionalText } = useMouseContext()

  return (
    <React.Fragment>
      <Cursor additionalText={additionalText} />
      {children}
    </React.Fragment>
  )
}

export default memo<CursorLayoutProps>(CursorLayout)
