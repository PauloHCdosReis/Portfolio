import { ReactNode } from 'react'

type SidebarContentType = {
  children: ReactNode
}

export const SidebarContent = ({ children }: SidebarContentType) => {
  return (
    <div className="p-2 min-h-full h-full max-h-full min-w-full w-full max-w-full overflow-hidden">
      {children}
    </div>
  )
}
