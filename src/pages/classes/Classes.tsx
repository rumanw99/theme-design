import { Box, Button, Typography } from "@mui/material";
import { AddClassDialog, ClassForm, Hero, EditClassDialog } from "./components";
import { loader } from "./utils/loader";
import { ClassesList } from "./components/ClassesList";
import { useManageClasses } from "./hooks";
import { GenericDialog } from "@/shared/components";

export const Classes = () => {
  const {
    selectedClasses,
    handleSelectionClasses,
    closeDialog,
    isDialogOpen,
    openDialog,
    handleDeleteClasses,
    handleEditClass,
    handleAddClass,
  } = useManageClasses();

  const [selectedClass] = selectedClasses;

  return (
    <Box>
      <Hero />
      <Box my={3}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h2" sx={{ color: "common.black" }}>
            Classes
          </Typography>
          <Box display="flex" columnGap={2}>
            <Button onClick={() => openDialog("add")}>Add</Button>
            <Button
              variant="outlined"
              color="secondary"
              disabled={selectedClasses.length !== 1}
              onClick={() => openDialog("edit")}
            >
              Edit
            </Button>
            <Button
              color="error"
              disabled={selectedClasses.length === 0}
              onClick={() => openDialog("delete")}
            >
              Delete
            </Button>
          </Box>
        </Box>
        <ClassesList
          selectedClasses={selectedClasses}
          handleSelectedClass={handleSelectionClasses}
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
        onSubmit={handleDeleteClasses}
      >
        <Typography variant="body1" sx={{ color: "common.black" }}>
          Are you sure to delete {selectedClasses.length} classes ?
        </Typography>
      </GenericDialog>
      <EditClassDialog open={isDialogOpen("edit")} onClose={closeDialog}>
        <ClassForm classData={selectedClass} onSubmitForm={handleEditClass} />
      </EditClassDialog>
      <AddClassDialog open={isDialogOpen("add")} onClose={closeDialog}>
        <ClassForm onSubmitForm={handleAddClass} />
      </AddClassDialog>
    </Box>
  );
};

Classes.loader = loader;
