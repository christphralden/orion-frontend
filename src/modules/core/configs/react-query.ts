import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const QUERY_KEYS: string[] = ["MESSIER_LOGIN", "KEY1"] as const;

export { queryClient, QUERY_KEYS };
