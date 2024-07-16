import React from "react";
import "./Game.css";

const Game = () => {
  return (
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
        <div className="game-emblem">
          <div className="team-left">
            <img
              src="https://blog.kakaocdn.net/dn/caJIG3/btqystWn77G/qSsCPcDD4w4oMkrKmkiZGK/img.jpg"
              alt="전북이미지"
              className="jb"
            />
          </div>
        </div>
      </div>

      <div className="game-right">
        <div className="tkbutton">
          {/* 예매하기 박스 */}

          <p>예매하기</p>
        </div>
      </div>
    </div>
  );
};

export default Game;
