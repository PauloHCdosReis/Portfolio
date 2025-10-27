import { contatosObjType, habilidadeType } from "@ts/index";

export const informacoes = {
  foto: "https://github.com/PauloHCdosReis.png",
  iniciais: "PR",
  nome: "Paulo Henrique Couto dos Reis",
  sexo: "Homem",
  cvUrl:
    "https://drive.google.com/file/d/1i0T3WHB-xrGun_WpS6eRkRihgksfAYwj/view?usp=sharing",
  cargo: "Analista Desenvolvedor Junior",
  dataDeNascimento: "2003-03-05",
  sobreMim:
    "Tenho vontade e disposição para aprender novas habilidades, gosto de trabalhar em equipe e ajudar na resolução de problemas. Apaixonado por tecnologia desde a infância, sou um Analista de Desenvolvimento de Sistemas Júnior dedicado e proativo. Possuo conhecimentos em desenvolvimento web, com experiência em React, Next.js e React Native.",
  localização: "Valinhos - SP",
  feitoEm: "2025",
} as const;

export const contato: contatosObjType = {
  email: {
    icon: "Mail",
    titulo: "Email",
    valor: "paulohcreis.contato@gmail.com",
    url: "paulohcreis.contato@gmail.com",
  },
  instagram: {
    icon: "Instagram",
    titulo: "Instagram",
    valor: "@paulo_h_c_dos_reis_",
    url: "https://instagram.com/paulo_h_c_dos_reis_",
  },
  linkedin: {
    icon: "Linkedin",
    titulo: "LinkedIn",
    valor: "Paulo Henrique Couto dos Reis",
    url: "https://www.linkedin.com/in/paulo-henrique-couto-dos-reis",
  },
  github: {
    icon: "Github",
    titulo: "GitHub",
    valor: "PauloHCdosReis",
    url: "https://github.com/PauloHCdosReis",
  },
  whatsapp: {
    icon: "Phone",
    titulo: "WhatsApp",
    valor: "(19) 97128-6210",
    url: "https://wa.me/5519971286210",
  },
};

export const habilidades: habilidadeType[] = [
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
