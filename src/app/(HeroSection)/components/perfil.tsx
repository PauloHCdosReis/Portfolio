import { informacoes } from "@data/index";
import { IdadeAutomatica } from "./idadeAutomatica";
import Icon from "@/components/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Perfil = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
      <Avatar className="w-36 h-36 mx-auto ring-4 ring-background">
        <AvatarImage src={informacoes.foto} />
        <AvatarFallback>{informacoes.iniciais}</AvatarFallback>
      </Avatar>

      <h1 className="text-3xl md:text-5xl font-bold mb-2 text-background dark:text-foreground animate-fade-in">
        {informacoes.nome}
      </h1>

      <div className="flex items-center gap-2 text-background dark:text-foreground">
        <Icon name="Briefcase" size={20} />
        <h2 className="text-xl md:text-2xl">{informacoes.cargo}</h2>
      </div>

      <div className="flex flex-col items-center gap-1 text-sm text-background/85 dark:text-foreground/80">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Icon name="MapPinned" size={16} /> {informacoes.localização}
          </span>
          <span className="size-1 bg-background dark:bg-foreground rounded-full" />
          <span className="flex justify-center items-center gap-1">
            <Icon name="Cake" size={16} /> <IdadeAutomatica /> anos
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="Mars" size={16} /> {informacoes.sexo}
        </div>
      </div>
    </div>
  );
};
