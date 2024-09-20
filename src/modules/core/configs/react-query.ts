import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const QUERY_KEYS: string[] = ["MESSIER_LOGIN", "KEY1"] as const;

export { queryClient, QUERY_KEYS };
