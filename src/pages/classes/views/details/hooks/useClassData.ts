import { useQuery } from "@tanstack/react-query";
import { useLoaderData, useParams } from "react-router-dom";
import { classQuery } from "../utils/loader";

export const useClassData = () => {
  const { id } = useParams();
  const loaderData = useLoaderData() as { class: Class };
  const { data } = useQuery<Class>({
    ...classQuery(id),
    initialData: loaderData.class,
    suspense: true,
  });
  return data;
};

export type Class = {
  createdAt: string;
  title: string;
  image: string;
  coach_name: string;
  timing: string;
  price: number;
  description: string;
  coach_brief: string;
  id: string;
};
