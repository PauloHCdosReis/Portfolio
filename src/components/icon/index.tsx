import { icons, Info, LucideProps } from 'lucide-react'

export type IconProps = {
  name: keyof typeof icons
} & LucideProps

export const Icon = ({ name, size = 24, ...props }: IconProps) => {
  const LucideIcon = icons[name]

  if (!LucideIcon) {
    return <Info size={size} {...props} />
  }

  return <LucideIcon size={size} {...props} />
}

export default Icon
