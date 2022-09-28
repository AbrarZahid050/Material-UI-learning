import {
  CardContent,
  Container,
  Typography,
  Box,
  Card,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

const MuiPaper = () => {
  return (
    <Container>
      <Box margin={4} width="300px">
        <Card>
          <CardMedia
            component="img"
            height="230"
            image="https://source.unsplash.com/random"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React
            </Typography>
            <Typography
              sx={{ textAlign: "justify" }}
              variant="body2"
              color="text.secondary"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates minus provident earum? Consequuntur facere alias
              perspiciatis eveniet quas laboriosam commodi.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">SHARE</Button>
            <Button size="small">LEAR MORE</Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
};

export default MuiPaper;
