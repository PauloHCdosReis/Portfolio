'use client'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import Icon from '../icon'
import { useSiderBar } from '@/hooks'
import { useState } from 'react'

export const SidebarTheme = () => {
  const { setTheme } = useTheme()
  const [openDrop, setOpenDrop] = useState(false)
  const { isOpen } = useSiderBar()

  return (
    <TooltipProvider delayDuration={200}>
      <div className="relative flex justify-center items-center">
        <DropdownMenu open={openDrop} onOpenChange={setOpenDrop}>
          <Tooltip>
            <DropdownMenuTrigger asChild>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="w-9 h-9">
                  <Icon name="SunMoon" />
                </Button>
              </TooltipTrigger>
            </DropdownMenuTrigger>
            <TooltipContent
              side="left"
              align="center"
              hidden={openDrop || isOpen}
              className="px-3 py-2 rounded shadow-lg text-sm"
            >
              <p className="font-univia-ultra">Alterar Tema</p>
            </TooltipContent>
          </Tooltip>
          <DropdownMenuContent
            sideOffset={8}
            alignOffset={-2}
            side="left"
            align="end"
          >
            <DropdownMenuLabel className="text-center font-univia-ultra">
              Alterar Tema
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="font-univia-regular cursor-pointer"
              onClick={() => setTheme('light')}
            >
              <Icon name="Sun" />
              Tema Claro
            </DropdownMenuItem>
            <DropdownMenuItem
              className="font-univia-regular cursor-pointer"
              onClick={() => setTheme('dark')}
            >
              <Icon name="Moon" />
              Tema Escuro
            </DropdownMenuItem>
            <DropdownMenuItem
              className="font-univia-regular cursor-pointer"
              onClick={() => setTheme('system')}
            >
              <Icon name="SunMoon" />
              Tema do Sistema
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </TooltipProvider>
  )
}
