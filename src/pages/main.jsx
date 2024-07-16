import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
const main = () => {
  return (
    <div className="main">
      <div className="vsTeamWrapper">
        <div className="vsTeamText">
          <h2 className="vsTeam">서울 vs 전북</h2>
          <div className="vsInformation">
            <p>2024. 07.03(수) 17:00</p>
            <p>상암 월드컵 경기장</p>
            <div className="booking-box">
              <Link to="/bookingPage">지금 예매하기</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;