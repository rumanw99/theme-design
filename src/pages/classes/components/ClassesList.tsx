import {
  Avatar,
  Box,
  Divider,
  Stack,
  Typography,
  Checkbox,
  IconButton,
} from "@mui/material";
import { useClasses } from "../hooks";
import PersonIcon from "@mui/icons-material/Person";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate } from "react-router-dom";
import { Class } from "../hooks/useClasses";

export const ClassesList = ({
  handleSelectedClass,
  selectedClasses,
}: ClassesListProps) => {
  const classes = useClasses();
  const navigate = useNavigate();

  const handleSelectionChange = (checked: boolean, classItem: Class) => {
    let classes = [...selectedClasses];
    if (checked) {
      classes.push(classItem);
    } else {
      classes = classes.filter((item) => item.id !== classItem.id);
    }
    handleSelectedClass(classes);
  };

  return (
    <Stack spacing={2} mt={3}>
      {classes.map((classItem) => (
        <>
          <Box
            key={classItem.id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" columnGap={2}>
              <Box>
                <Checkbox
                  checked={Boolean(
                    selectedClasses.find((item) => item.id === classItem.id)
                  )}
                  onChange={(_, checked) => {
                    handleSelectionChange(checked, classItem);
                  }}
                />
              </Box>
              <Avatar
                sx={{
                  bgcolor: "secondary.light",
                  width: "50px",
                  height: "50px",
                }}
              >
                <PersonIcon sx={{ color: "common.white", fontSize: "40px" }} />
              </Avatar>
              <Box display="flex" flexDirection="column" rowGap={2}>
                <Typography variant="body1">
                  Title : {classItem.title}
                </Typography>
                <Typography variant="body1">
                  Coach : {classItem.coach_name}
                </Typography>
                <Typography variant="body1">
                  Timing : {classItem.timing}
                </Typography>
                <Typography variant="body1">
                  Price : {classItem.price}
                </Typography>
              </Box>
            </Box>
            <Box display="flex" columnGap={2}>
              <IconButton
                onClick={() => {
                  navigate(classItem.id);
                }}
              >
                <RemoveRedEyeIcon sx={{ color: "primary.main" }} />
              </IconButton>
            </Box>
          </Box>
          <Divider />
        </>
      ))}
    </Stack>
  );
};

type ClassesListProps = {
  selectedClasses: Class[];
  handleSelectedClass: (classes: Class[]) => void;
};
