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
      <div className={cn("w-screen min-h-[100vh] relative", className)}>
        {children}
      </div>
    </AuthMiddleware>
  );
};

export default GenericLayout;
