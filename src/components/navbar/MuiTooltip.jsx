import { Delete } from "@mui/icons-material";
import { Container, IconButton, Stack, Tooltip } from "@mui/material";

export const MuiTooltip = () => {
  return (
    <Container>
      <Stack direction="row" marginTop={2}>
        <Tooltip
          title="Delete"
          placement="right"
          arrow
          enterDelay={200}
          leaveDelay={200}
        >
          <IconButton>
            <Delete />
          </IconButton>
        </Tooltip>
      </Stack>
    </Container>
  );
};
