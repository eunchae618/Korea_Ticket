import React from "react";
import { useNavigate } from "react-router-dom";
import imgNoProfile from "../../assets/images/review/noprofile.png";

const ReviewPost = ({ author, title, content, date }) => {
  const navigate = useNavigate();

  const moveToWrite = () => {
    navigate("../reviewWrite");
  };
  const backToList = () => {
    navigate("../");
  };

  return (
    <div className="ReviewPost">
      <div className="ReviewPost-head">
        <div
          onClick={backToList}
          style={{ cursor: "pointer" }}
          className="ReviewPost-back_to_list"
        >
          &lt; 목록으로
        </div>
        <div className="ReviewPost-page_title">후기 게시판</div>
      </div>
      <div className="ReviewPost-body">
        <div>
          <div className="ReviewPost-created_by">
            <img
              src={imgNoProfile}
              alt="image_no_profile"
              className="ReviewPost-noprofile"
            />
            <div>
              {author}
              <br />
              {date}
            </div>
          </div>
          <div className="ReviewPost-title">{title}</div>
        </div>
        <div>{content}</div>
        <div className="ReviewPost-navigate_buttons">
          <button onClick={backToList} className="ReviewPost-button">
            목록
          </button>
          <button onClick={moveToWrite} className="ReviewPost-button">
            후기작성
          </button>
        </div>
      </div>
      <div className="ReviewPost-comments">댓글창</div>
    </div>
  );
};

export default ReviewPost;
