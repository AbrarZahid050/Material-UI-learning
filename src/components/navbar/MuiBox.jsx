import { Box, Container, Stack, Grid, Paper } from "@mui/material";

const MuiBox = () => {
  return (
    <Container>
      {/* <Paper elevation={4}>
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

        <Grid container marginY={4} spacing={2} bgcolor="primary.dark">
          <Grid item xs={6} sx={{ textAlign: "center" }}>
            <Box p={2} bgcolor="primary.light">
              Item 1
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "center" }}>
            <Box p={2} bgcolor="primary.light">
              Item 2
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "center" }}>
            <Box p={2} bgcolor="primary.light">
              Item 3
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "center" }}>
            <Box p={2} bgcolor="primary.light">
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Paper> */}

      <Paper sx={{ padding: "32px", marginTop: "16px" }} elevation={4}>
        <Stack border="1px solid" spacing={2} direction="row">
          <Box
            component="span"
            sx={{
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
            Codevolution
          </Box>
          <Box
            display="flex"
            height="100px"
            width="100px"
            bgcolor="success.light"
            p={2}
          ></Box>
        </Stack>
        <Grid
          rowSpacing={2}
          columnSpacing={1}
          container
          my={4}
          // bgcolor="primary.dark"
        >
          <Grid item xs={6}>
            <Box p={2} bgcolor="primary.light">
              Item 1
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box p={2} bgcolor="primary.light">
              Item 2
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box p={2} bgcolor="primary.light">
              Item 3
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box p={2} bgcolor="primary.light">
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default MuiBox;
