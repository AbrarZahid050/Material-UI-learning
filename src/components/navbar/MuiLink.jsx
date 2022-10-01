import { Link, Stack, Typography } from "@mui/material";

const MuiLink = () => {
  return (
    <Stack direction="row" margin={4} spacing={2}>
      <Link href="#">Primary</Link>
      <Typography variant="h6">
        <Link href="#" color="secondary" underline="hover">
          Secondary
        </Link>
      </Typography>
    </Stack>
  );
};

export default MuiLink;
