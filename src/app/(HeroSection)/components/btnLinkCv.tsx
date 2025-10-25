import { informacoes } from "@data/index";
import Icon from "@components/icon";
import { Button } from "@components/ui/button";
import Link from "next/link";

export const BtnLinkCv = () => {
  return (
    <Button
      variant="secondary"
      size="lg"
      className="group cursor-pointer"
      asChild
    >
      <Link href={informacoes.cvUrl} target="_blank" rel="noopener noreferrer">
        <Icon
          name="FileText"
          className="mr-2 h-5 w-5 group-hover:animate-bounce"
        />
        Visualizar Currículo
      </Link>
    </Button>
  );
};
