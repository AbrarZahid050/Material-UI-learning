import { CopyAll, Print, Share } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";

export const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      <SpeedDialAction icon={<CopyAll />} tooltipTitle="Copy" tooltipOpen />
      <SpeedDialAction icon={<Print />} tooltipTitle="Print" tooltipOpen />
      <SpeedDialAction icon={<Share />} tooltipTitle="Share" tooltipOpen />
    </SpeedDial>
  );
};
