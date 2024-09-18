import { RouterProvider } from "react-router-dom";
import { router } from "@core/routes";
import ErrorBoundary from "@core/layouts/error-boundary";

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />;
    </ErrorBoundary>
  );
}

export default App;
