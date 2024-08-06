import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import imgNoProfile from "../../assets/images/review/noprofile.png";
import DefaultImage from "../../assets/images/review/son.png";
import SearchIcon from "../../assets/images/review/search.png";
import "../review-css/ReviewBoard.css";

const ReviewBoard = () => {
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // 총 페이지 수 상태
  const [query, setQuery] = useState(""); // 검색어 상태 추가

  const extractDate = (data) => {
    const date = new Date(data);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
  };

  const getBoardList = useCallback(
    async (page) => {
      try {
        const resp = await axios.get(
          `http://localhost:3000/reviews?search=${query}&page=${page}`
        ); // 페이지 번호와 검색어에 따라 URL 동적 설정
        const respData = resp.data;

        const postData = respData.reviewPosts.map((post) => ({
          id: post.id,
          thumbnail: post.reviewImages[0],
          title: post.title,
          author: post.writtenBy,
          date: extractDate(post.createdAt), // 날짜 포맷 변환
        }));

        setBoardList(postData); // 알아서 id 내림차순으로 정렬됨
        setTotalPages(respData.pagination.totalPages); // 총 페이지 수 업데이트
      } catch (error) {
        console.error("Error getting board data:", error);
      }
    },
    [query]
  );

  useEffect(() => {
    getBoardList(page);
  }, [page, getBoardList]);

  // query가 바뀔 때 페이지를 1로 초기화
  useEffect(() => {
    setPage(1);
  }, [query]);

  const moveToWrite = () => {
    navigate("/reviewWrite");
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
    setPage(1); // 검색 시 첫 페이지로 이동
    getBoardList(1); // 검색어로 데이터를 새로 가져오기
  };

  const addDefaultImg = (e) => {
    e.target.src = DefaultImage;
  };

  return (
    <div className="ReviewBoard">
      <div className="ReviewBoard-info">
        <div style={{ display: "flex" }}>
          <div>후기 게시판&ensp;</div>{" "}
          <div style={{ color: "#FF0000" }}>{boardList.length}</div>
        </div>
        <form onSubmit={handleSearchSubmit} className="ReviewBoard-form-search">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="검색어 입력"
          />
          <button type="submit" className="ReviewBoard-submit_search">
            <img
              src={SearchIcon}
              alt="icon_search"
              className="ReviewBoard-search_icon"
            />
          </button>
        </form>
      </div>

      <div className="ReviewBoard-list">
        {boardList.length > 0 ? (
          boardList.map((post) => (
            <Link
              to={`/reviewBoard/${post.id}`}
              key={post.id}
              className="ReviewBoard-item"
            >
              <img
                src={post.thumbnail}
                onError={addDefaultImg}
                alt="thumb"
                className="ReviewBoard-thumb"
              />
              <div className="ReviewBoard-post">
                <div className="ReviewBoard-post-title">{post.title}</div>
                <div className="ReviewBoard-post-created_by">
                  <img
                    src={imgNoProfile}
                    alt="image_no_profile"
                    className="ReviewBoard-noprofile"
                  />
                  <div>
                    {post.author}
                    <br />
                    {post.date}
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>게시물이 없습니다.</p>
        )}
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
