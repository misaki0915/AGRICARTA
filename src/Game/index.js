import React from "react";
import { WordCount } from "./WordCount";
import { NextTextButton } from "./NextTextButton";
import { DetermineCharacterButton } from "./DetermineCharacterButton";
import { AnswerForm } from "./AnswerForm";
import { QuestionText } from "./QuestionText";
import { GameNumber } from "./GameNumber";
import { Result } from "./Result";

export const Game = () => {
  return (
    <>
      <div className="flex">
        <div id="question_area">
          <GameNumber />
          <QuestionText />
          <WordCount />
          <div className="flex" id="next_area">
            <NextTextButton />
            <DetermineCharacterButton />
          </div>
        </div>
        <Result />
      </div>
      <AnswerForm />
    </>
  );
};
