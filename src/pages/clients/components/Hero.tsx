import { Box, Paper, Typography } from "@mui/material";
import ClientsHeroImage from "@/assets/images/clientsHero.svg";

export const Hero = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#dee1ff",
        color: "#001159",
        borderRadius: "16px",
        width: "100%",
        py: 5,
        px: {
          xs: 4,
          md: 24,
        },
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap={{
          xs: "wrap",
          md: "nowrap",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          rowGap="40px"
          justifyContent="center"
        >
          <Typography
            variant="h1"
            sx={{
              color: "common.black",
              fontSize: "30px !important",
              fontWeight: "600",
            }}
          >
            Clients
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 2 }}>
            Welcome to the Clients Page - Manage Your Gym's Membership Roster
            with Ease.
            <br />
            Our admin dashboard provides you with a complete view of your gym's
            clients and their activities.
          </Typography>
        </Box>
        <img src={ClientsHeroImage} width="260px" />
      </Box>
    </Paper>
  );
};
