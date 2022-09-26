import { useState } from "react";
import { Container, Rating, Stack } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const MuiRating = () => {
  const [value, setValue] = useState(null);
  console.log(value);

  const ratingHandler = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Stack spacing={2} margin={2}>
        <Rating
          value={value}
          onChange={ratingHandler}
          precision={0.5}
          size="medium"
          icon={<Favorite fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorder fontSize="inherit" />}
        />
      </Stack>
    </Container>
  );
};

export default MuiRating;
