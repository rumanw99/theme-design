import React from "react";
import { useDeleteClient } from "./useDeleteClient";
import { Client } from "./useClients";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useClientsDialog } from "./useClientsDialog";
import { useEditClient } from "./useEditClient";
import { useAddClient } from "./useAddClient";

export const useManageClients = () => {
  const { closeDialog, isDialogOpen, openDialog } = useClientsDialog();
  const [selectedClients, setSelectedClients] = React.useState<Client[]>([]);
  const { mutateAsync: deleteClient } = useDeleteClient();
  const { mutate: editClient } = useEditClient();
  const { mutate: addClient } = useAddClient();
  const client = useQueryClient();

  const handleSelectionClients = (clients: Client[]) => {
    setSelectedClients(clients);
  };

  const onMutationSuccess = () => {
    closeDialog();
    setSelectedClients([]);
    toast("Operation successful!", {
      type: "success",
      position: toast.POSITION.TOP_CENTER,
    });
    client.invalidateQueries({ queryKey: ["ClientsQuery"] });
  };

  const handleDeleteClients = () => {
    const promises: Promise<any>[] = [];
    selectedClients.forEach((client) => {
      const mutation = deleteClient(client.id);
      promises.push(mutation);
    });
    Promise.all(promises).then(() => {
      onMutationSuccess();
    });
  };

  const handleEditClient = (client: Client) => {
    editClient(client, {
      onSuccess: onMutationSuccess,
    });
  };

  const handleAddClient = (client: Client) => {
    addClient(client, {
      onSuccess: onMutationSuccess,
    });
  };

  return {
    selectedClients,
    handleSelectionClients,
    handleDeleteClients,
    isDialogOpen,
    closeDialog,
    openDialog,
    handleEditClient,
    handleAddClient,
  };
};
