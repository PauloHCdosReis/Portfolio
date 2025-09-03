import MenuDesktop from "./menu-desktop";
import MenuMobile from "./menu-mobile";
import { ModeToggle } from "./mode-toggle";
import { ThemeToggle } from "./theme-toggle";
import Title from "./title";

export const Header = () => {
  return (
    <header className="w-full min-h-13 h-13 max-h-13 flex flex-row justify-between items-center gap-1 md:gap-2 lg:gap-4 px-4 backdrop-blur-sm border-b border-border">
      <div className="flex flex-row gap-2">
        <MenuMobile />
        <Title />
      </div>
      <MenuDesktop />
      <div className="flex flex-row gap-2">
        <ThemeToggle />
        <ModeToggle />
      </div>
    </header>
  );
};
