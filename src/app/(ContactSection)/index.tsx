import { Title } from "@/components/title";
import { CardCallToAction, CardContactInformation } from "./components";

export const ContactSection = () => {
  return (
    <section
      id="Contato"
      className="min-h-screen-minus-header bg-neutral-100 dark:bg-neutral-900/40 scroll-mt-10 p-2 py-12 flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div className="flex flex-col gap-8 lg:gap-12 justify-center items-center px-4 w-full">
        <Title
          title="Entre em Contato"
          subTitle="Atualmente estou em busca de novas oportunidades como Desenvolvedor Frontend/Mobile."
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CardContactInformation />
            <CardCallToAction />
          </div>
        </div>
      </div>
    </section>
  );
};
