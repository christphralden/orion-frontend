import { Outlet } from "react-router-dom";

import GenericLayout from "./generic-layout";
import NavBar from "@components/navbar/navbar";

const MainLayout = ({ className }: { className?: string }) => {
  return (
    <GenericLayout className={className}>
      <div className="flex w-[80%] h-full justify-center items-center flex-col">
        <NavBar />
        <Outlet />
      </div>
    </GenericLayout>
  );
};

export default MainLayout;
