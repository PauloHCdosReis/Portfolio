import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@components/ui/timeline";
import Icon from "@components/icon";
import { Badge } from "@components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@components/ui/card";
import { experiencias } from "@data/index";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";

export const ExperienceSection = () => {
  return (
    <section
      id="Experiencia"
      className="min-h-screen-minus-header bg-neutral-100 dark:bg-neutral-900/15 scroll-mt-10 p-2 py-12 flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div className="flex flex-col gap-8 lg:gap-12 justify-center items-center px-4 w-full">
        <div className="text-center flex flex-col justify-center items-center gap-4">
          <h2 className="text-4xl md:text-5xl font-bold ">
            Experiência Profissional
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
          <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">
            Minha jornada profissional construindo soluções tecnológicas
            inovadoras
          </p>
        </div>
        <div className="flex flex-col gap-8 w-full justify-center items-center">
          {experiencias.map((exp, index) => (
            <Card
              key={`experiencias-${exp.empresa}-${index}`}
              className="w-full py-6 px-2 md:px-6 transition-all scale-100 duration-300 bg-gradient-to-br from-section-bg to-muted ring-1 ring-border hover:scale-101 hover:ring-primary/50 hover:shadow-lg/70 hover:shadow-primary"
            >
              <CardHeader className="flex flex-col sm:flex-row items-start gap-4">
                <Avatar className="h-12 w-12 sm:h-16 sm:w-16 rounded-md ring-2 ring-border">
                  <AvatarImage src={exp.logo.src} alt={exp.iniciais} />
                  <AvatarFallback>{exp.iniciais}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center text-foreground gap-2 text-md sm:text-xl font-bold">
                    <Icon name="Building" className="w-4 h-4 flex-shrink-0" />
                    <span>{exp.empresa}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground gap-2 text-sm sm:text-base">
                    <Icon name="MapPin" className="w-4 h-4 flex-shrink-0" />
                    <span>{exp.localizacao}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col md:flex-row gap-6 px-2 md:px-6">
                <Timeline className="flex-grow">
                  {exp.cargos.map((cargo, index) => (
                    <TimelineItem
                      key={`experiencias-cargo-${cargo.titulo}`}
                      step={index}
                    >
                      <TimelineHeader>
                        <TimelineSeparator />
                        <TimelineDate asChild>
                          <span className="flex flex-row gap-2">
                            <Icon
                              name="Calendar"
                              className="w-4 h-4 text-primary"
                            />
                            {cargo.dataEntrada} - {cargo.dataSaida}
                          </span>
                        </TimelineDate>
                        <TimelineTitle className="mt-2">
                          {cargo.titulo}
                        </TimelineTitle>
                        <TimelineIndicator />
                      </TimelineHeader>
                      <TimelineContent className="text-sm sm:text-base leading-relaxed sm:leading-snug p-2 sm:p-0">
                        {cargo.descricao}
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </CardContent>
              <CardFooter className="flex flex-wrap justify-center items-center md:justify-start gap-2 px-2 md:px-6">
                {exp.competencias.map((comp, index) => (
                  <Badge
                    key={`experiencias-${comp}-${index}`}
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    {comp}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
