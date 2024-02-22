import React, { createContext, useState, useContext, ReactNode } from 'react'

type MouseStatus = 'default' | 'primary' | 'secondary' | 'text'

type MouseContextType = {
  mouseStatus: MouseStatus
  additionalText: string | undefined
  onMouseOver: (mouseStatus: MouseStatus, additionalText?: string) => void
  onMouseOut: (mouseStatus: MouseStatus) => void
}

const MouseContext = createContext<MouseContextType | undefined>(undefined)

export const useMouseContext = () => {
  const context = useContext(MouseContext)
  if (!context) {
    throw new Error('useMouseContext must be used within a MouseProvider')
  }
  return context
}

type MouseProviderProps = {
  children: ReactNode
}

export const MouseProvider = ({ children }: MouseProviderProps) => {
  const [mouseStatus, setMouseStatus] = useState<MouseStatus>('default')
  const [additionalText, setAdditionalText] = useState<string | undefined>(undefined)

  const onMouseOver = (newStatus: MouseStatus, additionalText?: string) => {
    setMouseStatus(newStatus)
    setAdditionalText(additionalText)
  }

  const onMouseOut = () => {
    setMouseStatus('default')
    setAdditionalText(undefined)
  }

  const contextValue: MouseContextType = {
    mouseStatus,
    additionalText,
    onMouseOver,
    onMouseOut,
  }

  return <MouseContext.Provider value={contextValue}>{children}</MouseContext.Provider>
}
