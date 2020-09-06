import React from "react";
import qa from "./carta_list";

export const Search = () => {
  const retrievalJudge = () => {
    let retrievalWord = document.retrieval_form.retrieval.value;
    for (let i = 0; i < qa.length; i++) {
      if (qa[i][0] === retrievalWord) {
        let resultBlack = qa[i][1].slice(0, qa[i][2]);
        let resultRed = qa[i][1].slice(qa[i][2], qa[i][1].length);
        document.getElementById("retrieval_result_box").innerHTML =
          "<div id='retrieval_text'><span class='box-title'>" +
          retrievalWord +
          "</span>" +
          resultBlack +
          "<font color='red'>" +
          resultRed +
          "</font></div>";
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

  return (
    <>
      <div id="retrieval_text_btn">
        <form name="retrieval_form">
          <input
            className="retrieval_word"
            type="text"
            name="retrieval"
            placeholder="職業名で検索"
            onChange={retrievalJudge}
          />
        </form>
      </div>
      <div id="retrieval_result_box"></div>
    </>
  );
};
