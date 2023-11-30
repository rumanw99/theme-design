import API from "@/api/client";
import { Client } from "./useClients";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const editClientMutation = {
  mutationFn: (client: Client) => API.put("clients/" + client.id, client),
  onSuccess: () => {
    toast("Operation successful!", {
      type: "success",
      position: toast.POSITION.TOP_CENTER,
    });
  },
};

export const useEditClient = () => {
  const mutation = useMutation(editClientMutation);
  return mutation;
};
