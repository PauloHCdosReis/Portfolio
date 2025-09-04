import { habilidateType } from "@ts/index";
/* 
import { differenceInYears } from "date-fns";

const birthDate = new Date(2003, 3, 5);
const currentDate = new Date();

const age = differenceInYears(currentDate, birthDate); */

export const informacoes = {
  foto: "https://github.com/PauloHCdosReis.png",
  iniciais: "PR",
  nome: "Paulo Henrique Couto dos Reis",
  cargo: "Analista Desenvolvedor Junior",
  dataDeNascimento: "05/03/2003",
  sobreMim:
    "Tenho vontade e disposição para aprender novas habilidades, gosto de trabalhar em equipe e ajudar na resolução de problemas. Apaixonado por tecnologia desde a infância, sou um Analista de Desenvolvimento de Sistemas Júnior dedicado e proativo. Possuo conhecimentos em desenvolvimento web, com experiência em React, Next.js e React Native.",
  localização: "R. das Alfazemas, 54 - Parque Cecap Valinhos - SP, 13273-410",
  feitoEm: "2025",
} as const;

export const contato = {
  telefone: "(19) 97128-6210",
  email: "paulohcreis.contato@gmail.com",
  instagram: "",
  linkedin: "https://www.linkedin.com/in/paulo-henrique-couto-dos-reis",
  github: "https://github.com/PauloHCdosReis",
};

export const habilidades: habilidateType[] = [
  {
    icon: "Code",
    titulo: "Desenvolvimento",
    descricao:
      "Especializado em React, React Native, Kotlin, Next e tecnologias modernas",
  },
  {
    icon: "Palette",
    titulo: "Design",
    descricao: "Interface intuitiva e experiência do usuário excepcional",
  },
  {
    icon: "Zap",
    titulo: "Performance",
    descricao: "Aplicações rápidas e otimizadas para todos os dispositivos",
  },
  {
    icon: "Heart",
    titulo: "Paixão",
    descricao: "Dedicado em criar soluções que fazem a diferença",
  },
];
