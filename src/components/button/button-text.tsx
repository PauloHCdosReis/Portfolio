import { cn } from '@/lib/utils'
import { HTMLAttributes, ReactNode } from 'react'

type ButtonTextType = {
  children: ReactNode
  className?: string
} & HTMLAttributes<HTMLSpanElement>

export const ButtonText = ({
  children,
  className,
  ...props
}: ButtonTextType) => {
  return (
    <span {...props} className={cn(className)}>
      {children}
    </span>
  )
}
