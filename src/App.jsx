import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CircularProgress,
} from "@mui/material";
import { padding } from "@mui/system";
import { useEffect, useState } from "react";
import { getRandomJoke } from "./services/ChuckAPI";

function App() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [joke, setJoke] = useState("second");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getJoke();
  }, [likes, dislikes]);

  const getJoke = () => {
    setLoading(true);
    getRandomJoke()
      .then((joke) => {
        setJoke(joke);
      })
      .then(() => {
        setLoading(false);
      });
  };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Typography variant="h3" component="h1" color="orangered">
        Chuck Norris Jokes
      </Typography>
      <Grid item xs={3}>
        <Card sx={{ width: 350 }}>
          <CardMedia
            component="img"
            image="./chuck.png"
            style={{
              width: "auto",
              height: "350px",
            }}
            alt="Chuck Norris"
          />
          {loading ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "50px 0",
              }}
            >
              <CircularProgress size={100} />
            </div>
          ) : (
            <>
              <CardContent>
                <Typography variant="h6" component="p" color="GrayText">
                  {joke}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  color="primary"
                  variant="outlined"
                  size="large"
                  sx={{ width: 1 / 3 }}
                  onClick={() => {
                    setLikes(likes + 1);
                  }}
                >
                  👍 {likes}
                </Button>
                <Button
                  color="info"
                  size="large"
                  sx={{ width: 1 / 3 }}
                  onClick={getJoke}
                >
                  PASS
                </Button>
                <Button
                  color="error"
                  variant="outlined"
                  size="large"
                  sx={{ width: 1 / 3 }}
                  onClick={() => {
                    setDislikes(dislikes + 1);
                  }}
                >
                  👎 {dislikes}
                </Button>
              </CardActions>
            </>
          )}
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
