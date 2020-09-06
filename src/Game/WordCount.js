import React from "react";
import { useRecoilState } from "recoil";
import { wordCountState } from "./addModal";

export const WordCount = () => {
  const [wordCount] = useRecoilState(wordCountState);

  return (
    <div id="word_count">
      <font size="5">{wordCount}</font>文字目
    </div>
  );
};
