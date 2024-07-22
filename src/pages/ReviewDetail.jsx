import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Review from "../components/Review/Review";

const ReviewDetail = () => {
  const { idx } = useParams(); // /board/:idx와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState({});
  const getBoard = async () => {
    try {
      const resp = await axios.get("http://localhost:3000/reviews/{idx}"); // idx를 사용하여 특정 게시물 데이터를 가져옵니다.
      setBoard(resp.data);
      setLoading(false);
    } catch (error) {
      console.error("Error getting the board data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getBoard();
  }, [idx]);
  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <Review
          idx={board.idx}
          title={board.title}
          contents={board.contents}
          createdBy={board.createdBy}
        />
      )}
    </div>
  );
};

export default ReviewDetail;
