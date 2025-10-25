import { Card } from "@components/ui/card";
import { Button } from "@components/ui/button";
import { BtnLinkEmail } from "@/app/(HeroSection)/components";
import Icon from "@components/icon";
import { BtnLinkWhats } from "./btnLinkWhats";

export const CardCallToAction = () => {
  return (
    <Card className="p-8 card-gradient h-fit">
      <h3 className="text-2xl font-bold mb-4">Vamos trabalhar juntos!</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        Se você está contratando ou conhece alguma vaga alinhada ao meu perfil,
        será um prazer conversar.
      </p>

      <div className="space-y-4">
        <BtnLinkEmail className="w-full" />
        <BtnLinkWhats />
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground text-center">
          Tempo de resposta: 24 horas
        </p>
      </div>
    </Card>
  );
};
