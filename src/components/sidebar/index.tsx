import { SidebarNav } from './sidebar-nav'
import { SidebarTheme } from './sidebar-theme'
import { SidebarUser } from './sidebar-user'

export const Sidebar = () => {
  return (
    <nav className="flex flex-col justify-between items-center py-3 min-w-12 w-1min-w-12 max-w-1min-w-12 border-r border-primary">
      <SidebarUser />
      <SidebarNav />
      <SidebarTheme />
    </nav>
  )
}
