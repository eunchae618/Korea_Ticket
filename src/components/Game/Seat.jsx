import React, { useState } from "react";
import "./Seat.css";

const Seat = () => {
  const [selectedSeat, setSelectedSeat] = useState(""); // 초기값을 ""로 설정

  const handleSelectChange = (event) => {
    setSelectedSeat(event.target.value); // 선택된 값을 상태로 저장
  };

  return (
    <div className="tk">
      <p className="kk">🎫 전북 VS 울산 티켓 예매하기</p>
      <img
        src="https://hyundai-motorsfc.com/img/seat_2024.f98e5d45.jpeg"
        alt="구장이미지"
        className="tkI"
      />
      <div>
        <div className="Seat-choose">
          <select value={selectedSeat} onChange={handleSelectChange}>
            <option value="">구역 선택</option> {/* 기본값을 ""로 설정 */}
            <option value="club1">A구역</option>
            <option value="club2">B구역</option>
            <option value="club3">C구역</option>
            <option value="club4">D구역</option>
            <option value="club5">E구역</option>
            <option value="club6">F구역</option>
            <option value="club7">G구역</option>
            <option value="club8">H구역</option>
            <option value="club9">I구역</option>
            <option value="club10">J구역</option>
            <option value="club11">K구역</option>
          </select>
        </div>

        <div className="Buy">
          <button className="tk-button">결제하기</button>
        </div>
      </div>{" "}
    </div>
  );
};

export default Seat;
