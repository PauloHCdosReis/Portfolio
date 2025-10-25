import { contato, informacoes } from "@data/index";
import { BtnLinkCv, BtnFavoriteLink, BtnLinkEmail, Perfil } from "./components";

export const HeroSection = () => {
  return (
    <section
      id="Home"
      className="min-h-screen-minus-header scroll-mt-20 p-2 py-4 md:py-2 bg-linear-to-br from-gradient-from to-gradient-to flex items-center justify-center relative overflow-hidden"
    >
      <div className="flex flex-col gap-2 md:gap-4 justify-center items-center px-4 text-center relative">
        <Perfil />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 mb-8">
          <BtnLinkCv />
          <BtnLinkEmail />
        </div>
        <div className="flex items-center justify-center gap-6">
          <BtnFavoriteLink
            href={contato.github.url}
            message={contato.github.titulo}
            icon={contato.github.icon}
          />
          <BtnFavoriteLink
            href={contato.linkedin.url}
            message={contato.linkedin.titulo}
            icon={contato.linkedin.icon}
          />
          <BtnFavoriteLink
            href={contato.whatsapp.url}
            message={contato.whatsapp.titulo}
            icon={contato.whatsapp.icon}
          />
        </div>
      </div>
    </section>
  );
};
