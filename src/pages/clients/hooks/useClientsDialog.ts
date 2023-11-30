import React from "react";

export const useClientsDialog = () => {
  const [dialog, setDialog] = React.useState<Dialog>("unset");

  const isDialogOpen = (currentDialog: Dialog) => dialog === currentDialog;

  const closeDialog = () => setDialog("unset");

  const openDialog = (dialog: Dialog) => setDialog(dialog);

  return { isDialogOpen, closeDialog, openDialog };
};

type Dialog = "delete" | "add" | "edit" | "unset";
