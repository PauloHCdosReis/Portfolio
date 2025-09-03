import MenuMobile from "./menu-mobile";
import { ModeToggle } from "./mode-toggle";
import { ThemeToggle } from "./theme-toggle";
import Title from "./title";

export const Header = () => {
  return (
    <header className="w-full min-h-13 h-13 max-h-13 bg-sidebar flex flex-row justify-between items-center gap-2 px-4">
      <div className="flex flex-row gap-2">
        <MenuMobile />
        <Title />
      </div>
      <div className="flex flex-row gap-2">
        <ThemeToggle />
        <ModeToggle />
      </div>
    </header>
  );
};
