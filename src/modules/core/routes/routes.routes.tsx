import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import Loader from "@components/loader/loader";
import MainLayout from "@core/layouts/main-layout";

const Login = lazy(() => import("@pages/login"));
const Home = lazy(() => import("@pages/home"));

const router = createBrowserRouter([
  {
    path: "/login",
    element: <MainLayout />,
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
