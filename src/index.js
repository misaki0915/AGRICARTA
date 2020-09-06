import React from "react";
import ReactDOM from "react-dom";
import agriLine from "./img/agri_line.png";
import Title from "./Title";
import Game from "./Game/index";
import Search from "./Search";
import { Image } from "./Image";

ReactDOM.render(
  <React.StrictMode>
    <div class="game_screen">
      <Title />
      <Game />
      <Image src={agriLine} />
      <Search />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
