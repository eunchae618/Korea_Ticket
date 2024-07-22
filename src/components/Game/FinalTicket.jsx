import React, { useState } from "react";
import "./FinalTicket.css";
import { Link } from "react-router-dom";
import JBL from "../../assets/images/TeamLogo/JeonBuk.png"; //홈 구장 로고
import USL from "../../assets/images/TeamLogo/UlSan.png"; // 어웨이 구장 로고

// 대구 import DGS from "../../assets/images/TeamLogo/Daegu.png
//  대전 import DJS from "../../assets/images/TeamLogo/DaeJeon.png
//  강원 import GWS from "../../assets/images/TeamLogo/Gangwon.png
//  광주 import GJS from "../../assets/images/TeamLogo/Gangwon.png
//  인천 import ICS from "../../assets/images/TeamLogo/Incheon.png
//  제주 import JUS from "../../assets/images/TeamLogo/Jeju.png
//  전북 import JBS from "../../assets/images/TeamLogo/JeonBuk.png
//  김천 import KCS from "../../assets/images/TeamLogo/Gimcheon.png
// 포항 import POS from "../../assets/images/TeamLogo/Pohang.png
// 서울 import SES from "../../assets/images/TeamLogo/Seoul.png
//  수원 import SWS from "../../assets/images/TeamLogo/Suwon.png
//  울산 import ULS from "../../assets/images/TeamLogo/UlSan.png

const FinalTicket = () => {
  const [selectedPeople, setSelectedPeople] = useState(1);

  const handleSelectChange = (event) => {
    setSelectedPeople(event.target.value);
  };

  return (
    <div className="Form">
      <div className="Confirmation-left">
        <img
          src="https://th.bing.com/th/id/OIP.s-dNNAd48Q1mtxXvJB_nJQHaEK?rs=1&pid=ImgDetMain"
          alt="구장 이미지" //ex.) 전북구장
          className="stadiuM"
        />
      </div>

      <div className="Confirmation-right">
        <div className="Confirmation-right-left">
          <div className="er">
            <img
              src={JBL}
              alt="로고1" //전북
              className="logo-left"
            />
            <div>
              <h4 className="rr">전북 현대 VS 울산</h4>
            </div>

            <img
              src={USL}
              alt="로고2" //울산
              className="logo-right"
            />
          </div>
        </div>

        <div>
          <p className="qw">2024.07.20 (토)</p>
        </div>

        <div>
          <p className="er">전주월드컵경기장(HOME)</p>
        </div>

        <div>
          <p className="ty"> 👨‍👩‍👧‍👦 42,000명 수용 가능</p>
        </div>

        <div>
          <div className="people-choose">
            <select value={selectedPeople} onChange={handleSelectChange}>
              <option value="">인원 선택</option>
              <option value="club1">1명</option>
              <option value="club2">2명</option>
              <option value="club3">3명</option>
              <option value="club4">4명</option>
              <option value="club5">5명</option>
              <option value="club6">6명</option>
              <option value="club7">7명</option>
              <option value="club8">8명</option>
              <option value="club9">9명</option>
              <option value="club10">10명</option>
            </select>
          </div>

          <div className="Ticketing">
            <Link to="../Seat">
              <button className="tk-button">예매하기</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalTicket;
