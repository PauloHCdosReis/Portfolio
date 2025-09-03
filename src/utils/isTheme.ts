import { themes } from "@data/index";
import { ThemeType } from "@ts/index";

export function isTheme(value: string): value is ThemeType {
  return themes.some((theme) => theme.name === value);
}
