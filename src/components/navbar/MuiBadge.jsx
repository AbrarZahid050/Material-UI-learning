import { Mail } from "@mui/icons-material";
import { Badge, Container, Stack } from "@mui/material";

export const MuiBadge = () => {
  return (
    <Container>
      <Stack spacing={2} marginTop={2} direction="row">
        <Badge badgeContent={5} color="primary">
          <Mail />
        </Badge>
        <Badge variant="dot" badgeContent={5} color="primary" invisible={false}>
          <Mail />
        </Badge>
      </Stack>
    </Container>
  );
};
