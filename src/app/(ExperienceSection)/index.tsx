import { experiencias } from "@data/index";
import { Title } from "@components/title";
import { CardExperience } from "./components";

export const ExperienceSection = () => {
  return (
    <section
      id="Experiencia"
      className="min-h-screen-minus-header bg-neutral-100 dark:bg-neutral-900/40 scroll-mt-10 p-2 py-12 flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div className="flex flex-col gap-8 lg:gap-12 justify-center items-center px-4 w-full">
        <Title
          title="Experiência Profissional"
          subTitle="Minha jornada profissional construindo soluções tecnológicas
            inovadoras"
        />
        <div className="flex flex-col gap-8 w-full justify-center items-center">
          {experiencias.map((exp, index) => (
            <CardExperience
              key={`experiencias-${exp.empresa}-${index}`}
              exp={exp}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
