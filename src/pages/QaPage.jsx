import React from "react";
import "./myPage.css";
import "./QaPage.css";
import { Link } from "react-router-dom";
const QaPage = () => {
  const QnAData = [
    {
      num: 6,
      classification: "결제 문의",
      name: "환불 관련 문의합니다.",
      day: "24.07.04",
    },
    {
      num: 5,
      classification: "경기 문의",
      name: "00팀 경기기 관련 문의합니다.",
      day: "24.07.04",
    },
    {
      num: 4,
      classification: "경기 문의",
      name: "00팀 경기장 관련 문의합니다.",
      day: "24.07.03",
    },
    {
      num: 3,
      classification: "결제문의",
      name: "좌석 관련 문의합니다.",
      day: "24.07.02",
    },
    {
      num: 2,
      classification: "결제문의",
      name: "카드 결제 관련 문의합니다.",
      day: "24.07.01",
    },
    {
      num: 1,
      classification: "티켓 문의",
      name: "티켓팅 최대 인원 관련 문의합니다.",
      day: "24.06.25",
    },
  ];
  return (
    <div className="MyPage">
      <div className="QaPage-left">
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
      <div className="QaPage-right">
        <div className="QaIcon">🐒 문의사항</div>

        <table className="QnA-table">
          <thead>
            <tr>
              <th>번호</th>
              <th>분류</th>
              <th>제목</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
            {QnAData.map((QnA, index) => (
              <tr key={index} className="tr-border">
                <td>{QnA.num}</td>
                <td>{QnA.classification}</td>
                <td>{QnA.name}</td>
                <td>{QnA.day}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QaPage;
