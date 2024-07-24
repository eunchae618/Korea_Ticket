import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ReviewBoard.css";
import axios from "axios";
import noprofile from "../assets/images/review/noprofile.png";
import DefaultImage from "../assets/images/review/son.png";

const ReviewBoard = () => {
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // 총 페이지 수 상태

  const getBoardList = async (page) => {
    try {
      const resp = await axios.get(
        `http://localhost:3000/reviews?page=${page}`
      ); // 페이지 번호에 따라 URL 동적 설정
      const respData = resp.data;

      const boardList = respData.reviewPosts.map((post) => ({
        id: post.id,
        thumbnail: post.reviewImages[0],
        title: post.title,
        author: post.writtenBy,
        createdAt: new Date(post.createdAt).toLocaleString(), // 날짜 포맷 변환
      }));

      setBoardList(boardList); // 알아서 id 내림차순으로 정렬됨
      setTotalPages(respData.pagination.totalPages); // 총 페이지 수 업데이트
    } catch (error) {
      console.error("Error getting board data:", error);
    }
  };

  const moveToWrite = () => {
    navigate("/reviewWrite");
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    getBoardList(newPage);
  };

  useEffect(() => {
    getBoardList(page);
  }, [page]);

  const addDefaultImg = (e) => {
    e.tartget.src = DefaultImage;
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

      <div className="ReviewBoard-list">
        {boardList.map((post) => (
          <Link
            to={`/reviews/${post.id}`}
            className="ReviewBoard-item"
            key={post.id}
          >
            <img
              className="thumb"
              src={post.thumbnail}
              onError={addDefaultImg}
              alt="thumb"
            />
            <div className="ReviewBoard-post">
              <div className="ReviewBoard-post-title">{post.title}</div>
              <div className="ReviewBoard-post-content">
                <img
                  className="ReviewBoard-noprofile"
                  src={noprofile}
                  alt="no profile"
                />
                <div>
                  <div>{post.author}</div>
                  <div>{post.createdAt}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="ReviewBoard-pagination">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          이전
        </button>
        <span>
          {page} / {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          다음
        </button>
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
