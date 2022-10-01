import { MenuItem, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";

const Select = () => {
  const [countries, setCountries] = useState([]);

  console.log(countries);

  const selectHandler = (event) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Container>
      <Box width="240px" margin={3}>
        <TextField
          label="Select Country"
          select
          fullWidth
          value={countries}
          onChange={selectHandler}
        >
          <MenuItem value="PK">Pakistan</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
    </Container>
  );
};

export default Select;
