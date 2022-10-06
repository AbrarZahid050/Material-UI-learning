import { Container, Skeleton, Stack } from "@mui/material";
import { useState, useEffect } from "react";

export const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://source.unsplash.com/random/200x150"
        );
        setData(response);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Stack margin={2} width="250px" spacing={1}>
        {/* <Skeleton variant="text" animation="wave" />
        <Skeleton variant="circular" width={40} height={40} animation="wave" />
        <Skeleton
          variant="rectangular"
          width={200}
          height={140}
          animation="wave"
        /> */}
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={200}
            height={150}
            animation="wave"
          />
        ) : (
          <img
            src={data.url}
            alt="Skeleton"
            width={200}
            height={150}
            // onLoad={loadHandler}
          />
        )}
      </Stack>
    </Container>
  );
};
