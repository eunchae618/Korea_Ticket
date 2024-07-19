import React from "react";
import "./Game.css";
import { Link } from "react-router-dom";

// # 김천 https://th.bing.com/th/id/OIP.R2zMvjDb1mzvofm8S9aVnQHaIo?rs=1&pid=ImgDetMain
// # 울산 https://th.bing.com/th/id/OIP.shn6rgirzpNZ7IdT9p39WAHaI6?rs=1&pid=ImgDetMain
// # 포항 https://e7.pngegg.com/pngimages/814/30/png-clipart-pohang-steelers-k-league-1-sangju-sangmu-fc-daegu-fc-incheon-football-emblem-text.png
// # 강원 https://vignette.wikia.nocookie.net/sports/images/5/5c/Gangwon_FC.png/revision/latest/scale-to-width-down/2000?cb=20190211112055&path-prefix=ko
// # 수원 https://vignette.wikia.nocookie.net/sports/images/7/74/Suwon_FC.png/revision/latest/scale-to-width-down/2000?cb=20180307022120&path-prefix=ko
// # 서울 https://www.urbanbrush.net/web/wp-content/uploads/edd/2017/09/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2017-09-24-%EC%98%A4%ED%9B%84-7.20.01.png
// # 광주 https://www.gwangjufc.com/updata/media/nMnXOq.jpg
// # 제주 https://w7.pngwing.com/pngs/759/232/png-transparent-jeju-united-fc-jeju-province-k-league-1-fc-seoul-jeonbuk-hyundai-motors-fc-2015-16-manchester-united-f-c-season-logo-south-korea-afc-champions-league.png
// # 인천 https://th.bing.com/th/id/OIP.7wOmcpKB0w5c76GncJbetQHaE8?rs=1&pid=ImgDetMain
// # 대구 https://blog.kakaocdn.net/dn/cv0xw3/btqyqwUjtCM/oVKPifkz8ePsAe4ELTzAcK/img.jpg
// # 대전 https://cdn.spotvnews.co.kr/news/photo/202001/337603_420812_2044.jpg
// # 전북 https://blog.kakaocdn.net/dn/caJIG3/btqystWn77G/qSsCPcDD4w4oMkrKmkiZGK/img.jpg

const Game = () => {
  return (
    <div className="MatchList">
      <div className="Game">
        <div className="game-left">
          <img
            src="https://tv.kleague.com/image/1920/1080/placeholder_16_9.png"
            alt="k리그이미지"
            className="gmImage"
          />
          <div className="time">19:00</div>
          <div className="date">2024.07.20 (토)</div>
          <div className="stadium">전주월드컵경기장(HOME)</div>
        </div>

        <div className="game-center">
          <div className="game-center-left">
            <img
              src="https://blog.kakaocdn.net/dn/caJIG3/btqystWn77G/qSsCPcDD4w4oMkrKmkiZGK/img.jpg"
              alt="전북이미지"
              className="juI"
            />
            <p className="jb">전북</p>
          </div>

          <div className="game-center-center">
            <h2 className="vs">VS</h2>
          </div>

          <div className="game-center-right">
            <img
              src="https://th.bing.com/th/id/OIP.shn6rgirzpNZ7IdT9p39WAHaI6?rs=1&pid=ImgDetMain"
              alt="울산이미지"
              className="woI"
            />
            <p className="wo">울산</p>
          </div>
        </div>

        <div className="game-right">
          <Link to="../FinalTicket">
            <button className="tk-button">예매하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Game;
