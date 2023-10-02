import { cn } from "../util/functions";

export const Card = ({ className, ...rest }) => {
  return (
    <div
      className={cn("w-full bg-white shadow-md rounded-2xl", className)}
      {...rest}
    />
  );
};
