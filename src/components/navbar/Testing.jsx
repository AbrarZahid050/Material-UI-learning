import { CatchingPokemon } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";

export const Testing = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <CatchingPokemon color="inherit" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
