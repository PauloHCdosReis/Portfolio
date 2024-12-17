import {
  SidebarContext,
  sidebarContextProps,
} from '@/providers/sidebarProvider'
import { useContextSelector } from 'use-context-selector'

export const useSiderBar = (): sidebarContextProps => {
  const isOpen = useContextSelector(SidebarContext, (v) => v.isOpen)

  const toggleIsOpen = useContextSelector(SidebarContext, (v) => v.toggleIsOpen)

  return { isOpen, toggleIsOpen }
}
