import { Outlet } from "react-router-dom";
import { Toaster } from "@components/ui/sonner";
import GenericLayout from "@layouts/generic-layout";

const AuthLayout = () => {
  return (
    <GenericLayout className="overflow-x-hidden h-[100dvh]">
      <div className="w-full h-full relative">
        <Toaster position="top-right" visibleToasts={3} />
        <Outlet />
      </div>
    </GenericLayout>
  );
};

export default AuthLayout;
