import { Badge } from "@components/ui/badge";
import Icon from "@components/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Card, CardFooter } from "@components/ui/card";
import { certificados } from "@data/certificados";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BtnCopyCredentialId } from "./components";

export const CertificatesSection = () => {
  return (
    <section
      id="Certificados"
      className="min-h-screen-minus-header scroll-mt-10 p-2 py-12 flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div className="flex flex-col gap-8 lg:gap-12 justify-center items-center px-4 w-full">
        <div className="text-center flex flex-col justify-center items-center gap-4">
          <h2 className="text-4xl md:text-5xl font-bold ">Certificações</h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
          <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">
            Certificações que comprovam minha expertise e compromisso com a
            excelência técnica
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificados.map((cert, index) => (
            <Card
              key={index}
              className="py-0 gap-4 overflow-hidden transition-all duration-300 group ring-2 ring-border"
            >
              <Avatar className="aspect-video w-full h-60 rounded-none flex items-center justify-center">
                <AvatarImage src={cert.imagem.src} alt={cert.iniciais} />
                <AvatarFallback className="rounded-none text-lg">
                  {cert.iniciais}
                </AvatarFallback>
                <Button
                  variant="ghost"
                  className="absolute cursor-pointer inset-0 h-full flex items-center rounded-none justify-center p-0 bg-black/40 text-white hover:bg-bg-black/40 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  asChild
                >
                  <Link
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      name="ExternalLink"
                      className="size-8 flex-shrink-0"
                    />
                  </Link>
                </Button>
              </Avatar>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <Icon
                      name="Award"
                      className="w-5 h-5 text-primary mr-2 flex-shrink-0"
                    />
                    <h3 className="font-bold text-lg leading-tight">
                      {cert.titulo}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-3">{cert.emissora}</p>

                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Icon name="Calendar" className="w-4 h-4 mr-2" />
                  {cert.dataEntrada} - {cert.dataSaida}
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.habilidades.map((hab, index) => (
                    <Badge
                      key={`certificados-habilidades-${hab}-${index}`}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary"
                    >
                      {hab}
                    </Badge>
                  ))}
                </div>

                {cert.credentialId && (
                  <div className="flex flex-row justify-start gap-2 items-center">
                    <BtnCopyCredentialId credentialId={cert.credentialId} />
                    <span className="text-xs text-muted-foreground">
                      ID: {cert.credentialId}
                    </span>
                  </div>
                )}
              </div>
              <CardFooter className="flex md:hidden pt-0 -mt-4 mb-2">
                <Button variant={"outline"} className="w-full" asChild>
                  <Link
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="ExternalLink" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
