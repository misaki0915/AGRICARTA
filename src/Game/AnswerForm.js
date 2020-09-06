import React from "react";
import qa from "../carta_list";
import { useRecoilState } from "recoil";
import {
  gameNumberState,
  wordCountState,
  questionBlackTextState,
  questionRedTextState,
  disabledState,
  skipDisabledState,
  historyState,
  correctAnswerState,
  incorrectAnswerState,
} from "./addModal";

export const AnswerForm = () => {
  const [gameNumber, setGameNumber] = useRecoilState(gameNumberState);
  const [, setWordCount] = useRecoilState(wordCountState);
  const [, setquestionBlackText] = useRecoilState(questionBlackTextState);
  const [, setquestionRedText] = useRecoilState(questionRedTextState);
  const [, setdisabled] = useRecoilState(disabledState);
  const [, setskipDisabled] = useRecoilState(skipDisabledState);
  const [history, sethistory] = useRecoilState(historyState);
  const [, setCorrectAnswer] = useRecoilState(correctAnswerState);
  const [, setIncorrectAnswer] = useRecoilState(incorrectAnswerState);

  const answerJudge = () => {
    let playerAnswer = document.answer_form.player_answer.value;
    if (playerAnswer === qa[gameNumber - 1][0]) {
      let resultBlack = qa[gameNumber - 1][1].slice(0, qa[gameNumber - 1][2]);
      let resultRed = qa[gameNumber - 1][1].slice(
        qa[gameNumber - 1][2],
        qa[gameNumber - 1][1].length
      );
      setCorrectAnswer("◎ 正解");
      setIncorrectAnswer("");
      document.getElementById("qa_description").innerHTML =
        "<p>" +
        qa[gameNumber - 1][0] +
        "：" +
        resultBlack +
        "<font color='red'>" +
        resultRed +
        "</font>";
      setGameNumber(gameNumber + 1);
      setWordCount(0);
      setquestionBlackText("");
      setquestionRedText("");
      setdisabled(false);
      setskipDisabled(false);
    } else {
      sethistory(history + "<li>" + playerAnswer + "</li>");
      setCorrectAnswer("");
      setIncorrectAnswer("× 不正解");
      document.getElementById("qa_description").innerHTML =
        history + "<li>" + playerAnswer + "</li>";
    }
  };

  return (
    <div id="answer_area">
      <form name="answer_form">
        <input
          type="text"
          name="player_answer"
          placeholder="回答を入力"
        ></input>
        <input
          className="player_answer"
          type="button"
          value="回答"
          onClick={answerJudge}
        ></input>
      </form>
    </div>
  );
};
