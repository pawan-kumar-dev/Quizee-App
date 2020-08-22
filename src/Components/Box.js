import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Questions from "./Questions";
import QuestionBox from "./QuestionBox";
import Result from "./Result";
function Box() {
  const [states, setState] = useState([]);
  const [score, setScore] = useState(0);
  const [response, setResponse] = useState(0);
  const getQuestions = () => {
    Questions().then((question) => {
      setState(question);
    });
  };
  useEffect(() => {
    getQuestions();
  }, []);
  const computeAnswer = (answer, correct) => {
    if (answer === correct) {
      setScore(score + 1);
    }
    setResponse(response < 5 ? response + 1 : 5);
  };

  const playAgain = () => {
    getQuestions();
    setScore(0);
    setResponse(0);
  };
  return (
    <Grid container classes={{ root: "container" }}>
      <Typography variant="h6" classes={{ root: "title" }}>
        Quiz App
      </Typography>
      {states.length >= 0 &&
        response < 5 &&
        states.map(({ question, answers, correct, questionId }) => {
          return (
            <QuestionBox
              question={question}
              answer={answers}
              correct={correct}
              key={questionId}
              selected={(answer) => {
                computeAnswer(answer, correct);
              }}
            />
          );
        })}
      {response === 5 ? <Result score={score} playAgain={playAgain} /> : null}
    </Grid>
  );
}

export default Box;
