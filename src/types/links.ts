import { icons } from "lucide-react";

export type linksType = {
  route: string;
  label: string;
  icon: keyof typeof icons;
};
