import { Outlet } from "react-router-dom";

import GenericLayout from "./generic-layout";

const MainLayout = () => {
  return (
    <GenericLayout>
      <Outlet />
    </GenericLayout>
  );
};

export default MainLayout;
