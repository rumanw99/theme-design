import API from "@/api/client";
import { QueryClient } from "@tanstack/react-query";

export const classesQuery = {
  queryKey: ["ClassesQuery"],
  queryFn: () => API.get("classes"),
};

export const loader = (client: QueryClient) => async () => {
  const classes =
    client.getQueryData(classesQuery.queryKey) ??
    (await client.fetchQuery(classesQuery));
  return { classes };
};
