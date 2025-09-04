import { icons } from "lucide-react";
import { StaticImageData } from "next/image";

export type habilidateType = {
  icon: keyof typeof icons;
  titulo: string;
  descricao: string;
};

export type cargoType = {
  titulo: string;
  dataEntrada: string;
  dataSaida: string;
  descricao: string;
};

export type experienciaType = {
  empresa: string;
  iniciais: string;
  logo: StaticImageData;
  localizacao: string;
  competencias: string[];
  cargos: cargoType[];
};
