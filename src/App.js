import React, { Component } from "react";
import qa from "./carta_list";

const App = () => {
  return <Game />;
};

let textReadAloud = [];

for (let i = qa.length - 1; i >= 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [qa[i], qa[j]] = [qa[j], qa[i]];
}

for (let i = 0; i < qa.length; i++) {
  textReadAloud[i] = qa[i][1].split("");
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBlackText: "",
      questionRedText: "",
      gameNumber: 1,
      wordCount: 0,
      history: "",
    };
  }

  setNextText = () => {
    this.setState({
      wordCount: this.state.wordCount + 1,
    });
    if (this.state.wordCount > qa[this.state.gameNumber - 1][2] - 1) {
      this.setState({
        questionRedText:
          this.state.questionRedText +
          textReadAloud[this.state.gameNumber - 1][this.state.wordCount],
      });
    } else {
      this.setState({
        questionBlackText:
          this.state.questionBlackText +
          textReadAloud[this.state.gameNumber - 1][this.state.wordCount],
      });
    }
  };

  render() {
    return (
      <>
        <div className="flex">
          <div id="question_area">
            <div id="game_number">
              <font size="6">{this.state.gameNumber}</font>問目：
            </div>
            <div id="question_text">
              <p>
                {this.state.questionBlackText}
                <font color="red">{this.state.questionRedText}</font>
              </p>
            </div>
            <div className="flex">
              <div id="word_count">
                <font size="5">{this.state.wordCount}</font>文字目
              </div>
              <div id="next_area">
                <button
                  type="button"
                  id="set_next_btn"
                  className="set_next_btn"
                  onClick={this.setNextText}
                >
                  ▷
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
              // onClick={answer_judge()}
            ></input>
          </form>
        </div>
        <div>
          <div></div>
        </div>
      </>
    );
  }
}
export default App;

/*

function answer_judge() {
  var playerAnswer = document.answer_form.player_answer.value;
  if (playerAnswer === qa[gameNumber - 1][0]) {
    let resultBlack = qa[gameNumber - 1][1].slice(0, qa[gameNumber - 1][2]);
    let resultRed = qa[gameNumber - 1][1].slice(
      qa[gameNumber - 1][2],
      qa[gameNumber - 1][1].length
    );
    document.getElementById("qa_result_area").innerHTML =
      "<div class='qa_result_area_red'>◎正解</div>";
    document.getElementById("qa_result_area").innerHTML +=
      "<p>" + qa[gameNumber - 1][0] + "：" + resultBlack + resultRed;
    gameNumber++;
    wordCount = 0;
    questionBlackText = questionRedText = "";
    document.getElementById("game_number").innerHTML =
      "<font size='6'>" + gameNumber + "</font>問目";
    document.getElementById("next_area").innerHTML =
      "<input type='button' value='▷' id='set_next_btn' class='set_next_btn' onclick='setNextText()'>";
    setNextText();
  } else {
    history += "<li>" + playerAnswer + "</li>";
    document.getElementById("qa_result_area").innerHTML =
      "<div class='qa_result_area_blue'>×不正解</div><p>これまでの回答</p>" +
      history;
  }
}

function retrieval_judge() {
  var retrievalWord = document.retrieval_form.retrieval.value;
  for (var ch = 0; ch < qa.length; ch++) {
    if (qa[ch][0] == retrievalWord) {
      let resultBlack = qa[ch][1].slice(0, qa[ch][2]);
      let resultRed = qa[ch][1].slice(qa[ch][2], qa[ch][1].length);
      document.getElementById("retrieval_result_box").innerHTML =
        "<div id='retrieval_text'></div>";
      document.getElementById("retrieval_text").innerHTML =
        "<span class='box-title'>" + retrievalWord + "</span>";
      document.getElementById("retrieval_text").innerHTML +=
        resultBlack + "<font color='red'>" + resultRed + "</font>";
      break;
    } else {
      document.getElementById("retrieval_result_box").innerHTML =
        "<font color='red'>「" +
        retrievalWord +
        "」は職業一覧から見つかりませんでした。</font>";
    }
  }
}

*/
