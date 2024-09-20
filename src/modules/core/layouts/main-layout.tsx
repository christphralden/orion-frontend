import { Outlet } from "react-router-dom";
import { Toaster } from "@components/ui/sonner";

const MainLayout = () => {
  return (
    <div className="w-screen min-h-[100lvh]">
      <Toaster position="top-right" visibleToasts={3} />
      <Outlet />
    </div>
  );
};

export default MainLayout;
