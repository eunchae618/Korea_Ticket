import React, { useState } from "react";
import "./gameList.css";
import DateSelector from "./DateSelector";
import Game from "../components/Game/Game";
// import matchList from "./matchList";

const GameList = () => {
    const [selectedClub, setSelectedClub] = useState('');

    const handleClubChange = (event) => {
        setSelectedClub(event.target.value);
    };

    return (
        <div className="league">
            <div className="leaguered">
                <h1 className="league_ticket">K LEAGUE 일정/티켓</h1>
            </div>

            
            <div className="select-box">
                <select value={selectedClub} onChange={handleClubChange}>
                    <option value="">클럽 선택</option>
                    <option value="club1">김천 상무</option>
                    <option value="club2">울산</option>
                    <option value="club3">포항</option>
                    <option value="club2">강원</option>
                    <option value="club2">수원FC</option>
                    <option value="club2">FC 서울</option>
                    <option value="club2">광주</option>
                    <option value="club2">제주</option>
                    <option value="club2">인천</option>
                    <option value="club2">대구 FC</option>
                    <option value="club2">대전 하나시티즌 FC</option>
                    <option value="club2">전북 현대</option>
                </select>
            </div>


            <div className="Date">
                <DateSelector />
            </div>


            <Game />   
            
        </div>
    );
}

export default GameList;