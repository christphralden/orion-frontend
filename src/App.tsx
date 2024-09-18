import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Routes as NavigationRoutes } from "./modules/core/routes";
import { Suspense } from "react";
import MainLayout from "@modules/core/layouts/main-layout";
import Loader from "@components/loader/loader";

function App() {
  return (
    <MainLayout>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            {NavigationRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Routes>
        </Suspense>
      </Router>
    </MainLayout>
  );
}

export default App;
