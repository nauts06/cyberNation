import React from "react";
import Navbar from "./Navbar";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const Login = () => {
  return (
    <div>
      <Navbar />

      <Box sx={{ marginTop: 10 }}>
        <MediaControlCard />
      </Box>
    </div>
  );
};

export default Login;

function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", bgcolor: "red", width: "70%", m: "auto" }}>
      
      <CardMedia
        component="img"
        sx={{ width: 500 }}
        image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202007/defwf.png?size=690:388"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="play/pause"></IconButton>
        </Box>
      </Box>
    </Card>
  );
}
