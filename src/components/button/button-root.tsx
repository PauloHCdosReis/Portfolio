import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonRootType = {
  children: ReactNode
  className?: string
  variantType?: 'default' | 'ghost' | 'secundary'
  variantSize?: 'default' | 'icon'
  isLoading?: boolean
  isDisabled?: boolean
  bold?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonRoot = ({
  children,
  className = '',
  variantType = 'default',
  variantSize = 'default',
  isDisabled = false,
  bold = false,
  ...props
}: ButtonRootType) => {
  const variantTypeClass: Record<string, string> = {
    default:
      'text-white bg-purple-600 dark:bg-purple-700 hover:bg-purple-500 hover:dark:bg-purple-600 focus-visible:dark:ring-purple-900 focus:dark:ring-purple-900',
    ghost:
      'text-neutral-900 dark:text-neutral-100 bg-transparent dark:bg-transparent hover:bg-purple-50 hover:dark:bg-purple-950/80 focus-visible:dark:ring-purple-900 focus:dark:ring-purple-900',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  }

  const variantSizeClass: Record<string, string> = {
    default: 'h-9 px-4 py-2 rounded-md',
    icon: 'h-9 w-9 rounded-sm',
  }

  return (
    <button
      {...props}
      data-isdisabled={isDisabled}
      className={cn(
        'group/button flex flex-row justify-center items-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-4 focus:ring-4',
        variantTypeClass[variantType],
        variantSizeClass[variantSize],
        bold ? 'font-univia-bold' : 'font-univia-regular',
        className,
      )}
      type="button"
    >
      {children}
    </button>
  )
}
