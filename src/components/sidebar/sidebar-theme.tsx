'use client'
import Button from '../button'
import { useState } from 'react'

export const SidebarTheme = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = (value: boolean) => setIsOpen(value)

  return (
    <div className="relative flex justify-center items-center">
      {/* Botão para abrir o menu */}
      <Button.ROOT
        variantSize="icon"
        variantType="ghost"
        onClick={() => toggleMenu(true)}
        onBlur={() => toggleMenu(false)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="focus-visible:ring-1"
      >
        <Button.ICON name="SunMoon" />
      </Button.ROOT>

      {/* Drop Menu */}
      {isOpen && (
        <div className="absolute left-11 -bottom-2 mb-2 dark:bg-neutral-900 shadow-sm shadow-purple-950 rounded-md z-30 p-2 w-40">
          <ul className="flex flex-col">
            <li>
              <button
                className="px-4 py-2 hover:bg-gray-100 rounded-md w-full text-left"
                onClick={() => alert('Opção 1')}
              >
                Opção 1
              </button>
            </li>
            <li>
              <button
                className="px-4 py-2 hover:bg-gray-100 rounded-md w-full text-left"
                onClick={() => alert('Opção 2')}
              >
                Opção 2
              </button>
            </li>
            <li>
              <button
                className="px-4 py-2 hover:bg-gray-100 rounded-md w-full text-left"
                onClick={() => alert('Opção 3')}
              >
                Opção 3
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
