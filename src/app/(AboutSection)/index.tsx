import { habilidades, informacoes } from "@data/index";
import { Card, CardContent } from "@components/ui/card";
import Icon from "@components/icon";
import { Title } from "@components/title";

export function AboutSection() {
  return (
    <section
      id="Sobre"
      className="min-h-screen-minus-header scroll-mt-10 p-2 py-12 md:py-2 flex flex-col justify-center items-center bg-background relative overflow-hidden"
    >
      <div className="flex flex-col gap-8 lg:gap-12 justify-center items-center px-4">
        <Title title="Sobre Mim" subTitle={informacoes.sobreMim} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {habilidades.map((habilidade, index) => {
            return (
              <Card
                key={`habilidades-${index}`}
                className="transition-all scale-100 duration-300 bg-gradient-to-br from-section-bg to-muted ring-1 ring-border hover:scale-105 hover:ring-primary/50 hover:shadow-lg/70 hover:shadow-primary"
              >
                <CardContent className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={habilidade.icon}
                      className="w-8 h-8 text-primary"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {habilidade.titulo}
                  </h3>
                  <p className="text-muted-foreground">
                    {habilidade.descricao}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
