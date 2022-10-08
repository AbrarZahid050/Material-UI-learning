import { Box, Typography, Container } from "@mui/material";
// import carImg from "../../assets/porsche-model.png";

// const styles = {
// heroSection: {
// backgroundImage: `url(${carImg})`,
// height: "100vh",
// backgroundRepeat: "no-repeat",
// backgroundPosition: "top",
// backgroundSize: "100% 100%",
// background: `linear-gradient(to right, #0f2027, #203a43, #2c5364) url(${carImg}) no-repeat fixed center`,
// },
// };

export const Main = () => {
  return (
    <Box
      // style={styles.heroSection}
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        background: `linear-gradient(to right, #0f2027, #203a43, #2c5364)`,
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          // alignItems: "center",
        }}
        maxWidth="sm"
      >
        <Typography variant="h1" color="white">
          Hi, I'm <br />
          Abrar Zahid
        </Typography>
        <Typography
          variant="h6"
          color="white"
          marginTop={2}
          textAlign="justify"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          perferendis a assumenda molestiae debitis quae ad quas voluptates
          distinctio laboriosam.
        </Typography>
      </Container>
    </Box>
  );
};
