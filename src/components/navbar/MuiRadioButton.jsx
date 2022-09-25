import { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";

const MuiRadioButton = () => {
  const [value, setValue] = useState("");

  const selectBtnHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <Container>
      <Box margin={3}>
        <FormControl error={!value ? true : false} required>
          <FormLabel id="job-experience-group-label">
            Years of experience
          </FormLabel>
          <RadioGroup
            name="job-experience-group"
            aria-labelledby="job-experience-group-label"
            value={value}
            onChange={selectBtnHandler}
            row
          >
            <FormControlLabel
              control={<Radio size="small" />}
              label="0-2"
              value="0-2"
            />
            <FormControlLabel
              control={<Radio size="small" />}
              label="3-5"
              value="3-5"
            />
            <FormControlLabel
              control={<Radio size="small" />}
              label="6-10"
              value="6-10"
            />
          </RadioGroup>
          {!value ? <FormHelperText>Please select one </FormHelperText> : null}
        </FormControl>
      </Box>
    </Container>
  );
};

export default MuiRadioButton;
