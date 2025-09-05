type TitleProps = {
  title: string;
  subTitle: string;
};

export const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <div className="text-center flex flex-col justify-center items-center gap-4">
      <h2 className="text-4xl md:text-5xl font-bold ">{title}</h2>
      <div className="w-24 h-1 bg-primary mx-auto" />
      <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">
        {subTitle}
      </p>
    </div>
  );
};
