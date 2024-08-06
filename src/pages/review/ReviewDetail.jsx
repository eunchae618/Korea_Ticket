import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewPost from "./ReviewPost";

const ReviewDetail = () => {
  const { id } = useParams(); // /reviewBoard/:id의 id를 가져온다.
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null); // 초기 상태를 null로 변경

  const getPost = useCallback(async () => {
    try {
      const resp = await axios.get(`http://13.125.77.62/reviews/${id}`);
      const respData = resp.data;

      const postData = {
        author: respData.writtenBy,
        title: respData.title,
        content: respData.content,
        date: respData.date,
      };

      setPost(postData);
      setLoading(false); // 데이터가 성공적으로 로드된 후 loading 상태를 false로 설정
    } catch (error) {
      console.error("Error getting post data:", error);
      setLoading(false); // 에러 발생 시에도 loading 상태를 false로 설정
    }
  }, [id]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  if (loading) {
    return <h2>Loading...</h2>; // 로딩 중에는 로딩 메시지만 표시
  }

  if (!post) {
    return <h2>Post not found</h2>; // 포스트 데이터가 없는 경우 메시지 표시
  }

  return (
    <div>
      <ReviewPost
        author={post.author}
        title={post.title}
        content={post.content}
        date={post.date}
      />
    </div>
  );
};

export default ReviewDetail;
