import { informacoes } from "@data/informações";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";

const Title = () => {
  return (
    <div className="flex flex-row gap-4 justify-center items-center">
      <Avatar>
        <AvatarImage src={informacoes.foto} />
        <AvatarFallback>{informacoes.iniciais}</AvatarFallback>
      </Avatar>
      {/* <Avatar className="bg-primary">
        <AvatarFallback className="text-sm font-bold bg-ring">
          {informacoes.iniciais}
        </AvatarFallback>
      </Avatar> */}
      <h1 className="font-bold text-base">PORTFÓLIO</h1>
    </div>
  );
};

export default Title;
