import { contato } from "@data/index";
import { CardItemContactInformation } from "./cardItemContactInformation";

export const CardContactInformation = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>

      {Object.values(contato).map((item) => {
        if (item.titulo === "Email") return null;
        if (item.titulo === "GitHub") return null;

        return (
          <CardItemContactInformation
            key={`CardItemContactInformation-${item.titulo}`}
            cont={item}
          />
        );
      })}
    </div>
  );
};
