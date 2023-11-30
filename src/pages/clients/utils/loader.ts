import API from "@/api/client";
import { QueryClient } from "@tanstack/react-query";

export const clientsQuery = {
  queryKey: ["ClientsQuery"],
  queryFn: () => API.get("clients"),
};

export const loader = (client: QueryClient) => async () => {
  const clients =
    client.getQueryData(clientsQuery.queryKey) ??
    (await client.fetchQuery(clientsQuery));
  return { clients };
};
