import { icons, LucideProps } from 'lucide-react'
import Icon from '../icon'

type ButtonIconType = {
  name: keyof typeof icons
} & LucideProps

export const ButtonIcon = ({ name, ...props }: ButtonIconType) => {
  return <Icon name={name} {...props} />
}
