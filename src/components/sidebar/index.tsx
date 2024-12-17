import { SidebarTheme } from './sidebar-theme'

export const Sidebar = () => {
  return (
    <nav className="flex flex-col justify-between items-center py-3 w-12 max-w-12 border-r border-purple-400 dark:border-purple-700">
      <div>H</div>
      <div>N</div>
      <SidebarTheme />
    </nav>
  )
}
