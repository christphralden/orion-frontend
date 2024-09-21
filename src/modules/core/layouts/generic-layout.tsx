import { Toaster } from "@components/ui/sonner";
import AuthMiddleware from "@authentication/middleware/auth.middleware";
import { ReactNode } from "react";

const GenericLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AuthMiddleware>
      <div className="w-screen min-h-[100lvh]">
        <Toaster position="top-right" visibleToasts={3} />
        {children}
      </div>
    </AuthMiddleware>
  );
};

export default GenericLayout;
