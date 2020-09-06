import React from "react";
import qa from "../carta_list";
import { useRecoilState } from "recoil";
import {
  textReadAloud,
  gameNumberState,
  wordCountState,
  questionBlackTextState,
  questionRedTextState,
  disabledState,
  skipDisabledState,
} from "./addModal";

export const NextTextButton = () => {
  const [gameNumber] = useRecoilState(gameNumberState);
  const [wordCount, setWordCount] = useRecoilState(wordCountState);
  const [questionBlackText, setquestionBlackText] = useRecoilState(
    questionBlackTextState
  );
  const [questionRedText, setquestionRedText] = useRecoilState(
    questionRedTextState
  );
  const [disabled, setdisabled] = useRecoilState(disabledState);
  const [, setskipDisabled] = useRecoilState(skipDisabledState);

  const setNextText = () => {
    setWordCount(wordCount + 1);
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

  return (
    <>
      <button
        id="set_next_btn"
        className="set_next_btn"
        onClick={setNextText}
        disabled={disabled}
      >
        ▶︎
      </button>
    </>
  );
};
