import React from "react";
import "./main.css";
import mainImage from "../assets/images/mainImage.png";
const main = () => {
  return (
    <div>
      <div>
        <img className="mainImage" src={mainImage} alt="메인 이미지" />
        <h1 className="vsTeam">서울 vs 전북</h1>
        <div>2024. 07.03(수) 17:00 </div>
        <div>상암 월드컵 경기장</div>
      </div>
    </div>
  );
};

export default main;