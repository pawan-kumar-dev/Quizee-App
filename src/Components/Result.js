import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
function Result({ score, playAgain }) {
  return (
    <Grid classes={{ root: "score-board" }}>
      <Typography variant="h3" classes={{ root: "score" }}>
        Your Score {score}/5 correct answers
      </Typography>
      <Button classes={{ root: "playBtn" }} onClick={playAgain}>
        Play Again
      </Button>
    </Grid>
  );
}

export default Result;
