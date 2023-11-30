import API from "@/api/client";
import { useMutation } from "@tanstack/react-query";

const deleteClientMutation = {
  mutationFn: (id: string) => API.remove("clients/" + id),
};

export const useDeleteClient = () => {
  const mutation = useMutation(deleteClientMutation);
  return mutation;
};
