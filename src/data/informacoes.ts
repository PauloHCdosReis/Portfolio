import { habilidateType } from "@ts/index";

export const informacoes = {
  foto: "https://github.com/PauloHCdosReis.png",
  iniciais: "PR",
  nome: "Paulo Henrique Couto dos Reis",
  sexo: "Homem cisgênero (heterossexual)",
  cargo: "Analista Desenvolvedor Junior",
  dataDeNascimento: "2003-03-05",
  sobreMim:
    "Tenho vontade e disposição para aprender novas habilidades, gosto de trabalhar em equipe e ajudar na resolução de problemas. Apaixonado por tecnologia desde a infância, sou um Analista de Desenvolvimento de Sistemas Júnior dedicado e proativo. Possuo conhecimentos em desenvolvimento web, com experiência em React, Next.js e React Native.",
  localização: "Valinhos - SP",
  feitoEm: "2025",
} as const;

export const contato = {
  telefone: "(19) 97128-6210",
  email: "paulohcreis.contato@gmail.com",
  instagram: "https://instagram.com/paulo_h_c_dos_reis_",
  linkedin: "https://www.linkedin.com/in/paulo-henrique-couto-dos-reis",
  github: "https://github.com/PauloHCdosReis",
  whatsapp: "https://wa.me/5519971286210",
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
