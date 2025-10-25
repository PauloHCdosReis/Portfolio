import Icon from "@/components/icon";
import { Button } from "@/components/ui/button";
import { contato } from "@/data";
import Link from "next/link";

export const BtnLinkWhats = () => {
  return (
    <Button variant="outline" className="w-full" size="lg" asChild>
      <Link
        href={contato.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="Phone" className="mr-2 h-5 w-5" />
        {`Agendar Chamada ( ${contato.whatsapp.titulo} )`}
      </Link>
    </Button>
  );
};
