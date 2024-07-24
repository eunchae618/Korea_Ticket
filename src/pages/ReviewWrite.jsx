import React, { useState, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./custom-quill.css";
import "./ReviewWrite.css";

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
      const file = input.files[0];

      try {
        const res = await axios.post("reviews/uploadImage", { img: file });
        console.log("Response:", res.data);
        const imgUrl = res.data.imgUrl;
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();
        editor.insertEmbed(range.index, "image", imgUrl);
        editor.setSelection(range.index + 1);
      } catch (error) {
        console.log(error);
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
          &lt; 후기 게시판
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
            class="ReviewWrite-title_box"
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
