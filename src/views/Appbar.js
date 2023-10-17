import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Avatar } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Avatar src="https://pbs.twimg.com/profile_images/1173471139911221248/mZFiQFW6_400x400.jpg" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 0, ml: 3 }}>
          Google Developer Student Club
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
