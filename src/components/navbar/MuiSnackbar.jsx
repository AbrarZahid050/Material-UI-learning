import { useState } from "react";
import { forwardRef } from "react";
import { Button, Container, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alertfun = forwardRef(function Alertf(props, ref) {
  return <MuiAlert elevation={9} ref={ref} {...props} />;
});

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(true);
  };

  const closeHandler = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Container>
      {/* <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Click Me
      </Button>
      <Snackbar
        message="Form submitted successfully"
        autoHideDuration={4000}
        open={open}
        onClose={closeHandler}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      /> */}

      <Button onClick={clickHandler}>Click Me For Alert SnackBar</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={closeHandler}>
        <Alertfun
          onClose={closeHandler}
          severity="success"
          sx={{ width: "100%" }}
        >
          This is a success message!
        </Alertfun>
      </Snackbar>
    </Container>
  );
};
