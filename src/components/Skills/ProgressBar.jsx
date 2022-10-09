import { styled, linearProgressClasses, LinearProgress } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 400 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#2c5364" : "#308fe8",
  },
}));

const ProgressBar = (props) => {
  return (
    <BorderLinearProgress
      variant="determinate"
      value={props.value}
      sx={{ width: "100%" }}
    />
  );
};

export default ProgressBar;
