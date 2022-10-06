import {
  CircularProgress,
  Container,
  Stack,
  LinearProgress,
} from "@mui/material";

export const MuiProgress = () => {
  return (
    <Container>
      <Stack margin={2} spacing={2}>
        <CircularProgress />
        <CircularProgress color="success" variant="determinate" value={50} />

        <LinearProgress />
        <LinearProgress color="success" variant="determinate" value={50} />
      </Stack>
    </Container>
  );
};
