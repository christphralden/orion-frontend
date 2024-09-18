import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import Loader from "@components/fallbacks/loader";
import MainLayout from "@core/layouts/main-layout";
import Error from "@components/fallbacks/error";

const Login = lazy(() => import("@pages/login"));
const Home = lazy(() => import("@pages/home"));

const router = createBrowserRouter([
  {
    path: "/login",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
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
    element: <MainLayout />,
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

export default router;
