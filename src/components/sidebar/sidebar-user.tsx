'use client'
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
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export const SidebarUser = () => {
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
                  <Avatar className="h-9 w-9 rounded-lg">
                    <AvatarImage
                      alt="Foto de Perfil"
                      src="https://lh3.googleusercontent.com/pw/AP1GczNFc5BK7Qc5uzBolXDi9Fd5pVVf4jvD10qd7nuYgZFP7IwHLlfgSG_88zvv7jzDHObIs7nnRI-V5z5x2hnoXPGmyzafpidHRsVBYPd0RhKhi3HIKgIno7WETkvX98EnqsgPtnMEoSVSM4Xo-Jrl4FOL=w400-h400-s-no-gm?authuser=0"
                    />
                    <AvatarFallback className="rounded-lg">PR</AvatarFallback>
                  </Avatar>
                </Button>
              </TooltipTrigger>
            </DropdownMenuTrigger>
            <TooltipContent
              side="left"
              align="center"
              hidden={openDrop || isOpen}
              className="px-3 py-2 rounded shadow-lg text-sm"
            >
              <p className="font-univia-ultra">Paulo Reis</p>
            </TooltipContent>
          </Tooltip>
          <DropdownMenuContent
            sideOffset={8}
            alignOffset={-2}
            side="left"
            align="start"
          >
            <DropdownMenuLabel className="text-center font-univia-ultra">
              Paulo Reis
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="font-univia-regular cursor-pointer">
              <Icon name="Github" />
              GitHub
            </DropdownMenuItem>
            <DropdownMenuItem className="font-univia-regular cursor-pointer">
              <Icon name="Linkedin" />
              Linkedin
            </DropdownMenuItem>
            <DropdownMenuItem className="font-univia-regular cursor-pointer">
              <Icon name="Mail" />
              E-mail
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </TooltipProvider>
  )
}
