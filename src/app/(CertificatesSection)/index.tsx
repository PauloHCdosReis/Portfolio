import { certificados } from "@data/certificados";
import { Title } from "@components/title";
import { CardCertificate } from "./components";

export const CertificatesSection = () => {
  return (
    <section
      id="Certificados"
      className="min-h-screen-minus-header scroll-mt-10 p-2 py-12 flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div className="flex flex-col gap-8 lg:gap-12 justify-center items-center px-4 md:px-8 lg:px-18 w-full">
        <Title
          title="Certificações"
          subTitle="Certificações que comprovam minha expertise e compromisso com a
            excelência técnica"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificados.map((cert, index) => (
            <CardCertificate key={`card-certificado-${index}`} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};
