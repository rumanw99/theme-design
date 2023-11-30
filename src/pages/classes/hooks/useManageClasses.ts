import React from "react";
import { useDeleteClass } from "./useDeleteClass";
import { Class } from "./useClasses";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useClassesDialog } from "./useClassesDialog";
import { useEditClass } from "./useEditClass";
import { useAddClass } from "./useAddClass";

export const useManageClasses = () => {
  const { closeDialog, isDialogOpen, openDialog } = useClassesDialog();
  const [selectedClasses, setSelectedClasses] = React.useState<Class[]>([]);
  const { mutateAsync: deleteClass } = useDeleteClass();
  const { mutate: editClass } = useEditClass();
  const { mutate: addClass } = useAddClass();
  const client = useQueryClient();

  const handleSelectionClasses = (classes: Class[]) => {
    setSelectedClasses(classes);
  };

  const onMutationSuccess = () => {
    closeDialog();
    setSelectedClasses([]);
    toast("Operation successful!", {
      type: "success",
      position: toast.POSITION.TOP_CENTER,
    });
    client.invalidateQueries({ queryKey: ["ClassesQuery"] });
  };

  const handleDeleteClasses = () => {
    const promises: Promise<any>[] = [];
    selectedClasses.forEach((classItem) => {
      const mutation = deleteClass(classItem.id);
      promises.push(mutation);
    });
    Promise.all(promises).then(() => {
      onMutationSuccess();
    });
  };

  const handleEditClass = (classItem: Class) => {
    editClass(classItem, {
      onSuccess: onMutationSuccess,
    });
  };

  const handleAddClass = (classItem: Class) => {
    addClass(classItem, {
      onSuccess: onMutationSuccess,
    });
  };

  return {
    selectedClasses,
    handleSelectionClasses,
    handleDeleteClasses,
    isDialogOpen,
    closeDialog,
    openDialog,
    handleEditClass,
    handleAddClass,
  };
};
