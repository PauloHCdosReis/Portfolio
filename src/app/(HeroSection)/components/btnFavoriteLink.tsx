import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@components/ui/tooltip";
import Icon from "@components/icon";
import { Button } from "@components/ui/button";
import { icons } from "lucide-react";
import Link from "next/link";

type BtnFavoriteLinkProps = {
  href: string;
  icon: keyof typeof icons;
  message: string;
};

export const BtnFavoriteLink = ({
  href,
  icon,
  message,
}: BtnFavoriteLinkProps) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button
          size={"icon"}
          variant={"ghost"}
          className="text-background dark:text-foreground"
          asChild
        >
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <Icon name={icon} className="size-6" />
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent className="text-foreground">
        <p className="font-bold">{message}</p>
      </TooltipContent>
    </Tooltip>
  );
};
