import { links } from "@data/links";
import Link from "next/link";
import { Button } from "../ui/button";
import Icon from "../icon";

const MenuDesktop = () => {
  return (
    <div className="hidden md:flex md:gap-1 lg:gap-4 flex-row justify-center items-center">
      {links.map((link) => (
        <Button
          variant={"ghost"}
          size={"sm"}
          key={`menu-desktop-${link.route}`}
          className="text-muted-foreground"
          asChild
        >
          <Link href={link.route}>
            <Icon name={link.icon} /> {link.label}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default MenuDesktop;
