import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import Loader from "@components/fallbacks/loader";
import MainLayout from "@core/layouts/main-layout";
import Error from "@components/fallbacks/error";
import AuthLayout from "@authentication/layouts/auth-layout";

const Login = lazy(() => import("@pages/login"));
const Home = lazy(() => import("@pages/home"));

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout className="flex justify-center h-[100vh]" />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);

export { router };
