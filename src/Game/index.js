import React, { useState } from "react";
import qa from "../carta_list";

let textReadAloud = [];

for (let i = qa.length - 1; i >= 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [qa[i], qa[j]] = [qa[j], qa[i]];
}

for (let i = 0; i < qa.length; i++) {
  textReadAloud[i] = qa[i][1].split("");
}

export const Game = () => {
  const [gameNumber, setgameNumber] = useState(1);
  const [wordCount, setwordCount] = useState(0);
  const [disabled, setdisabled] = useState(false);
  const [skipDisabled, setskipDisabled] = useState(false);
  const [questionBlackText, setquestionBlackText] = useState("");
  const [questionRedText, setquestionRedText] = useState("");
  const [history, sethistory] = useState("");

  const setNextText = () => {
    setwordCount(wordCount + 1);
    if (wordCount > qa[gameNumber - 1][2] - 1) {
      setquestionRedText(
        questionRedText + textReadAloud[gameNumber - 1][wordCount]
      );
      setskipDisabled(true);
    } else {
      setquestionBlackText(
        questionBlackText + textReadAloud[gameNumber - 1][wordCount]
      );
    }
    if (wordCount >= qa[gameNumber - 1][1].length - 1) {
      setdisabled(true);
      setskipDisabled(true);
    }
  };

  const setDetermineCharacter = () => {
    setquestionBlackText(qa[gameNumber - 1][1].slice(0, qa[gameNumber - 1][2]));
    setquestionRedText(
      qa[gameNumber - 1][1].slice(
        qa[gameNumber - 1][2],
        qa[gameNumber - 1][2] + 1
      )
    );
    setwordCount(qa[gameNumber - 1][2] + 1);
    setskipDisabled(true);
  };

  const answerJudge = () => {
    let playerAnswer = document.answer_form.player_answer.value;
    if (playerAnswer === qa[gameNumber - 1][0]) {
      let resultBlack = qa[gameNumber - 1][1].slice(0, qa[gameNumber - 1][2]);
      let resultRed = qa[gameNumber - 1][1].slice(
        qa[gameNumber - 1][2],
        qa[gameNumber - 1][1].length
      );
      document.getElementById("qa_result_area").innerHTML =
        "<div class='qa_result_area_red'>◎正解</div>";
      document.getElementById("qa_result_area").innerHTML +=
        "<p>" +
        qa[gameNumber - 1][0] +
        "：" +
        resultBlack +
        "<font color='red'>" +
        resultRed +
        "</font>";
      setgameNumber(gameNumber + 1);
      setwordCount(0);
      setquestionBlackText("");
      setquestionRedText("");
      setdisabled(false);
      setskipDisabled(false);
    } else {
      sethistory(history + "<li>" + playerAnswer + "</li>");
      document.getElementById("qa_result_area").innerHTML =
        "<div class='qa_result_area_blue'>× 不正解</div>" + history;
    }
  };

  return (
    <>
      <div className="flex">
        <div id="question_area">
          <div id="game_number">
            <font size="6">{gameNumber}</font>問目：
          </div>
          <div id="question_text">
            <p>
              {questionBlackText}
              <font color="red">{questionRedText}</font>
            </p>
          </div>

          <div id="word_count">
            <font size="5">{wordCount}</font>文字目
          </div>
          <div className="flex">
            <div id="next_area">
              <button
                type="button"
                id="set_next_btn"
                className="set_next_btn"
                onClick={setNextText}
                disabled={disabled}
              >
                ▶︎
              </button>
              <button
                type="button"
                id="set_next_btn"
                className="set_next_btn"
                onClick={setDetermineCharacter}
                disabled={skipDisabled}
              >
                ▶︎▶︎
              </button>
            </div>
          </div>
        </div>
        <div id="qa_result_area"></div>
      </div>
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
    </>
  );
};
