import { contato, informacoes } from "@data/index";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BtnDownloadCv, BtnFavoriteLink, BtnLinkEmail } from "./components";
import { IdadeAutomatica } from "./components/idadeAutomatica";
import Icon from "@/components/icon";

export const HeroSection = () => {
  return (
    <section
      id="Home"
      className="min-h-screen-minus-header scroll-mt-20 p-2 py-4 md:py-2 bg-linear-to-br from-gradient-from to-gradient-to flex items-center justify-center relative overflow-hidden"
    >
      <div className="flex flex-col gap-2 md:gap-4 justify-center items-center px-4 text-center relative">
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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 mb-8">
          <BtnDownloadCv />
          <BtnLinkEmail />
        </div>
        <div className="flex items-center justify-center gap-6">
          <BtnFavoriteLink
            href={contato.github}
            message="Github"
            icon="Github"
          />
          <BtnFavoriteLink
            href={contato.linkedin}
            message="Linkedin"
            icon="Linkedin"
          />
          <BtnFavoriteLink
            href={contato.whatsapp}
            message="Whatsapp"
            icon="Phone"
          />
        </div>
      </div>
    </section>
  );
};
