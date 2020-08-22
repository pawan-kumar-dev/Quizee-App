import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
function QuestionBox({ question, answer, correct, questionId, selected }) {
  const [answers, setAnswer] = useState(answer);
  console.log(answers);
  return (
    <Grid classes={{ root: "questionBox" }}>
      <Grid classes={{ root: "question" }}>{question}</Grid>
      {answers.map((text, index) => {
        return (
          <Button
            onClick={() => {
              setAnswer([text]);
              selected(text);
            }}
            classes={{ root: "answerBtn" }}
            key={index}
          >
            {text}
          </Button>
        );
      })}
    </Grid>
  );
}

export default QuestionBox;
