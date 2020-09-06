import React from "react";
import { WordCount } from "./WordCount";
import { NextTextButton } from "./NextTextButton";
import { DetermineCharacterButton } from "./DetermineCharacterButton";
import { AnswerForm } from "./AnswerForm";
import { QuestionText } from "./QuestionText";
import { GameNumber } from "./GameNumber";

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
        <div id="qa_result_area"></div>
      </div>
      <AnswerForm />
    </>
  );
};
