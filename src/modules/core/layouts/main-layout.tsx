import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <div className="w-screen min-h-screen">{children}</div>;
};

export default MainLayout;
