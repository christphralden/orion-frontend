import { cn } from "@utils/utils";

const GradientBackground = ({ className }: { className: string }) => {
  return (
    <div className={cn("bg-binus-gradient w-full h-full", className)}></div>
  );
};

export default GradientBackground;
