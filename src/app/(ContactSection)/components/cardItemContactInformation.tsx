import { Card } from "@components/ui/card";
import Icon from "@components/icon";
import { contatoType } from "@ts/index";
import Link from "next/link";

export const CardItemContactInformation = ({ cont }: { cont: contatoType }) => {
  return (
    <Card className="p-6 hover:glow-shadow transition-all duration-300 card-gradient">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={cont.url}
        className="flex items-center space-x-4 group"
      >
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon name={cont.icon} className="w-6 h-6 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{cont.titulo}</p>
          <p className="font-medium group-hover:text-primary transition-colors">
            {cont.valor}
          </p>
        </div>
      </Link>
    </Card>
  );
};
