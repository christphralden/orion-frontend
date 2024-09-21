import { Outlet } from "react-router-dom";
import { Toaster } from "@components/ui/sonner";
import GenericLayout from "@layouts/generic-layout";
const AuthLayout = () => {
  return (
    <GenericLayout>
      <div className="w-screen min-h-[100lvh] relative">
        <nav className="absolute top-0 left-0 p-8 ">
          <h1 className="text-white text-2xl md:text-3xl"></h1>
        </nav>
        <Toaster position="top-right" visibleToasts={3} />
        <Outlet />
      </div>
    </GenericLayout>
  );
};

export default AuthLayout;
