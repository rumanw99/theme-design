import API from "@/api/client";
import { Class } from "./useClasses";
import { useMutation } from "@tanstack/react-query";

const addClassMutation = {
  mutationFn: (classItem: Class) => API.post("classes", classItem),
};

export const useAddClass = () => {
  const mutation = useMutation(addClassMutation);
  return mutation;
};
