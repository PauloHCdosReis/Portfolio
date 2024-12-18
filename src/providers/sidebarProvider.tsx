'use client'
import { ReactNode, useState } from 'react'
import { createContext } from 'use-context-selector'

export type sidebarContextProps = {
  isOpen: boolean
  toggleIsOpen: (value?: boolean) => void
}

export const SidebarContext = createContext({} as sidebarContextProps)

type SidebarProviderType = {
  children: ReactNode
}

export function SidebarProvider({ children }: SidebarProviderType) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = (value?: boolean) => {
    setIsOpen((prevState) => value ?? !prevState)
  }

  return (
    <SidebarContext.Provider value={{ isOpen, toggleIsOpen }}>
      <div className="flex h-full max-h-full w-full max-w-full flex-row overflow-hidden">
        {children}
      </div>
    </SidebarContext.Provider>
  )
}
