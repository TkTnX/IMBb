type Props = {
  text: string;
  className?: string;
};

export const Title = ({ text, className }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <div className="rounded-full bg-main-yellow w-1.5 h-1.5" />
      <h3 className={className}>{text}</h3>
    </div>
  );
};
