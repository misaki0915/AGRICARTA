import { atom } from "recoil";
import qa from "../carta_list";

export const textReadAloud = [];

for (let i = qa.length - 1; i >= 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [qa[i], qa[j]] = [qa[j], qa[i]];
}

for (let i = 0; i < qa.length; i++) {
  textReadAloud[i] = qa[i][1].split("");
}

export const gameNumberState = atom({
  key: "gameNumber",
  default: 1,
});

export const wordCountState = atom({
  key: "wordCount",
  default: 0,
});

export const textReadAloudState = atom({
  key: "textReadAloud",
  default: [],
});

export const questionBlackTextState = atom({
  key: "questionBlackText",
  default: "",
});

export const questionRedTextState = atom({
  key: "questionRedText",
  default: "",
});

export const disabledState = atom({
  key: "disabled",
  default: false,
});

export const skipDisabledState = atom({
  key: "skipDisabled",
  default: false,
});

export const historyState = atom({
  key: "history",
  default: "",
});
