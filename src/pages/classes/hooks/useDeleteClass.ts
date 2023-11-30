import API from "@/api/client";
import { useMutation } from "@tanstack/react-query";

const deleteClassMutation = {
  mutationFn: (id: string) => API.remove("classes/" + id),
};

export const useDeleteClass = () => {
  const mutation = useMutation(deleteClassMutation);
  return mutation;
};
