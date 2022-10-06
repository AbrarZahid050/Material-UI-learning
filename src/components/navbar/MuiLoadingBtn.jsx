import { Container, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";

export const MuiLoadingBtn = () => {
  return (
    <Container>
      <Stack direction="row" margin={2} spacing={2}>
        <LoadingButton variant="contained">Submit</LoadingButton>
        <LoadingButton loading variant="contained">
          Submit
        </LoadingButton>

        <LoadingButton variant="contained" loadingIndicator="Loading...">
          Fetch Data
        </LoadingButton>
        <LoadingButton
          loading
          variant="contained"
          loadingIndicator="Loading..."
        >
          Fetch Data
        </LoadingButton>

        <LoadingButton
          //   loading
          variant="contained"
          loadingPosition="start"
          startIcon={<Save />}
        >
          Save Data
        </LoadingButton>
        <LoadingButton
          loading
          variant="contained"
          loadingPosition="start"
          startIcon={<Save />}
        >
          Save Data
        </LoadingButton>
      </Stack>
    </Container>
  );
};
