import API from "@/api/client";
import { QueryClient } from "@tanstack/react-query";
import { LoaderFunctionArgs } from "react-router-dom";

export const classQuery = (classId?: string) => ({
  queryKey: ["ClassesQuery", classId],
  queryFn: () => API.get("classes/" + classId),
});

export const loader =
  (client: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    const classId = params.id;
    const query = classQuery(classId);
    const classData =
      client.getQueryData(query.queryKey) ?? (await client.fetchQuery(query));
    return { class: classData };
  };
