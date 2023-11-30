import API from "@/api/client";
import { QueryClient } from "@tanstack/react-query";
import { LoaderFunctionArgs } from "react-router-dom";

export const clientQuery = (clientId?: string) => ({
  queryKey: ["ClientsQuery", clientId],
  queryFn: () => API.get("clients/" + clientId),
});

export const loader =
  (client: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    const clientId = params.id;
    const query = clientQuery(clientId);
    const clientData =
      client.getQueryData(query.queryKey) ?? (await client.fetchQuery(query));
    return { client: clientData };
  };
