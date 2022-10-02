import React, { useState } from "react";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <React.Fragment>
      <Box margin={2}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Menu />
        </IconButton>
      </Box>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
      >
        <Box p={2} textAlign="center" role="presentation" width="500px">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default MuiDrawer;
