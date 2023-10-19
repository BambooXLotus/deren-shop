import { cn } from "@/lib/utils";
import { type MouseEventHandler } from "react";

type IconButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement | undefined>;
  icon: React.ReactElement;
  className?: string;
};

export const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
}) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-full border bg-white p-2 shadow-md transition hover:scale-110",
        className,
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};
