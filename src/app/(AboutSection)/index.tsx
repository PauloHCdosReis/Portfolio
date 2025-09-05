import { habilidades, informacoes } from "@data/index";
import { Title } from "@components/title";
import { CardHabilidade } from "./components";

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
              <CardHabilidade key={`habilidades-${index}`} {...habilidade} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
