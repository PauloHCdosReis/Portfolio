import { experienciaType } from "@ts/index";
import EatonLogo from "@public/logos/eatonlogo.png";
import SoftrackLogo from "@public/logos/softracklogo.png";

export const experiencias: experienciaType[] = [
  {
    empresa: "Softrack | Inteligência em cada movimento",
    iniciais: "SF",
    logo: SoftrackLogo,
    localizacao: "Campinas, São Paulo, Brasil",
    competencias: [
      "React",
      "Next.js",
      "React Native",
      "JavaScript",
      "TypeScript",
      "Banco de dados",
      "SQL",
    ],
    cargos: [
      {
        titulo: "Analista de Desenvolvimento de Sistema",
        dataEntrada: "08/2024",
        dataSaida: "Atual",
        descricao:
          "Desenvolvimento e manutenção de sistemas utilizando tecnologias como JavaScript, React, Next.js, React Native e outras; " +
          "Colaboração em equipe para resolver problemas e implementar soluções eficientes; " +
          "Participação em projetos de desenvolvimento de software, desde a concepção até a implementação e o suporte pós-lançamento.",
      },
    ],
  },
  {
    empresa: "Agrosoftware Sistema e Soluções Agropecuária LTDA ( Softrack )",
    iniciais: "AG",
    logo: SoftrackLogo,
    localizacao: "Campinas, São Paulo, Brasil",
    competencias: [
      "Angular",
      "React",
      "Next.js",
      "React Native",
      "JavaScript",
      "TypeScript",
      "Desenvolvimento Web",
      "Banco de dados",
      "SQL",
    ],
    cargos: [
      {
        titulo: "Analista de Desenvolvimento de Sistema",
        dataEntrada: "01/2023",
        dataSaida: "06/2024",
        descricao:
          "Desenvolvimento e manutenção de sistemas utilizando tecnologias como JavaScript, React, Next.js, React Native e outras; " +
          "Colaboração em equipe para resolver problemas e implementar soluções eficientes; " +
          "Participação em projetos de desenvolvimento de software, desde a concepção até a implementação e o suporte pós-lançamento; " +
          "Suporte aos usuários do sistema.",
      },
      {
        titulo: "Estágio de Suporte de Informática",
        dataEntrada: "07/2022",
        dataSaida: "12/2022",
        descricao:
          "Acompanhar treinamentos aos usuários; " +
          "Auxílio supervisionado no suporte a usuários sobre utilização de softwares; " +
          "Orientação de clientes ou usuários em programas de treinamentos; " +
          "Suporte aos usuários e à área de TI; " +
          "Elaboração supervisionada de dicas e procedimentos de informática para os usuários.",
      },
    ],
  },
  {
    empresa: "Eaton",
    iniciais: "EA",
    logo: EatonLogo,
    localizacao: "Valinhos, São Paulo, Brasil",
    competencias: [
      "Controle de produção",
      "Administração",
      "Resolução de problemas",
    ],
    cargos: [
      {
        titulo: "Auxiliar de Escritório",
        dataEntrada: "10/2020",
        dataSaida: "08/2021",
        descricao:
          "Controle de produção; Auxílio em atividades administrativas de escritório; Resolução de problemas operacionais.",
      },
    ],
  },
];
