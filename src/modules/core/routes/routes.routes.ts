import Landing from "@pages/landing";

interface Route {
  path: string;
  element: any;
}

const Routes: Route[] = [
  {
    path: "/",
    element: Landing,
  },
];

export { Routes };
