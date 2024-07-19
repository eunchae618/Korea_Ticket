import React from "react";
import PwChange from "../assets/images/PwChange.png";
import "./pwChange.css";
import "./myPage.css";
import { Link } from "react-router-dom";
const pswChange = () => {
  return (
    <div className="MyPage">
      <div className="pwChange-left">
        <Link to="/MyPage" style={{ textDecoration: "none" }}>
          <div className="MyPageIcon">🐎 마이페이지</div>
        </Link>

        <div className="MyPage-menu">
          <Link to="/myPage">
            <div className="menu">예매내역</div>
          </Link>
          <Link to="/myPage/QaPage">
            <div className="menu">문의사항</div>
          </Link>
          <Link to="/myPage/pswChange">
            <div className="menu">비밀번호 변경</div>
          </Link>
          <Link to="/myPage/quit">
            <div className="menu">회원탈퇴</div>
          </Link>
        </div>
      </div>

      <div className="pwChange-middle">
        <h3 className="pw-change">비밀번호 변경</h3>
        <img
          className="pwChangeImage"
          src={PwChange}
          alt="비밀번호 변경 이미지"
        />
      </div>
      <div className="pwChange-right">
        <div className="text-box">
          <div className="text">기존 비밀번호</div>
          <div className="input">
            <input type="password" />
          </div>
        </div>
        <div className="text-box">
          <div className="text">새 비밀번호</div>
          <div className="input">
            <input type="password" />
          </div>
        </div>
        <div className="text-box">
          <div className="text">비밀번호 확인</div>
          <div className="input">
            <input type="password" />
          </div>
        </div>
        <div className="button">
          <button className="button-style">변경</button>
        </div>
      </div>
    </div>
  );
};

export default pswChange;
