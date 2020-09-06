import React from "react";
import qa from "../carta_list";
import { useRecoilState } from "recoil";
import {
  gameNumberState,
  wordCountState,
  questionBlackTextState,
  questionRedTextState,
  skipDisabledState,
} from "./addModal";

export const DetermineCharacterButton = () => {
  const [gameNumber] = useRecoilState(gameNumberState);
  const [, setWordCount] = useRecoilState(wordCountState);
  const [, setquestionBlackText] = useRecoilState(questionBlackTextState);
  const [, setquestionRedText] = useRecoilState(questionRedTextState);
  const [skipDisabled, setskipDisabled] = useRecoilState(skipDisabledState);

  const setDetermineCharacter = () => {
    setquestionBlackText(qa[gameNumber - 1][1].slice(0, qa[gameNumber - 1][2]));
    setquestionRedText(
      qa[gameNumber - 1][1].slice(
        qa[gameNumber - 1][2],
        qa[gameNumber - 1][2] + 1
      )
    );
    setWordCount(qa[gameNumber - 1][2] + 1);
    setskipDisabled(true);
  };

  return (
    <>
      <button
        id="set_next_btn"
        className="set_next_btn"
        onClick={setDetermineCharacter}
        disabled={skipDisabled}
      >
        ▶︎▶︎
      </button>
    </>
  );
};
