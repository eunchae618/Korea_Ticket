import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ReviewWrite.css";

const ReviewWrite = () => {
  const navigate = useNavigate();

  const [board, setBoard] = useState({
    title: "",
    contents: "",
  });

  const { title, contents } = board;

  const onChange = (event) => {
    const { value, name } = event.target;
    setBoard({
      ...board,
      [name]: value,
    });
  };

  const saveBoard = async () => {
    try {
      await axios
        .post("http://localhost:3000/reviews", {
          title: board.title,
          contents: board.contents,
        })
        .alert("작성되었습니다.");
      navigate("/review-board");
    } catch (error) {
      console.error("Error posting the board data:", error);
      alert("게시물을 저장하는 중 오류가 발생했습니다.");
    }
  };

  const backToList = () => {
    navigate(-1);
  };

  return (
    <div className="ReviewWrite">
      <div className="ReviewWrite-head">
        <div
          onClick={backToList}
          className="ReviewWrite-back_to_list"
          style={{ cursor: "pointer" }}
        >
          &lt; 후기 게시판
        </div>
        <div className="ReviewWrite-page_title">후기 남기기</div>
      </div>

      <div className="ReviewWrite-body">
        <div className="ReviewWrite-input_title">
          <div>제목&ensp;</div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            className="ReviewWrite-title_box"
          />
        </div>

        <div className="ReviewWrite-input_content">
          <div>내용&ensp;</div>
          <textarea
            name="contents"
            cols="30"
            rows="10"
            value={contents}
            onChange={onChange}
            className="ReviewWrite-content_box"
          ></textarea>
        </div>

        <div className="ReviewWrite-input_image">
          <input
            type="file"
            accept="image/*,.txt"
            multiple
            required
            capture="user"
            onchange="aaa"
          />
        </div>
      </div>

      <div class="ReviewWrite-confirm_button">
        <button onClick={saveBoard} className="ReviewWrite-button">
          작성
        </button>
      </div>
    </div>
  );
};

export default ReviewWrite;
