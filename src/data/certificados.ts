import { certificadoType } from "@/types";
import PrintUnip from "@public/certificados/PrintUnip.png";
import PrintInformatica from "@public/certificados/PrintInformaticaeGestaoAdministrativa.jpg";
import PrintAprofundandoHooks from "@public/certificados/PrintAprofundandoHooks.png";
import PrintFundamentosNext from "@public/certificados/PrintFundamentosNext.js.png";
import PrintFundamentosReact from "@public/certificados/PrintFundamentosReact.png";
import PrintHTTPPerformance from "@public/certificados/PrintHTTPPerformance.png";
import PrintIntegrandoFrontendBackend from "@public/certificados/PrintIntegrandoFrontendBackend.png";

export const certificados: certificadoType[] = [
  {
    titulo: "Analise e Desenvolvimento de Sistema",
    iniciais: "UP",
    emissora: "Universidade Paulista",
    emitido: "01/2023",
    imagem: PrintUnip,
    habilidades: [
      "Programação orientada a objetos (POO)",
      "CSS",
      "Aplicativos web",
      "HTML",
    ],
    credentialId: "322.322.dd628793c47f",
    url: "https://www.unip.br/aluno/diploma-digital",
  },
  {
    titulo: "Informática e Gestão Administrativa",
    iniciais: "MC",
    emissora: "Microcamp",
    emitido: "12/2020",
    imagem: PrintInformatica,
    habilidades: [
      "Windows 10",
      "Adobe Illustrator",
      "Photoshop CC",
      "Adobe Premiere",
      "HTML",
      "CSS3",
      "SEO",
      "Adobe XD",
      "Realidade Mixada",
      "Marketing Digital",
      "Empreendedorismo",
    ],
    url: "https://drive.google.com/file/d/1FK_X8ynQvrt2gyCV_-YpCJ4qkcYWqxD5/view?usp=sharing",
  },
  {
    titulo: "Aprofundando em Hooks",
    iniciais: "RS",
    emissora: "Rocketseat",
    emitido: "12/2024",
    imagem: PrintAprofundandoHooks,
    habilidades: ["React"],
    credentialId: "7f371dc1-7d61-4c66-b47e-bf2197ca739f",
    url: "https://app.rocketseat.com.br/certificates/7f371dc1-7d61-4c66-b47e-bf2197ca739f",
  },
  {
    titulo: "Fundamentos do Next.js",
    iniciais: "RS",
    emissora: "Rocketseat",
    emitido: "12/2024",
    imagem: PrintFundamentosNext,
    habilidades: ["React", "Next.js", "TypeScript"],
    credentialId: "dfd10226-15ad-4455-8a64-28e82eec9718",
    url: "https://app.rocketseat.com.br/certificates/dfd10226-15ad-4455-8a64-28e82eec9718",
  },
  {
    titulo: "HTTP e Performance",
    iniciais: "RS",
    emissora: "Rocketseat",
    emitido: "12/2024",
    imagem: PrintHTTPPerformance,
    habilidades: [],
    credentialId: "d64ef0e8-bb2b-4321-8a1b-2c93f993d39f",
    url: "https://app.rocketseat.com.br/certificates/d64ef0e8-bb2b-4321-8a1b-2c93f993d39f",
  },
  {
    titulo: "Integrando Frontend e Backend",
    iniciais: "RS",
    emissora: "Rocketseat",
    emitido: "12/2024",
    imagem: PrintIntegrandoFrontendBackend,
    habilidades: [],
    credentialId: "1193fa12-8945-4cbc-8f3b-dabba711127e",
    url: "https://app.rocketseat.com.br/certificates/1193fa12-8945-4cbc-8f3b-dabba711127e",
  },
  {
    titulo: "Fundamentos do React",
    iniciais: "RS",
    emissora: "Rocketseat",
    emitido: "11/2024",
    imagem: PrintFundamentosReact,
    habilidades: ["React"],
    credentialId: "c712c1c1-a9f6-4d90-96b8-3975dc9addef",
    url: "https://app.rocketseat.com.br/certificates/c712c1c1-a9f6-4d90-96b8-3975dc9addef",
  },
];
