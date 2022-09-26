import { Autocomplete, Container, Stack, TextField } from "@mui/material";
import { useState } from "react";

const skills = [
  "HTML",
  "JAVASCRIPT",
  "CSS",
  "REACT",
  "NEXT",
  "DJANGO",
  "MATERIAL-UI",
  "THREE.JS",
];

const MuiAutoComplete = () => {
  const [value, setValue] = useState(null);
  console.log(value);

  return (
    <Container>
      <Stack spacing={2} margin={2} width="240px">
        <Autocomplete
          options={skills}
          renderInput={(params) => <TextField label="Skill" {...params} />}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          freeSolo
        />
      </Stack>
    </Container>
  );
};

export default MuiAutoComplete;
