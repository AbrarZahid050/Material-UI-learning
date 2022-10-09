import {
  Container,
  Box,
  LinearProgress,
  Typography,
  Stack,
  styled,
  linearProgressClasses,
} from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 400 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export const Skills = () => {
  return (
    <Container maxWidth="lg" sx={{ display: "flex" }}>
      <Box width="100%">
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

      <Box width="100%" sx={{ display: "flex", flexDirection: "column" }}>
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
    </Container>
  );
};
