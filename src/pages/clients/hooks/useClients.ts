import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import { clientsQuery } from "../utils/loader";

export const useClients = () => {
  const loaderData = useLoaderData() as { clients: Client[] };
  const { data } = useQuery<Client[]>({
    ...clientsQuery,
    initialData: loaderData.clients,
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
