import {
  Box,
  Stack,
  TextField,
  Button,
  FormLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { useClientForm } from "../hooks";
import _ from "lodash";
import { Client } from "../hooks/useClients";

export const ClientForm = ({
  client,
  onSubmitForm,
}: {
  client?: Client;
  onSubmitForm: (client: Client) => void;
}) => {
  const { getFieldProps, touched, errors, values, isValid } =
    useClientForm(client);

  return (
    <Box p={4} width="100%">
      <form
        id="ClientForm"
        onSubmit={(e) => {
          e.preventDefault();
          if (isValid) {
            onSubmitForm(values);
          }
        }}
      >
        <Stack spacing={3}>
          <FormControl error={touched.full_name && Boolean(errors.full_name)}>
            <FormLabel sx={{ mb: 1 }}>Full Name</FormLabel>
            <TextField
              id="full_name"
              required
              {...getFieldProps("full_name")}
            />
            <FormHelperText>
              {touched.full_name && errors.full_name}
            </FormHelperText>
          </FormControl>
          <FormControl error={touched.address && Boolean(errors.address)}>
            <FormLabel sx={{ mb: 1 }}>Address</FormLabel>
            <TextField id="address" required {...getFieldProps("address")} />
            <FormHelperText>{touched.address && errors.address}</FormHelperText>
          </FormControl>
          <FormControl
            error={
              touched.subscription_plan && Boolean(errors.subscription_plan)
            }
          >
            <FormLabel sx={{ mb: 1 }}>Subscription Plan</FormLabel>
            <TextField
              id="subscription_plan"
              required
              {...getFieldProps("subscription_plan")}
            />
            <FormHelperText>
              {touched.subscription_plan && errors.subscription_plan}
            </FormHelperText>
          </FormControl>
          <FormControl
            error={touched.mobile_number && Boolean(errors.mobile_number)}
          >
            <FormLabel sx={{ mb: 1 }}>Mobile Number</FormLabel>
            <TextField
              id="mobile_number"
              required
              {...getFieldProps("mobile_number")}
            />
            <FormHelperText>
              {touched.mobile_number && errors.mobile_number}
            </FormHelperText>
          </FormControl>
        </Stack>
      </form>
    </Box>
  );
};
