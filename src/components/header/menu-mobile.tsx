import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { Button } from "@components/ui/button";
import Icon from "@components/icon";
import { links } from "@/data/links";
import Link from "next/link";

const MenuMobile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full cursor-pointer md:hidden"
          aria-label="Open edit menu"
        >
          <Icon name="Menu" size={16} aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {links.map((link) => (
          <DropdownMenuItem
            key={`menu-mobile-${link.route}`}
            className="py-1 cursor-pointer text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 hover:dark:text-neutral-100"
            asChild
          >
            <Link href={link.route}>
              <div
                className="bg-background flex size-7 items-center justify-center rounded-md border"
                aria-hidden="true"
              >
                <Icon name={link.icon} size={10} className="opacity-60" />
              </div>
              <h1 className="text-sm font-medium">{link.label}</h1>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuMobile;
