import { useState } from "react";
import {
  CatchingPokemon,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

const MuiAppbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  // console.log(`anchorEl: ${anchorEl}`, `open: ${open}`);

  const clickHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeHandler = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar sx={{ background: "#242424" }} position="static">
      <Toolbar>
        <IconButton size="large" edge="start" aria-label="logo" color="inherit">
          <CatchingPokemon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
          PokemonApp
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button
            color="inherit"
            id="resources-button"
            onClick={clickHandler}
            // aria-controls={open ? "resources-menu" : null}
            // aria-haspopup="true"
            // aria-expanded={open ? "true" : null}
            endIcon={!anchorEl ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          >
            Resources
          </Button>
          <Button color="inherit">Login</Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          // MenuListProps={{ "aria-labelledby": "resources-button" }}
          onClose={closeHandler}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Blog</MenuItem>
          <MenuItem>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MuiAppbar;
