import React, { useState, useRef } from "react";
import "./Header.css";
import icon from "../../assets/images/icon.png";
import join from "../../assets/images/join.png";
import { Link } from "react-router-dom";
import password from "../../assets/images/password.png";
const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const modalBackground = useRef();
  return (
    <>
      <div className="Header">
        <div className="Header-left">
          <Link to="/">
            <img className="icon" src={icon} alt="국산 티켓 아이콘" />
          </Link>
          <Link to="/gameList">티켓 구매하기</Link>
          <Link to="/reviewBoard">후기 게시판</Link>
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
                <input type="text" placeholder="이메일을 입력해주세요." />
              </div>
              <div className="text-box">
                <p>비밀번호</p>
                <input type="password" placeholder="비밀번호를 입력해주세요." />
              </div>
              <div className="modal-button">
                <button>로그인</button>
              </div>
              <div className="modal-menu">
                <div
                  onClick={() => {
                    setJoinModalOpen(true);
                    setModalOpen(false);
                  }}
                >
                  회원가입
                </div>
                <div
                  onClick={() => {
                    setPasswordModalOpen(true);
                    setModalOpen(false);
                  }}
                >
                  비밀번호 찾기
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {joinModalOpen && (
        <div
          className={"modal-container"}
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setJoinModalOpen(false);
            }
          }}
        >
          <div className={"modal-content"}>
            <img
              className="join"
              src={join}
              style={{ marginBottom: "40px" }}
              alt="회원가입"
            />
            <form className="join-form">
              <div className="join-text">
                <p>이름</p>
                <input type="text" placeholder="ex)홍길동" />
              </div>
              <div className="join-text">
                <p>이메일</p>
                <input type="text" placeholder="이메일을 입력해주세요." />
              </div>
              <div className="join-text">
                <p>비밀번호</p>
                <input type="password" placeholder="비밀번호를 입력해주세요." />
              </div>
              <div className="join-text">
                <p>비밀번호 확인</p>
                <input
                  type="password"
                  placeholder="비밀번호를 한번 더 입력해주세요."
                />
              </div>
              <div className="modal-joinbutton">
                <button>회원가입</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {passwordModalOpen && (
        <div
          className={"modal-container"}
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setPasswordModalOpen(false);
            }
          }}
        >
          <div className={"modal-content"}>
            <img
              className="password"
              src={password}
              style={{ marginBottom: "40px" }}
              alt="비밀번호 찾기 아이콘"
            />
            <form className="login-form">
              <div className="text-box">
                <p>아이디</p>
                <input type="text" placeholder="이메일을 입력해주세요." />
              </div>
              <div className="text-box">
                <p>이름</p>
                <input type="text" placeholder="이름을 입력해주세요." />
              </div>
              <div className="text-box">
                <p>이메일</p>
                <input type="password" placeholder="이메일을 입력해주세요." />
              </div>
              <div className="modal-button">
                <button>비밀번호 찾기</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header; //Header 내보내기
