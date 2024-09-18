import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-screen min-h-screen">
      <Outlet />
    </div>
  );
};

export default MainLayout;
