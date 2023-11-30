import API from "@/api/client";
import { Class } from "./useClasses";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const editClassMutation = {
  mutationFn: (classItem: Class) =>
    API.put("classes/" + classItem.id, classItem),
  onSuccess: () => {
    toast("Operation successful!", {
      type: "success",
      position: toast.POSITION.TOP_CENTER,
    });
  },
};

export const useEditClass = () => {
  const mutation = useMutation(editClassMutation);
  return mutation;
};
