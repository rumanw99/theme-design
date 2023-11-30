import { Box, Paper, Typography } from "@mui/material";
import ClassesHeroImage from "@/assets/images/classesHero.svg";

export const Hero = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#e8ddff",
        color: "#77366b",
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
            Classes
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 2 }}>
            Welcome to the Gym Classes Page - Manage Your Gym's Classes Schedule
            with Ease.
            <br />
            Our admin dashboard provides you with a complete view of your gym's
            classes schedule and their availability. You can easily add, edit,
            or remove classes and track the attendance of your members. Stay
            organized and keep your gym running smoothly with our easy-to-use
            gym classes management system.
          </Typography>
        </Box>
        <img src={ClassesHeroImage} width="260px" />
      </Box>
    </Paper>
  );
};
