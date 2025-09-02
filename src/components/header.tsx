import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { icons } from "lucide-react";

const links: {
  route: string;
  label: string;
  icon: keyof typeof icons;
}[] = [
  {
    route: "#Home",
    label: "Home",
    icon: "House",
  },
  {
    route: "#Sobre",
    label: "Sobre",
    icon: "User",
  },
];

export const Header = () => {
  return (
    <header className="w-full h-10 flex flex-row justify-between items-center"></header>
  );
};
