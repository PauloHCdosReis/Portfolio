import { ButtonIcon } from './button-icon'
import { ButtonRoot } from './button-root'
import { ButtonText } from './button-text'

const Button = {
  ROOT: ButtonRoot,
  TEXT: ButtonText,
  ICON: ButtonIcon,
} as const
export default Button
