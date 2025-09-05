import Icon from "@components/icon";
import { Button } from "@components/ui/button";

export const BtnDownloadCv = () => {
  return (
    <Button variant="secondary" size="lg" className="group cursor-pointer">
      <Icon
        name="Download"
        className="mr-2 h-5 w-5 group-hover:animate-bounce"
      />
      Download CV
    </Button>
  );
};
