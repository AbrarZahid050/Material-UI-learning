import { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home, Favorite, Person } from "@mui/icons-material";

export const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Favorite" icon={<Favorite />} />
      <BottomNavigationAction label="Profile" icon={<Person />} />
    </BottomNavigation>
  );
};
