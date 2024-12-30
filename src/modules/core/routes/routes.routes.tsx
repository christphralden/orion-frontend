import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import Loader from "@components/fallbacks/loader";
import MainLayout from "@core/layouts/main.layout";
import Error from "@components/fallbacks/error";
import AuthLayout from "@authentication/layouts/auth-layout";
import CaseMakeList from "@pages/case-make/case-make-list";
import CorrectionDetails from "@pages/correction/correction-details";
import CasemakingGroups from "@pages/case-make/case-making-groups";

const Login = lazy(() => import("@pages/login"));
const Home = lazy(() => import("@pages/home"));
// const ForumDemo = lazy(() => import("@pages/forum-demo"));
// const ForumDetailDemo = lazy(() => import("@pages/forum-detail-demo"));
const CorrectionList = lazy(() => import("@pages/correction/correction-list"));
const CorrectionGroups = lazy(
  () => import("@pages/correction/correction-groups"),
);
const NewThread = lazy(() => import("@pages/thread/new-thread"));
const ThreadDetail = lazy(() => import("@pages/thread/thread-detail"));

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
    element: <MainLayout className="flex justify-center h-fit xl:h-[100vh] " />,
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
  {
    path: "/correction",
    element: <MainLayout className="flex justify-center h-fit xl:h-[100vh] " />,
    errorElement: <Error />,
    children: [
      {
        path: "list",
        element: (
          <Suspense fallback={<Loader />}>
            <CorrectionList />
          </Suspense>
        ),
      },
      {
        path: "groups",
        element: (
          <Suspense fallback={<Loader />}>
            <CorrectionGroups />
          </Suspense>
        ),
      },
      {
        path: "groups/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <CorrectionDetails />
          </Suspense>
        ),
      },
      {
        path: "groups/:id/thread/new",
        element: (
          <Suspense fallback={<Loader />}>
            <NewThread />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/groups",
    element: <MainLayout className="flex justify-center h-fit xl:h-[100vh] " />,
    errorElement: <Error />,
    children: [
      {
        path: ":id/thread/:threadId",
        element: (
          <Suspense fallback={<Loader />}>
            <ThreadDetail />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: "/case-make",
    element: <MainLayout className="flex justify-center h-fit xl:h-[100vh] " />,
    errorElement: <Error />,
    children: [
      {
        path: "list",
        element: (
          <Suspense fallback={<Loader />}>
            <CaseMakeList />
          </Suspense>
        ),
      },
      {
        path: "groups",
        element: (
          <Suspense fallback={<Loader />}>
            <CasemakingGroups />
          </Suspense>
        ),
      },
    ],
  },
  // {
  //   path: "/forum",
  //   element: <MainLayout className="flex justify-center " />,
  //   errorElement: <Error />,
  //   children: [
  //     {
  //       path: "",
  //       element: (
  //         <Suspense fallback={<Loader />}>
  //           <ForumDemo />
  //         </Suspense>
  //       ),
  //     },
  //     {
  //       path: ":id",
  //       element: (
  //         <Suspense fallback={<Loader />}>
  //           <ForumDetailDemo />
  //         </Suspense>
  //       ),
  //     },
  //   ],
  // },
]);

export { router };
