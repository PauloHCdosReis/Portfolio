"use client";

import { informacoes } from "@data/index";
import { differenceInYears } from "date-fns";

export const IdadeAutomatica = () => {
  const birthDate = new Date(informacoes.dataDeNascimento);
  const currentDate = new Date();

  const age = differenceInYears(currentDate, birthDate);

  return <>{age}</>;
};
