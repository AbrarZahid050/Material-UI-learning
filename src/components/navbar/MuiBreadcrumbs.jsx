import { NavigateNext } from "@mui/icons-material";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

const MuiBreadcrums = () => {
  return (
    <Box margin={2}>
      <Breadcrumbs
        aria-label="breadcrumbs"
        separator={<NavigateNext fontSize="small" />}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Components
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Typography color="text.secondary">Cars</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrums;
