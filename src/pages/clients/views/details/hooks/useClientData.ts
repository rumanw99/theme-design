import { useQuery } from "@tanstack/react-query";
import { useLoaderData, useParams } from "react-router-dom";
import { clientQuery } from "../utils/loader";

export const useClientData = () => {
  const { id } = useParams();
  const loaderData = useLoaderData() as { client: Client };
  const { data } = useQuery<Client>({
    ...clientQuery(id),
    initialData: loaderData.client,
    suspense: true,
  });
  return data;
};

export type Client = {
  createdAt: string;
  full_name: string;
  address: string;
  avatar: string;
  subscription_plan: string;
  mobile_number: string;
  id: string;
};
