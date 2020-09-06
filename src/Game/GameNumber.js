import React from "react";
import { useRecoilState } from "recoil";
import { gameNumberState } from "./addModal";

export const GameNumber = () => {
  const [gameNumber] = useRecoilState(gameNumberState);

  return (
    <div id="game_number">
      <font size="6">{gameNumber}</font>問目:
    </div>
  );
};
