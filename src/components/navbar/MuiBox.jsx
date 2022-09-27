import { Box, Container, Stack, Divider } from "@mui/material";

const MuiBox = () => {
  return (
    <Container>
      <Stack
        margin={2}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
        sx={{ border: "1px solid" }}
      >
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
      </Stack>
    </Container>
  );
};

export default MuiBox;
