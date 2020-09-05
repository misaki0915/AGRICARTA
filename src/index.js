import React from "react";
import ReactDOM from "react-dom";
import agriLine from "./img/agri_line.png";
import Title from "./Title";
import Game from "./Game";
import Search from "./Search";
import { Image } from "./Image";

ReactDOM.render(
  <React.StrictMode>
    <Title />
    <Game />
    <Image src={agriLine} />
    <Search />
  </React.StrictMode>,
  document.getElementById("root")
);
