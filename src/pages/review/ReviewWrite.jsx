import React, { useState, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../review-css/review-quill.css";
import "../review-css/ReviewWrite.css";

const ReviewWrite = () => {
  const navigate = useNavigate();

  const [reviewTitle, setTitle] = useState("");
  const [reviewContent, setReviewContent] = useState("");

  const quillRef = useRef(null);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.addEventListener("change", async () => {
      console.log("온체인지");
      const file = input.files[0];
      const formData = new FormData();
      formData.append("img", file);

      try {
        const result = await axios.post(
          "http://localhost:3000/reviews/uploadImage",
          formData
        );
        console.log(result.data);
        const IMG_URL = result.data;
        const editor = quillRef.current.getEditor();
        // 현재 에디터 커서 위치값을 가져온다
        const range = editor.getSelection();
        // 가져온 위치에 이미지를 삽입한다
        editor.insertEmbed(range.index, "image", IMG_URL);
      } catch (error) {
        console.log("Error getting image URL:");
      }
    });
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["image"],
          [{ header: [1, 2, 3, 4, 5, false] }],
          ["bold", "underline"],
        ],
        handlers: { image: imageHandler },
      },
    }),
    []
  );

  const handleEditorChange = (content) => {
    setReviewContent(content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      title: reviewTitle,
      content: reviewContent,
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/reviews/write",
        reviewData
      );
      console.log("Response:", res.data);
      // 성공 시 필요한 작업 수행 (예: 성공 메시지 표시 또는 페이지 이동)
    } catch (error) {
      console.error("There was an error submitting the review!", error);
      // 실패 시 필요한 작업 수행 (예: 에러 메시지 표시)
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
          &lt; 목록으로
        </div>
        <div className="ReviewWrite-page_title">후기 남기기</div>
      </div>

      <form onSubmit={handleSubmit} className="ReviewWrite-body">
        <div className="ReviewWrite-input_title">
          제목&ensp;
          <input
            type="text"
            value={reviewTitle}
            onChange={handleChange}
            className="ReviewWrite-title_box"
          />
        </div>
        <div className="ReviewWrite-input_content">
          내용&ensp;
          <ReactQuill
            value={reviewContent}
            onChange={handleEditorChange}
            modules={modules}
            className="ReviewWrite-content_box"
          />
        </div>
        <div class="ReviewWrite-confirm_button">
          <button type="submit" className="ReviewWrite-button">
            작성
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewWrite;
