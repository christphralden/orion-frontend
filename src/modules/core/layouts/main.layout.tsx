import { Outlet } from "react-router-dom";

import GenericLayout from "./generic.layout";
import NavBar from "@components/navbar/navbar";
import CommandSearch from "@search/command/search";

const MainLayout = ({ className }: { className?: string }) => {
  return (
    <GenericLayout className={className}>
      <CommandSearch />
      <div className="flex w-[90%] h-full justify-start flex-col pb-20">
        <NavBar />
        <Outlet />
      </div>
    </GenericLayout>
  );
};

export default MainLayout;
