import { themes } from "@/data";
import { ThemeType } from "@/types";

export function isTheme(value: string): value is ThemeType {
  return (themes as readonly string[]).includes(value);
}
