import { Avatar, Chip, Container, Stack } from "@mui/material";
import { useState } from "react";

export const MuiChip = () => {
  const [data, setData] = useState([
    { key: 0, label: "Chip outlined" },
    { key: 1, label: "Delete" },
  ]);

  const deleteHandler = (toDel) => {
    const newData = data.filter((chip) => {
      return chip.key !== toDel.key;
    });
    setData(newData);
  };

  return (
    <Container>
      <Stack direction="row" spacing={2} marginTop={2}>
        <Chip
          label="Chip outlined"
          color="primary"
          size="large"
          variant="filled"
          avatar={
            <Avatar
              src="https://randomuser.me/api/portraits/women/10.jpg"
              alt="userName"
            >
              VR
            </Avatar>
          }
        />
        {data.map((i) => {
          return (
            <Chip
              key={i.key}
              label={i.label}
              size="large"
              variant="outlined"
              onDelete={() =>
                i.label === "Chip outlined" ? null : deleteHandler(i)
              }
            />
          );
        })}
      </Stack>
    </Container>
  );
};
