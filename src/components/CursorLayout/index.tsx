import React, { memo } from 'react'
import { Cursor } from 'components'
import { useCursorContext } from 'contexts'

type CursorLayoutProps = {
  children: React.ReactNode
}

const CursorLayout = ({ children }: CursorLayoutProps) => {
  const { cursorText } = useCursorContext()

  return (
    <React.Fragment>
      <Cursor text={cursorText} />
      {children}
    </React.Fragment>
  )
}

export default memo<CursorLayoutProps>(CursorLayout)
