import API from "@/api/client";
import { Client } from "./useClients";
import { useMutation } from "@tanstack/react-query";

const addClientMutation = {
  mutationFn: (client: Client) => API.post("clients", client),
};

export const useAddClient = () => {
  const mutation = useMutation(addClientMutation);
  return mutation;
};
