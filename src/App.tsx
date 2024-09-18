import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Routes as NavigationRoutes } from "./modules/core/routes";
import { Suspense } from "react";

// Ini provider taro sini aja

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
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
    </>
  );
}

export default App;
