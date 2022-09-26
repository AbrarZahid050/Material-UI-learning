import { useState } from "react";

import {
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { Bookmark, BookmarkBorderOutlined } from "@mui/icons-material";

const MuiCheckbox = () => {
  let index;
  const [checkbox, setCheckbox] = useState(false);
  const [skills, setSkill] = useState([]);
  console.log(skills);

  const checkboxHandler = (event) => {
    setCheckbox(event.target.checked);
  };

  const skillHandler = (event) => {
    index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkill([...skills, event.target.value]);
    } else if (index >= -1) {
      setSkill(
        skills.filter((value) => {
          return value !== event.target.value;
        })
      );
    }
  };

  return (
    <Container>
      <Box margin={2}>
        <FormControlLabel
          label="I accept the terms & conditions"
          control={<Checkbox checked={checkbox} onChange={checkboxHandler} />}
        />
      </Box>

      <Box margin={2}>
        <FormControlLabel
          label="I accept the terms & conditions"
          control={
            <Checkbox
              icon={<BookmarkBorderOutlined />}
              checkedIcon={<Bookmark />}
              checked={checkbox}
              onChange={checkboxHandler}
            />
          }
        />
      </Box>

      <Box margin={2}>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox value="html" onChange={skillHandler} size="small" />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox value="css" onChange={skillHandler} size="medium" />
              }
            />
            <FormControlLabel
              label="JAVASCRIPT"
              control={<Checkbox value="javascript" onChange={skillHandler} />}
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Container>
  );
};

export default MuiCheckbox;
