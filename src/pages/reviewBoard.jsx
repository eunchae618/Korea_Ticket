import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ReviewBoard.css";
import axios from "axios";
import thumbex1 from "../assets/images/thumbex1.jpeg";
import thumbex2 from "../assets/images/thumbex2.jpg";
import thumbex3 from "../assets/images/thumbex3.jpeg";
import thumbex4 from "../assets/images/thumbex4.jpeg";
import noprofile from "../assets/images/noprofile.png";

const ReviewBoard = () => {
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState([]);

  const getBoardList = async () => {
    try {
      const resp = await axios.get("http://localhost:3000/reviews"); // 게시글 데이터 링크
      const respData = resp.data;
      const boardData = respData.data;

      const boardList = boardData.map((post) => ({
        thumbnail: post.thumbnail,
        title: post.title,
        author: post.author,
        createdAt: new Date(post.created_at).toLocaleString(), // 날짜 포맷 변환
      }));

      setBoardList(boardList); // boardList 변수에 할당

      const pagination = respData.pagination;
      console.log(pagination);
    } catch (error) {
      console.error("Error getting board data:", error);
    }
  };

  const moveToWrite = () => {
    navigate("/review-write");
  };

  return (
    <div className="ReviewBoard">
      <div className="ReviewBoard-info">
        <h4 style={{ display: "flex" }}>
          <div>후기 게시판</div>{" "}
          <div style={{ color: "#FF0000" }}>{boardList.length}</div>
        </h4>
        <h4>search</h4>
      </div>

      <div className="ReveiwBoard-list">
        <div className="ReviewBoard-list-row1">
          <div>
            <img className="thumb1" src={thumbex1} alt="thumb1" />
            <div className="ReviewBoard-post">
              <div className="ReviewBoard-post-title">공지 공지제목</div>
              <div className="ReviewBoard-post-content">
                <img
                  className="ReviewBoard-noprofile"
                  src={noprofile}
                  alt="no profile"
                />
                <div>
                  <div>닉네임</div>
                  <div>날짜</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className="thumb2" src={thumbex2} alt="thumb2" />
            <div className="ReviewBoard-post">
              <div className="ReviewBoard-post-title">공지 공지제목</div>
              <div className="ReviewBoard-post-content">
                <img
                  className="ReviewBoard-noprofile"
                  src={noprofile}
                  alt="no profile"
                />
                <div>
                  <div>닉네임</div>
                  <div>날짜</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ReviewBoard-list-row2">
          <div>
            <img className="thumb3" src={thumbex3} alt="thumb3" />
            <div className="ReviewBoard-post">
              <div className="ReviewBoard-post-title">공지 공지제목</div>
              <div className="ReviewBoard-post-content">
                <img
                  className="ReviewBoard-noprofile"
                  src={noprofile}
                  alt="no profile"
                />
                <div>
                  <div>닉네임</div>
                  <div>날짜</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className="thumb4" src={thumbex4} alt="thumb4" />
            <div className="ReviewBoard-post">
              <div className="ReviewBoard-post-title">공지 공지제목</div>
              <div className="ReviewBoard-post-content">
                <img
                  className="ReviewBoard-noprofile"
                  src={noprofile}
                  alt="no profile"
                />
                <div>
                  <div>닉네임</div>
                  <div>날짜</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ReviewBoard-write_button">
        <button onClick={moveToWrite} className="ReviewBoard-button">
          글쓰기
        </button>
      </div>
    </div>
  );
};

export default ReviewBoard;
