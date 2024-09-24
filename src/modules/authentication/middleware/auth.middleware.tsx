import { useLocation, Navigate } from "react-router-dom";
import {
  useAuthLoading,
  useIsAuthenticated,
} from "@authentication/store/auth-store";
import { ReactNode } from "react";
import Loader from "@components/fallbacks/loader";

const AuthMiddleware = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = useIsAuthenticated();
  const loading = useAuthLoading();

  const location = useLocation();
  const isLoginPath = location.pathname === "/auth/login";

  // if (loading) {
  //   return <Loader />;
  // }

  // if (isAuthenticated && isLoginPath) {
  //   return <Navigate to="/" replace />;
  // }

  // if (!isAuthenticated && !isLoginPath) {
  //   return <Navigate to="/auth/login" replace />;
  // }

  return children;
};

export default AuthMiddleware;
