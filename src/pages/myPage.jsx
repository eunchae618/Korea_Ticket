import React from "react";
import "./myPage.css";
import informationButton from "../assets/images/informationButton.png";
import { Link } from "react-router-dom";
const myPage = () => {
  return (
    <div className="MyPage">
      <div className="MyPage-left">
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
      <div className="MyPage-right">
        <div>
          <h3 className="ticket-list">예매내역</h3>
          <div className="ticket-explanation">
            예매번호를 클릭하면 자세한 내역을 볼 수 있습니다.
          </div>
          <div className="ticket-calender">
            <input type="date" />
            <input type="date" />
          </div>
          <div className="information">
            <p>예매번호</p>
            <p>티켓명</p>
            <p>관람일시</p>
            <p>매수</p>
          </div>
          <div className="information2">
            <p>예매한 내역이 없습니다.</p>
          </div>

          <div className="information-button">
            <img
              className="information-button"
              src={informationButton}
              alt="예매내역 버튼"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default myPage;
