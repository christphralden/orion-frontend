import { Outlet } from "react-router-dom";

import GenericLayout from "./generic-layout";

const MainLayout = () => {
  return (
    <GenericLayout>
      <div className="flex w-full justify-center">
        <Outlet />
      </div>
    </GenericLayout>
  );
};

export default MainLayout;
