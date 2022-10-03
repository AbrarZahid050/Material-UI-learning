import { useState } from "react";
import { Close } from "@mui/icons-material";
import {
  Alert,
  AlertTitle,
  Collapse,
  Container,
  IconButton,
  Stack,
} from "@mui/material";

export const MuiAlert = () => {
  const [open, setOpen] = useState(true);

  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Stack marginTop={2} spacing={1}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is Success Alert
        </Alert>
        <Alert severity="info">
          <AlertTitle>INFO</AlertTitle>
          This is info Alert
        </Alert>
        <Alert severity="warning">This is warning Alert</Alert>
        <Alert severity="error">This is error Alert</Alert>

        <Alert variant="outlined" severity="success">
          This is Success Alert
        </Alert>
        <Alert variant="outlined" severity="info">
          This is info Alert
        </Alert>
        <Alert variant="outlined" severity="warning">
          This is warning Alert
        </Alert>
        <Alert variant="outlined" severity="error">
          This is error Alert
        </Alert>

        <Alert variant="filled" severity="success">
          This is Success Alert
        </Alert>
        <Alert variant="filled" severity="info">
          This is info Alert
        </Alert>
        <Alert variant="filled" severity="warning">
          This is warning Alert
        </Alert>
        <Collapse in={open}>
          <Alert
            variant="filled"
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={closeHandler}
              >
                <Close />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            This is error Alert
          </Alert>
        </Collapse>
      </Stack>
    </Container>
  );
};
