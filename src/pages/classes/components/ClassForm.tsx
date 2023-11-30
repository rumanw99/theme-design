import {
  Box,
  Stack,
  TextField,
  Button,
  FormLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { useClassForm } from "../hooks";
import _ from "lodash";
import { Class } from "../hooks/useClasses";

export const ClassForm = ({ classData, onSubmitForm }: Props) => {
  const { getFieldProps, touched, errors, values, isValid } =
    useClassForm(classData);

  return (
    <Box p={4} width="100%">
      <form
        id="ClassForm"
        onSubmit={(e) => {
          e.preventDefault();
          if (isValid) {
            onSubmitForm(values);
          }
        }}
      >
        <Stack spacing={3}>
          <FormControl error={touched.title && Boolean(errors.title)}>
            <FormLabel sx={{ mb: 1 }}>Title</FormLabel>
            <TextField id="title" required {...getFieldProps("title")} />
            <FormHelperText>{touched.title && errors.title}</FormHelperText>
          </FormControl>
          <FormControl error={touched.image && Boolean(errors.image)}>
            <FormLabel sx={{ mb: 1 }}>Image URL</FormLabel>
            <TextField id="image" required {...getFieldProps("image")} />
            <FormHelperText>{touched.image && errors.image}</FormHelperText>
          </FormControl>
          <FormControl error={touched.coach_name && Boolean(errors.coach_name)}>
            <FormLabel sx={{ mb: 1 }}>Coach Name</FormLabel>
            <TextField
              id="coach_name"
              required
              {...getFieldProps("coach_name")}
            />
            <FormHelperText>
              {touched.coach_name && errors.coach_name}
            </FormHelperText>
          </FormControl>
          <FormControl error={touched.timing && Boolean(errors.timing)}>
            <FormLabel sx={{ mb: 1 }}>Timing</FormLabel>
            <TextField id="timing" required {...getFieldProps("timing")} />
            <FormHelperText>{touched.timing && errors.timing}</FormHelperText>
          </FormControl>
          <FormControl error={touched.price && Boolean(errors.price)}>
            <FormLabel sx={{ mb: 1 }}>Price</FormLabel>
            <TextField
              id="price"
              type="number"
              required
              {...getFieldProps("price")}
            />
            <FormHelperText>{touched.price && errors.price}</FormHelperText>
          </FormControl>
          <FormControl
            error={touched.description && Boolean(errors.description)}
          >
            <FormLabel sx={{ mb: 1 }}>Description</FormLabel>
            <TextField
              id="description"
              multiline
              required
              {...getFieldProps("description")}
            />
            <FormHelperText>
              {touched.description && errors.description}
            </FormHelperText>
          </FormControl>
          <FormControl
            error={touched.coach_brief && Boolean(errors.coach_brief)}
          >
            <FormLabel sx={{ mb: 1 }}>Coach Brief</FormLabel>
            <TextField
              id="coach_brief"
              multiline
              required
              {...getFieldProps("coach_brief")}
            />
            <FormHelperText>
              {touched.coach_brief && errors.coach_brief}
            </FormHelperText>
          </FormControl>
        </Stack>
      </form>
    </Box>
  );
};

type Props = {
  classData?: Class;
  onSubmitForm: (classData: Class) => void;
};
