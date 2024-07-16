/* 연도 선택 할 수 있는 거. selectbox */
import React, { useState } from "react";
import "./gameList.css";

const DateSelector = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(
    months[new Date().getMonth()]
  );

  return (
    <div>
      <select
        className="custom-select"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        {years.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>

      <select
        className="custom-select"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateSelector;
