import { themes } from "@data/index";

export type ThemeType = (typeof themes)[number]["name"];
