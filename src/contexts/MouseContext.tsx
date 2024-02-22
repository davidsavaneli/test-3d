// MouseContext.tsx

import React, { createContext, useState, useContext, ReactNode } from 'react'

type MouseStatus = 'default' | 'text' | 'circle'

type MouseContextType = {
  mouseStatus: MouseStatus // Define mouseStatus here
  onMouseOver: (mouseStatus: MouseStatus) => void
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

  const onMouseOver = (newStatus: MouseStatus) => {
    setMouseStatus(newStatus)
  }

  const onMouseOut = (newStatus: MouseStatus) => {
    setMouseStatus(newStatus)
  }

  const contextValue: MouseContextType = {
    mouseStatus,
    onMouseOver,
    onMouseOut,
  }

  return <MouseContext.Provider value={contextValue}>{children}</MouseContext.Provider>
}
