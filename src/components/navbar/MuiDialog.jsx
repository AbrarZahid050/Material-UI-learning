import {
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import { useState } from "react";

export const MuiDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Button
        variant="contained"
        onClick={() => {
          setOpen(true);
        }}
      >
        Click to open the Dialog
      </Button>
      <Dialog
        aria-label="dialog-title"
        aria-describedby="dialog-description"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle id="dialog-title">Submit the Form</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Are you sure you want to submit the form? You will not be able to
            edit the form after submiting.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            autoFocus
            variant="contained"
            onClick={() => {
              setOpen(false);
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};
