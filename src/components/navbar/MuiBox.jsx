import { Box, Container } from "@mui/material";

const MuiBox = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        MuiBox
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      ></Box>
    </Container>
  );
};

export default MuiBox;
