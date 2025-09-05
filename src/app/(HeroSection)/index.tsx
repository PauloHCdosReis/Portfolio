import { contato, informacoes } from "@data/index";
import {
  BtnDownloadCv,
  BtnFavoriteLink,
  BtnLinkEmail,
  Perfil,
} from "./components";

export const HeroSection = () => {
  return (
    <section
      id="Home"
      className="min-h-screen-minus-header scroll-mt-20 p-2 py-4 md:py-2 bg-linear-to-br from-gradient-from to-gradient-to flex items-center justify-center relative overflow-hidden"
    >
      <div className="flex flex-col gap-2 md:gap-4 justify-center items-center px-4 text-center relative">
        <Perfil />
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
