import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
} from "@mui/material";
import { useState } from "react";

const MuiSwitch = () => {
  let index = null;
  const [darkMode, SetDarkMode] = useState(false);
  const [skills, setSkill] = useState([]);
  console.log(skills);

  const darkModeHandler = (event) => {
    SetDarkMode(event.target.checked);
  };

  const skillHandler = (event) => {
    index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkill([...skills, event.target.value]);
    } else if (index >= -1) {
      setSkill(
        skills.filter((skill) => {
          return skill !== event.target.value;
        })
      );
    }
  };

  return (
    <Container
      sx={darkMode === true ? { background: "#242424", color: "white" } : null}
    >
      <Box
        margin={2}
        // sx={
        //   darkMode === true ? { background: "#242424", color: "white" } : null
        // }
      >
        <FormControlLabel
          label="Dark mode"
          control={<Switch checked={darkMode} onChange={darkModeHandler} />}
        />
      </Box>

      <Box margin={2}>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={<Switch value="html" onChange={skillHandler} />}
            />
            <FormControlLabel
              label="CSS"
              control={<Switch value="css" onChange={skillHandler} />}
            />
            <FormControlLabel
              label="JAVASCRIPT"
              control={<Switch value="javascript" onChange={skillHandler} />}
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Container>
  );
};

export default MuiSwitch;
