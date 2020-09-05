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
      disabled: false,
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
    if (this.state.wordCount >= qa[this.state.gameNumber - 1][1].length - 1) {
      this.setState({
        disabled: true,
      });
    }
  };

  answerJudge = () => {
    let playerAnswer = document.answer_form.player_answer.value;
    if (playerAnswer === qa[this.state.gameNumber - 1][0]) {
      let resultBlack = qa[this.state.gameNumber - 1][1].slice(
        0,
        qa[this.state.gameNumber - 1][2]
      );
      let resultRed = qa[this.state.gameNumber - 1][1].slice(
        qa[this.state.gameNumber - 1][2],
        qa[this.state.gameNumber - 1][1].length
      );
      document.getElementById("qa_result_area").innerHTML =
        "<div class='qa_result_area_red'>◎正解</div>";
      document.getElementById("qa_result_area").innerHTML +=
        "<p>" +
        qa[this.state.gameNumber - 1][0] +
        "：" +
        resultBlack +
        resultRed;
      this.setState({
        gameNumber: this.state.gameNumber + 1,
        wordCount: 0,
        questionBlackText: "",
        questionRedText: "",
        disabled: false,
      });
    } else {
      this.setState({
        history: this.state.history + "<li>" + playerAnswer + "</li>",
      });
      document.getElementById("qa_result_area").innerHTML =
        "<div class='qa_result_area_blue'>× 不正解</div>" + this.state.history;
    }
  };

  retrievalJudge = () => {
    let retrievalWord = document.retrieval_form.retrieval.value;
    for (let i = 0; i < qa.length; i++) {
      if (qa[i][0] === retrievalWord) {
        let resultBlack = qa[i][1].slice(0, qa[i][2]);
        let resultRed = qa[i][1].slice(qa[i][2], qa[i][1].length);
        document.getElementById("retrieval_result_box").innerHTML =
          "<div id='retrieval_text'></div>";
        document.getElementById("retrieval_text").innerHTML =
          "<span class='box-title'>" + retrievalWord + "</span>";
        document.getElementById("retrieval_text").innerHTML +=
          resultBlack + "<font color='red'>" + resultRed + "</font>";
        break;
      } else if (retrievalWord === "") {
        document.getElementById("retrieval_result_box").innerHTML = "";
      } else {
        document.getElementById("retrieval_result_box").innerHTML =
          "<font color='red'>「" +
          retrievalWord +
          "」は職業一覧から見つかりませんでした。</font>";
      }
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
                  disabled={this.state.disabled}
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
              onClick={this.answerJudge}
            ></input>
          </form>
        </div>
        <div>
          <img src="img/agri_line.png" alt="line" width="100%" />
          <div id="retrieval_text_btn">
            <form name="retrieval_form">
              <input
                className="retrieval_word"
                type="text"
                name="retrieval"
                placeholder="職業名で検索"
                onChange={this.retrievalJudge}
              />
            </form>
          </div>
          <div id="retrieval_result_box"></div>
        </div>
      </>
    );
  }
}
export default App;
