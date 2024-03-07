import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react'
import { usePathname } from 'next/navigation'

type CursorStyle = 'none' | 'default' | 'button' | 'largeText' | 'smallText' | 'drag'

type CursorContextType = {
  cursorStyle: CursorStyle
  cursorText: string | undefined
  setCursorStyle: (cursorStyle: CursorStyle, cursorText?: string) => void
}

const CursorContext = createContext<CursorContextType | undefined>(undefined)

export const useCursorContext = () => {
  const context = useContext(CursorContext)
  if (!context) {
    throw new Error('useCursorContext must be used within a CursorProvider')
  }
  return context
}

type CursorProviderProps = {
  children: ReactNode
}

export const CursorProvider = ({ children }: CursorProviderProps) => {
  const pathname = usePathname()

  useEffect(() => {
    setTimeout(() => updateCursorStyle('none', ''), 800)
  }, [pathname])

  const [style, setStyle] = useState<CursorStyle>('none')
  const [text, setText] = useState<string | undefined>(undefined)

  const updateCursorStyle = (newStyle: CursorStyle, text?: string) => {
    setStyle(newStyle)
    setText(text)
  }

  const contextValue: CursorContextType = {
    cursorStyle: style,
    cursorText: text,
    setCursorStyle: updateCursorStyle,
  }

  return <CursorContext.Provider value={contextValue}>{children}</CursorContext.Provider>
}
