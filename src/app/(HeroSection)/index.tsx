import Icon from "@components/icon";
import { contato, informacoes } from "@data/index";
import { Button } from "@components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const subject = encodeURIComponent("Contato via portfólio");
const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  contato.email
)}&su=${subject}`;

export const HeroSection = () => {
  return (
    <section
      id="Home"
      className="min-h-screen-minus-header scroll-mt-20 p-2 py-4 md:py-2 bg-linear-to-br from-gradient-from to-gradient-to flex items-center justify-center relative overflow-hidden"
    >
      <div className="flex flex-col gap-2 md:gap-4 justify-center items-center px-4 text-center relative">
        <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
          <Avatar className="w-50 h-50 mx-auto ring-4 ring-background">
            <AvatarImage src={informacoes.foto} />
            <AvatarFallback>{informacoes.iniciais}</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-background dark:text-foreground animate-fade-in">
            {informacoes.nome}
          </h1>
          <h2 className="text-xl md:text-2xl mb-2 text-background dark:text-foreground">
            {informacoes.cargo}
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 mb-8">
          <Button
            variant="secondary"
            size="lg"
            className="group cursor-pointer"
          >
            <Icon
              name="Download"
              className="mr-2 h-5 w-5 group-hover:animate-bounce"
            />
            Download CV
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group cursor-pointer"
            asChild
          >
            <Link href={gmailUrl} target="_blank" rel="noopener noreferrer">
              <Icon
                name="Mail"
                className="mr-2 h-5 w-5 group-hover:animate-bounce"
              />
              Entre em Contato
            </Link>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <Button
            size={"icon"}
            variant={"ghost"}
            className="text-background dark:text-foreground"
            asChild
          >
            <Link
              href={contato.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="Github" className="size-6" />
            </Link>
          </Button>
          <Button
            size={"icon"}
            variant={"ghost"}
            className="text-background dark:text-foreground"
            asChild
          >
            <Link
              href={contato.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="Linkedin" className="size-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
