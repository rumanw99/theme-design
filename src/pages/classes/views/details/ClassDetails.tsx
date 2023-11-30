import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { loader } from "./utils/loader";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useClassData } from "./hooks";
import { useClassesDialog, useDeleteClass, useEditClass } from "../../hooks";
import { GenericDialog } from "@/shared/components";
import { ClassForm, EditClassDialog } from "../../components";
import { Class } from "./hooks/useClassData";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const ClassDetails = () => {
  const navigate = useNavigate();
  const { mutate: editClass } = useEditClass();
  const { mutate: deleteClass } = useDeleteClass();
  const { closeDialog, isDialogOpen, openDialog } = useClassesDialog();
  const classData = useClassData();
  const client = useQueryClient();

  const navigateBack = () => navigate(-1);

  const handleEditClass = (data: Class) => {
    editClass(data, {
      onSuccess: () => {
        client.invalidateQueries({
          queryKey: ["ClassesQuery"],
        });
        closeDialog();
      },
    });
  };

  const handleDeleteClass = () => {
    deleteClass(classData.id, {
      onSuccess: () => {
        navigateBack();
        client.invalidateQueries({ queryKey: ["ClassesQuery"] });
        toast("Delete class successful!", {
          type: "success",
          position: toast.POSITION.TOP_CENTER,
        });
      },
    });
  };

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#dee1ff",
        color: "#001159",
        borderRadius: "16px",
        width: "100%",
        p: 4,
      }}
    >
      <Box display="flex" columnGap={2} alignItems="center">
        <IconButton onClick={navigateBack}>
          <ArrowBackIcon sx={{ color: "common.black" }} />
        </IconButton>
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ color: "common.black", flexGrow: 1 }}
        >
          {classData.title}
        </Typography>
        <Box display="flex" columnGap={1} alignItems="center">
          <IconButton onClick={() => openDialog("edit")}>
            <EditIcon color="primary" />
          </IconButton>
          <IconButton onClick={() => openDialog("delete")}>
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
      </Box>
      <Stack spacing={2} mt={3}>
        <Avatar
          src={
            classData.image ||
            "https://avatars.githubusercontent.com/u/1753933?v=4"
          }
          sx={{
            borderColor: ({ palette }) => palette.primary.light,
            width: 150,
            height: 150,
            m: "0 auto",
          }}
        />
        <Box display="flex" columnGap={1}>
          <Typography sx={{ color: "common.black" }}>Class title:</Typography>
          <Typography>{classData.title}</Typography>
        </Box>
        <Box display="flex" columnGap={1}>
          <Typography sx={{ color: "common.black" }}>Class title:</Typography>
          <Typography>{classData.description}</Typography>
        </Box>
        <Box display="flex" columnGap={1}>
          <Typography sx={{ color: "common.black" }}>Coach name:</Typography>
          <Typography>{classData.coach_name}</Typography>
        </Box>
        <Box display="flex" columnGap={1}>
          <Typography sx={{ color: "common.black" }}>Timing:</Typography>
          <Typography>{classData.timing}</Typography>
        </Box>
        <Box display="flex" columnGap={1}>
          <Typography sx={{ color: "common.black" }}>Price:</Typography>
          <Typography>{classData.price}</Typography>
        </Box>
        <Box display="flex" columnGap={1}>
          <Typography sx={{ color: "common.black" }}>Price:</Typography>
          <Typography>{classData.coach_brief}</Typography>
        </Box>
      </Stack>
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
        onSubmit={handleDeleteClass}
      >
        <Typography variant="body1" sx={{ color: "common.black" }}>
          Are you sure to delete {classData.title} class ?
        </Typography>
      </GenericDialog>
      <EditClassDialog open={isDialogOpen("edit")} onClose={closeDialog}>
        <ClassForm classData={classData} onSubmitForm={handleEditClass} />
      </EditClassDialog>
    </Paper>
  );
};

ClassDetails.loader = loader;
