import { contato } from "@data/index";
import Icon from "@components/icon";
import { Button } from "@components/ui/button";
import Link from "next/link";

export const BtnLinkEmail = () => {
  const subject = encodeURIComponent("Contato via portfólio");
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    contato.email
  )}&su=${subject}`;

  return (
    <Button
      variant="outline"
      size="lg"
      className="group cursor-pointer"
      asChild
    >
      <Link href={gmailUrl} target="_blank" rel="noopener noreferrer">
        <Icon name="Mail" className="mr-2 h-5 w-5 group-hover:animate-bounce" />
        Entre em Contato
      </Link>
    </Button>
  );
};
