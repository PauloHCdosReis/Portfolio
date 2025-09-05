import { Card, CardContent } from "@components/ui/card";
import Icon from "@components/icon";
import { icons } from "lucide-react";

type CardHabilidadeProps = {
  icon: keyof typeof icons;
  titulo: string;
  descricao: string;
};

export const CardHabilidade = ({
  titulo,
  descricao,
  icon,
}: CardHabilidadeProps) => {
  return (
    <Card className="transition-all scale-100 duration-300 bg-gradient-to-br from-section-bg to-muted ring-1 ring-border hover:scale-105 hover:ring-primary/50 hover:shadow-lg/70 hover:shadow-primary">
      <CardContent className="text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name={icon} className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{titulo}</h3>
        <p className="text-muted-foreground">{descricao}</p>
      </CardContent>
    </Card>
  );
};
