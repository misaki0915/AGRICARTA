import React from "react";
import { useRecoilState } from "recoil";
import { questionBlackTextState, questionRedTextState } from "./addModal";

export const QuestionText = () => {
  const [questionBlackText] = useRecoilState(questionBlackTextState);
  const [questionRedText] = useRecoilState(questionRedTextState);

  return (
    <div id="question_text">
      <p>
        {questionBlackText}
        <font color="red">{questionRedText}</font>
      </p>
    </div>
  );
};
