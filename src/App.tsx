import { RouterProvider } from "react-router-dom";
import { router } from "@core/routes";
import ErrorBoundary from "@core/layouts/error-boundary";
import { queryClient } from "@core/configs/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
