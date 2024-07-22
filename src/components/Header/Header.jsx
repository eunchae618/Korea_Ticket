import React, { useState, useRef } from "react";
import "./Header.css";
import icon from "../../assets/images/icon.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();
  return (
    <>
      <div className="Header">
        <div className="Header-left">
          <Link to="/">
            <img className="icon" src={icon} alt="국산 티켓 아이콘" />
          </Link>
          <Link to="/gameList">티켓 구매하기</Link>
          <Link to="/review-board">후기 게시판</Link>
        </div>
        <div className="Header-right">
          <div onClick={() => setModalOpen(true)}>로그인</div>
        </div>
      </div>

      {modalOpen && (
        <div
          className={"modal-container"}
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <div className={"modal-content"}>
            <img
              className="icon"
              src={icon}
              style={{ marginBottom: "40px" }}
              alt="국산 티켓 아이콘"
            />
            <form className="login-form">
              <div className="text-box">
                <p>이메일</p>
                <input type="text" placeholder="이메일을 압력해주세요." />
              </div>
              <div className="text-box">
                <p>비밀번호</p>
                <input type="password" placeholder="비밀번호를 입력해주세요." />
              </div>
              <div className="modal-button">
                <button>로그인</button>
              </div>
            </form>

            <div className="modal-link">
              <Link to="/">비밀번호 찾기</Link>
              <Link to="/">회원가입</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header; //Header 내보내기
