import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";

const Title = () => {
  return (
    <div className="flex flex-row gap-4 justify-center items-center">
      <Avatar className="bg-primary">
        {/* <AvatarImage
          src="https://github.com/PauloHCdosReis.png"
          alt="Foto de perfil do GitHub"
        /> */}
        <AvatarFallback className="text-sm bg-ring">PR</AvatarFallback>
      </Avatar>
      <h1>Portfólio</h1>
    </div>
  );
};

export default Title;
