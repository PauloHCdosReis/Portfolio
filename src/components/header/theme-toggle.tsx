"use client";

import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import Icon from "../icon";
import { themes } from "@data/index";
import { cn } from "@lib/utils";
import { getCurrentTheme, setNewTheme } from "@actions/index";
import { useCallback, useEffect, useState } from "react";
import { ThemeType } from "@ts/index";

export function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState<ThemeType | undefined>();

  const getTheme = useCallback(async () => {
    const currentTheme = await getCurrentTheme();
    console.log(currentTheme);
    setCurrentTheme(currentTheme);
  }, []);

  useEffect(() => {
    getTheme();
  }, [getTheme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="cursor-pointer ring-1 ring-primary/50 shadow-lg/50 shadow-primary"
        >
          <Icon name="Palette" className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => (
          <DropdownMenuItem
            onClick={() => {
              setNewTheme(theme.name);
              setCurrentTheme(theme.name);
            }}
            className={cn(
              "flex items-center gap-2 cursor-pointer",
              theme.name === currentTheme && theme.btn
            )}
            key={`theme-toggle-${theme.name}`}
          >
            <span
              className={cn(
                "h-4 w-4 rounded-lg border border-gray-300",
                theme.span
              )}
            />
            {theme.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
