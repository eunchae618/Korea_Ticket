import React, { useState, useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { postLogin, pacthPwfind, postJoin } from "../../apis/axios.js";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const modalBackground = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userName, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postLogin(email, password);
      alert("로그인 성공");
      // 로그인 성공 시 추가적인 작업을 수행할 수 있습니다.
    } catch (error) {
      setError(error.response ? error.response.data.message : "로그인 실패");
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      await pacthPwfind(email);
      alert("이메일에 임시 비밀번호 전송");
      setPasswordModalOpen(false);
    } catch (error) {
      setError(
        error.response ? error.response.data.message : "이메일 확인해주세요."
      );
    }
  };

  const handleSubmit3 = async (e) => {
    e.preventDefault();
    try {
      await postJoin(userName, email, password);
      alert("회원가입이 완료되었습니다.");
      setJoinModalOpen(false);
    } catch (error) {
      setError(
        error.response ? error.response.data.message : "아이디가 중복됩니다."
      );
    }
  };

  return (
    <>
      <div className="Header">
        <div className="Header-left">
          <Link to="/">
            <div className="icon">🍀 국산 티켓</div>
          </Link>
          <div className="head-text">
            <Link to="/gameList">티켓 구매하기</Link>
            <Link to="/reviewBoard">후기 게시판</Link>
          </div>
        </div>
        <div className="Header-right">
          <div onClick={() => setModalOpen(true)}>로그인</div>
        </div>
      </div>
      {modalOpen && (
        <div
          className="modal-container"
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <div className="modal-content">
            <div className="icon">🍀국산티켓</div>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="login-text">
                <p>이메일</p>
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="이메일을 입력해주세요."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login-text">
                <p>비밀번호</p>
                <input
                  type="password"
                  value={password}
                  placeholder="비밀번호를 입력해주세요."
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="modal-button">
                <button type="submit">로그인</button>
              </div>
              {error && <div className="error">{error}</div>}
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
          className="modal-container"
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setJoinModalOpen(false);
            }
          }}
        >
          <div className="modal-content">
            <div className="join">🍀회원가입</div>

            <form className="join-form" onSubmit={handleSubmit3}>
              <div className="join-text">
                <p>이름</p>
                <input
                  type="text"
                  placeholder="ex)홍길동"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="join-text">
                <p>이메일</p>
                <input
                  type="email"
                  placeholder="이메일을 입력해주세요."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="join-text">
                <p>비밀번호</p>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="join-text">
                <p>비밀번호 확인</p>
                <input
                  type="password"
                  placeholder="비밀번호를 한번 더 입력해주세요."
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="modal-joinbutton">
                <button>회원가입</button>
              </div>
              <div
                className="join-backButton"
                onClick={() => {
                  setJoinModalOpen(false);
                  setModalOpen(true);
                }}
              >
                <button>뒤로가기</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {passwordModalOpen && (
        <div
          className="modal-container"
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setPasswordModalOpen(false);
            }
          }}
        >
          <div className="modal-content">
            <div className="password">🍀비밀번호 찾기</div>
            <form className="login-form" onSubmit={handleSubmit2}>
              <div className="pw-text">
                <p>이메일</p>
                <input
                  name="email"
                  type="text"
                  placeholder="이메일을 입력해주세요."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="modal-backButton">
                <button>비밀번호 찾기</button>
              </div>
              <div
                className="pw-backButton"
                onClick={() => {
                  setPasswordModalOpen(false);
                  setModalOpen(true);
                }}
              >
                <button>뒤로가기</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
