import React from "react";
import "./myPage.css";
import "./quit.css";
import { Link } from "react-router-dom";
const quit = () => {
  return (
    <div className="MyPage">
      <div className="quit-left">
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

      <div className="quit-middle">
        <h3 className="quit-text">회원 탈퇴</h3>
        <div className="quit-explanation">
          <div className="quit-warring">회원 탈퇴 시 주의사항:</div>
          <ul className="ul-text">
            <li>
              회원 탈퇴가 완료되면, 계정 정보 및 모든 데이터가 영구적으로
              삭제됩니다.
            </li>
            <li>
              삭제된 데이터는 복구할 수 없으니 신중하게 결정해 주시기 바랍니다.
            </li>
            <li>현재 진행 중인 서비스나 혜택도 모두 종료됩니다.</li>
          </ul>

          <ul className="ul-text2">
            <li>
              Once your account is deleted, all your information and data will
              be permanently erased.
            </li>
            <li>
              Deleted data cannot be recovered, so please make this decision
              carefully.
            </li>
            <li>
              Any ongoing services or benefits will be terminated immediately.
            </li>
          </ul>
          <div className="war-text">
            아래에 <div className="text-color">비밀번호</div>를 입력하세요
          </div>

          <div className="pw-input">
            <div className="pw-text">
              비밀번호
              <div className="password-input">
                <input type="password"></input>
              </div>
              <button className="quit-button">탈퇴</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default quit;
