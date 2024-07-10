import React from "react";
import "./gameList.css";
import GmImage from "../assets/images/GmImage.png";

const gameList = () => {
    return(
            <div className="league">
                 <h1>K LEAGUE 일정/티켓</h1>
                 <p> 리그      ㅣ 클럽          ㅣ 예매       </p>
            

                 <img className="GmImage" src={GmImage} alt="일정 티켓 이미지" />      
            </div>
            
    );

}

export default gameList;