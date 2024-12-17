'use client'
import { createContext, ReactNode, useState } from 'react'

export type sidebarContextProps = {
  isOpen: boolean
  toggleIsOpen: () => void
}

export const SidebarContext = createContext({} as sidebarContextProps)

type SidebarProviderType = {
  children: ReactNode
}

export function SidebarProvider({ children }: SidebarProviderType) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <SidebarContext.Provider value={{ isOpen, toggleIsOpen }}>
      <div className="flex h-full max-h-full w-full max-w-full flex-row overflow-hidden">
        {children}
      </div>
    </SidebarContext.Provider>
  )
}