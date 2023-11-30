import { Box, Button, Typography } from "@mui/material";
import {
  AddClientDialog,
  ClientForm,
  Hero,
  EditClientDialog,
} from "./components";
import { loader } from "./utils/loader";
import { ClientsList } from "./components/ClientsList";
import { useManageClients } from "./hooks";
import { GenericDialog } from "@/shared/components";

export const Clients = () => {
  const {
    selectedClients,
    handleSelectionClients,
    closeDialog,
    isDialogOpen,
    openDialog,
    handleDeleteClients,
    handleEditClient,
    handleAddClient,
  } = useManageClients();

  const [selectedClient] = selectedClients;

  return (
    <Box>
      <Hero />
      <Box my={3}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h2" sx={{ color: "common.black" }}>
            Clients
          </Typography>
          <Box display="flex" columnGap={2}>
            <Button onClick={() => openDialog("add")}>Add</Button>
            <Button
              variant="outlined"
              color="secondary"
              disabled={selectedClients.length !== 1}
              onClick={() => openDialog("edit")}
            >
              Edit
            </Button>
            <Button
              color="error"
              disabled={selectedClients.length === 0}
              onClick={() => openDialog("delete")}
            >
              Delete
            </Button>
          </Box>
        </Box>
        <ClientsList
          selectedClients={selectedClients}
          handleSelectedClient={handleSelectionClients}
        />
      </Box>
      <GenericDialog
        open={isDialogOpen("delete")}
        onClose={closeDialog}
        dialog={{
          title: "Confirm Delete",
          submitButton: {
            color: "error",
            label: "Delete",
          },
        }}
        onSubmit={handleDeleteClients}
      >
        <Typography variant="body1" sx={{ color: "common.black" }}>
          Are you sure to delete {selectedClients.length} clients ?
        </Typography>
      </GenericDialog>
      <EditClientDialog open={isDialogOpen("edit")} onClose={closeDialog}>
        <ClientForm client={selectedClient} onSubmitForm={handleEditClient} />
      </EditClientDialog>
      <AddClientDialog open={isDialogOpen("add")} onClose={closeDialog}>
        <ClientForm onSubmitForm={handleAddClient} />
      </AddClientDialog>
    </Box>
  );
};

Clients.loader = loader;
