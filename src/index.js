import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import agriLine from "./img/agri_line.png";
import Title from "./Title";
import { Game } from "./Game/index";
import { Search } from "./Search";
import { Image } from "./Image";

ReactDOM.render(
  <RecoilRoot>
    <div class="game_screen">
      <Title />
      <Game />
      <Image src={agriLine} />
      <Search />
    </div>
  </RecoilRoot>,
  document.getElementById("root")
);
