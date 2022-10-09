import { Container, Box, Typography, Stack, Paper } from "@mui/material";
import BorderLinearProgress from "./ProgressBar";

export const Skills = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h2"
        color="#2c5364"
        marginBottom={2}
        textAlign="center"
      >
        My Skills
      </Typography>
      <Paper sx={{ display: "flex" }} elevation={5}>
        <Box width="100%" p={2}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet
            aut quo odit commodi debitis libero ipsam optio deserunt, pariatur
            numquam animi, repudiandae laudantium? Quisquam at magnam suscipit!
            Dolor, fuga iusto! Veritatis explicabo vitae voluptatibus totam qui
            eligendi non nihil soluta tenetur assumenda, impedit beatae dicta
            iusto maiores delectus eaque.
          </Typography>
        </Box>

        <Box width="50%" height="50px"></Box>

        <Box
          width="100%"
          sx={{ display: "flex", flexDirection: "column" }}
          p={2}
        >
          <Typography color="text.secondary">JavaScript</Typography>
          <Stack width="100%" direction="row" spacing={1} alignItems="center">
            <BorderLinearProgress
              variant="determinate"
              value={80}
              sx={{ width: "100%" }}
            />
            <Typography color="text.secondary">80%</Typography>
          </Stack>

          <Typography marginTop={2} color="text.secondary">
            JavaScript
          </Typography>
          <Stack width="100%" direction="row" spacing={1} alignItems="center">
            <BorderLinearProgress
              variant="determinate"
              value={50}
              sx={{ width: "100%" }}
              size={40}
            />
            <Typography color="text.secondary">50%</Typography>
          </Stack>

          <Typography marginTop={2} color="text.secondary">
            JavaScript
          </Typography>
          <Stack width="100%" direction="row" spacing={1} alignItems="center">
            <BorderLinearProgress
              variant="determinate"
              value={50}
              sx={{ width: "100%" }}
              size={40}
            />
            <Typography color="text.secondary">50%</Typography>
          </Stack>

          <Typography marginTop={2} color="text.secondary">
            JavaScript
          </Typography>
          <Stack width="100%" direction="row" spacing={1} alignItems="center">
            <BorderLinearProgress
              variant="determinate"
              value={50}
              sx={{ width: "100%" }}
              size={40}
            />
            <Typography color="text.secondary">50%</Typography>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};
