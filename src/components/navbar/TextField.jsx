import { useState } from "react";

import { Container, InputAdornment, Stack, TextField } from "@mui/material";

const TextLesson = () => {
  const [value, setValue] = useState("");

  return (
    <Container>
      <Stack spacing={4} marginTop={2}>
        <Stack spacing={2} direction="row">
          <TextField label="Name" variant="outlined" />
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="standard" />
        </Stack>

        <Stack spacing={2} direction="row">
          <TextField
            label="Password"
            variant="outlined"
            size="small"
            required
            value={value}
            error={!value}
            type="password"
            helperText={
              !value ? "Required" : "Do not share your password with anyone"
            }
            onChange={(event) => setValue(event.target.value)}
          />
          <TextField label="Name" variant="filled" size="small" />
          <TextField label="Name" variant="standard" size="large" />
        </Stack>

        <Stack spacing={2} direction="row">
          <TextField
            label="Amount"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Weight"
            variant="outlined"
            InputProps={{
              endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
            }}
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default TextLesson;
