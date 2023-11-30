import {
  Avatar,
  Box,
  Divider,
  Stack,
  Typography,
  Checkbox,
  IconButton,
} from "@mui/material";
import { useClients } from "../hooks";
import PersonIcon from "@mui/icons-material/Person";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Client } from "../hooks/useClients";
import { useNavigate } from "react-router-dom";

export const ClientsList = ({
  handleSelectedClient,
  selectedClients,
}: ClientsListProps) => {
  const clients = useClients();
  const navigate = useNavigate();

  const handleSelectionChange = (checked: boolean, client: Client) => {
    let clients = [...selectedClients];
    if (checked) {
      clients.push(client);
    } else {
      clients = clients.filter((item) => item.id !== client.id);
    }
    handleSelectedClient(clients);
  };

  return (
    <Stack spacing={2} mt={3}>
      {clients.map((client) => (
        <>
          <Box
            key={client.id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" columnGap={2}>
              <Box>
                <Checkbox
                  checked={Boolean(
                    selectedClients.find((item) => item.id === client.id)
                  )}
                  onChange={(_, checked) => {
                    handleSelectionChange(checked, client);
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
                  Name : {client.full_name}
                </Typography>
                <Typography variant="body1">
                  Address : {client.address}
                </Typography>
                <Typography variant="body1">
                  Phone number : {client.mobile_number}
                </Typography>
                <Typography variant="body1">
                  Subscription plan : {client.subscription_plan}
                </Typography>
              </Box>
            </Box>
            <Box display="flex" columnGap={2}>
              <IconButton
                onClick={() => {
                  navigate(client.id);
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

type ClientsListProps = {
  selectedClients: Client[];
  handleSelectedClient: (clients: Client[]) => void;
};
