import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import { classesQuery } from "../utils/loader";

export const useClasses = () => {
  const loaderData = useLoaderData() as { classes: Class[] };
  const { data } = useQuery<Class[]>({
    ...classesQuery,
    initialData: loaderData.classes,
    suspense: true,
  });
  return data.filter((item) => Boolean(item.id));
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
