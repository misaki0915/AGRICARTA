import React from "react";
import { useRecoilState } from "recoil";
import { correctAnswerState, incorrectAnswerState } from "./addModal";

export const Result = () => {
  const [correctAnswer] = useRecoilState(correctAnswerState);
  const [incorrectAnswer] = useRecoilState(incorrectAnswerState);

  return (
    <div id="qa_result_area">
      <div class="qa_result_area_red">{correctAnswer}</div>
      <div class="qa_result_area_blue">{incorrectAnswer}</div>
      <div id="qa_description"></div>
    </div>
  );
};
