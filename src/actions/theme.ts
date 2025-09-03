"use server";

import { ThemeType } from "@ts/index";
import { getCookie, setCookie, isTheme } from "@utils/index";

export const setNewTheme = async (theme: ThemeType) => {
  await setCookie("theme", theme, { maxAge: 604800 });
};

export const getCurrentTheme = async (): Promise<ThemeType> => {
  const savedTheme = await getCookie("theme");
  return savedTheme && isTheme(savedTheme) ? savedTheme : "blue";
};
