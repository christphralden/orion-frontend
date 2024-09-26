import { Toaster } from "@components/ui/sonner";
import AuthMiddleware from "@authentication/middleware/auth.middleware";
import { ReactNode } from "react";
import { cn } from "@utils/utils";

const GenericLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <AuthMiddleware>
      <div className={cn("w-full min-h-[100vh] relative ", className)}>
        <Toaster position="top-right" visibleToasts={3} />
        {children}
      </div>
    </AuthMiddleware>
  );
};

export default GenericLayout;
