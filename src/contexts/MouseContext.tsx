import React, { createContext, useState, useContext, ReactNode } from 'react'

type MouseStatus = 'default' | 'text' | 'circle'

type MouseContextType = {
  onMouseOver: (status: MouseStatus) => void
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
  const [mouseStatus, setMouseStatus] = useState<string>('')

  const onMouseOver = (status: string) => {
    console.log(status)
    setMouseStatus(status)
  }

  const contextValue: MouseContextType = {
    onMouseOver,
  }

  return <MouseContext.Provider value={contextValue}>{children}</MouseContext.Provider>
}