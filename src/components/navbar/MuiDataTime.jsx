import { useState } from "react";
import { Stack, TextField, Container } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export const MuiDataTime = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  console.log(selectedDate);

  return (
    <Container>
      <Stack margin={2} direction="row">
        <DateTimePicker
          label="Date&Time picker"
          value={selectedDate}
          onChange={(newValue) => {
            setSelectedDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </Container>
  );
};
