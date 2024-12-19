'use client'
import { useEffect, useState } from 'react'
import Icon from '../icon'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { useSiderBar } from '@/hooks'
import { useTheme } from 'next-themes'

export const SidebarNav = () => {
  const [openDrop, setOpenDrop] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const { isOpen } = useSiderBar()
  const { theme } = useTheme()

  useEffect(() => {
    if (theme !== 'light') {
      setIsDark(true)
    } else {
      setIsDark(false)
    }
  }, [theme])

  const data = [
    {
      title: 'Rockeseat',
      image: isDark
        ? 'https://lh3.googleusercontent.com/pw/AP1GczPWdSDaSr2tYYnWz46difPls2288VqR5CjGXUr_2xWR5rXUmmVBvuVllv181eU2_VpYAxzhMvDNQsaVZ3l53ekb6PNbiwg2EXsMIioZ7Uk7pBDOYLR7_05tB8lxdzgcu-Ihikbbhgq8Pb43nS82XW4V=w164-h148-s-no-gm?authuser=0'
        : 'https://lh3.googleusercontent.com/pw/AP1GczPv0xWGfsPrjacxsv1aS-Zu87rId2_CgyHglhhwjHIkyrdXBXM26OxFPuoFzxjm-v_vPdnrRTIYYq8RK6KiBHxPduKF4vtyFyVM1LxPitH0MKSVKnypPkps5KrxLy_XNmMsrcEEEZ56S9ceEzqr3-J7=w225-h225-s-no-gm?authuser=0',
      items: [
        {
          title: 'React',
        },
      ],
    },
  ]

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
                      alt="Icone Rockeseat Dark"
                      src={
                        isDark
                          ? 'https://lh3.googleusercontent.com/pw/AP1GczPWdSDaSr2tYYnWz46difPls2288VqR5CjGXUr_2xWR5rXUmmVBvuVllv181eU2_VpYAxzhMvDNQsaVZ3l53ekb6PNbiwg2EXsMIioZ7Uk7pBDOYLR7_05tB8lxdzgcu-Ihikbbhgq8Pb43nS82XW4V=w164-h148-s-no-gm?authuser=0'
                          : 'https://lh3.googleusercontent.com/pw/AP1GczPv0xWGfsPrjacxsv1aS-Zu87rId2_CgyHglhhwjHIkyrdXBXM26OxFPuoFzxjm-v_vPdnrRTIYYq8RK6KiBHxPduKF4vtyFyVM1LxPitH0MKSVKnypPkps5KrxLy_XNmMsrcEEEZ56S9ceEzqr3-J7=w225-h225-s-no-gm?authuser=0'
                      }
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
