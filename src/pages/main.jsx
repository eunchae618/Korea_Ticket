import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
import son from "../assets/images/review/son.png";
import siu from "../assets/images/review/siu.png";
import KDB from "../assets/images//review/KDB.png";
import ETO from "../assets/images/review/ETO.png";
import Gimcheon from "../assets/images/TeamLogo/Gimcheon.png";
import Ulsan from "../assets/images/TeamLogo/UlSan.png";
import Pohang from "../assets/images/TeamLogo/Pohang.png";
import Gangwon from "../assets/images/TeamLogo/Gangwon.png";
import Suwon from "../assets/images/TeamLogo/Suwon.png";
import Seoul from "../assets/images/TeamLogo/Seoul.png";
import GwangJu from "../assets/images/TeamLogo/Gwangju.png";
import JeJu from "../assets/images/TeamLogo/Jeju.png";
import InCheon from "../assets/images/TeamLogo/Incheon.png";
import Daegu from "../assets/images/TeamLogo/Daegu.png";
import DaeJeon from "../assets/images/TeamLogo/DaeJeon.png";
import JeonBuk from "../assets/images/TeamLogo/JeonBuk.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "../components/Footer/Footer";

const main = () => {
  const today = new Date();
  const week = ["(일)", "(월)", "(화)", "(수)", "(목)", "(금)", "(토)"];
  const dayOfWeek = week[today.getDay()];
  const formattedDate = `${today.getMonth() + 1}. ${today.getDate()} ${dayOfWeek}`;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const teamData = [
    {
      name: "김천 상무",
      img: Gimcheon,
      rank: "1",
      play: "23",
      win: "12",
      draw: "7",
      lose: "4",
      goal: "36",
      min: "23",
      wc: "43",
    },
    {
      name: "울산 현대",
      img: Ulsan,
      rank: "2",
      play: "23",
      win: "12",
      draw: "6",
      lose: "5",
      goal: "40",
      min: "26",
      wc: "42",
    },
    {
      name: "포항 스틸러스",
      img: Pohang,
      rank: "3",
      play: "23",
      win: "11",
      draw: "8",
      lose: "4",
      goal: "36",
      min: "24",
      wc: "41",
    },
    {
      name: "강원 FC",
      img: Gangwon,
      rank: "4",
      play: "23",
      win: "11",
      draw: "5",
      lose: "7",
      goal: "38",
      min: "35",
      wc: "38",
    },
    {
      name: "수원 FC",
      img: Suwon,
      rank: "5",
      play: "23",
      win: "11",
      draw: "5",
      lose: "7",
      goal: "30",
      min: "31",
      wc: "38",
    },
    {
      name: "FC 서울",
      img: Seoul,
      rank: "6",
      play: "23",
      win: "8",
      draw: "6",
      lose: "9",
      goal: "37",
      min: "30",
      wc: "30",
    },
    {
      name: "제주 FC",
      img: JeJu,
      rank: "7",
      play: "23",
      win: "9",
      draw: "2",
      lose: "12",
      goal: "25",
      min: "34",
      wc: "29",
    },
    {
      name: "광주 FC",
      img: GwangJu,
      rank: "8",
      play: "23",
      win: "9",
      draw: "1",
      lose: "13",
      goal: "30",
      min: "34",
      wc: "28",
    },

    {
      name: "인천 유나이티드",
      img: InCheon,
      rank: "9",
      play: "23",
      win: "5",
      draw: "10",
      lose: "8",
      goal: "26",
      min: "29",
      wc: "25",
    },
    {
      name: "대구",
      img: Daegu,
      rank: "10",
      play: "23",
      win: "5",
      draw: "8",
      lose: "10",
      goal: "23",
      min: "31",
      wc: "23",
    },

    {
      name: "전북 현대",
      img: JeonBuk,
      rank: "11",
      play: "23",
      win: "4",
      draw: "8",
      lose: "11",
      goal: "27",
      min: "43",
      wc: "20",
    },
    {
      name: "대전 하나시티즌",
      img: DaeJeon,
      rank: "12",
      play: "23",
      win: "4",
      draw: "8",
      lose: "11",
      goal: "22",
      min: "33",
      wc: "20",
    },
  ];
  return (
    <div className="main">
      <div className="vsTeamWrapper">
        <div className="vsTeamText">
          <h2 className="vsTeam">서울 vs 전북</h2>
          <div className="vsInformation">
            <p>2024. 07.03(수) 17:00</p>
            <p>상암 월드컵 경기장</p>
            <div className="booking-box">
              <Link to="/gameList"> 지금 예매하기</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="TeamFind">
        <div className="slider-contaioner">
          <h2 className="Team">팀 추천</h2>
          <Slider {...settings}>
            {teamData.map(function (team) {
              return (
                <div>
                  <div className="slice-slice" key={team}>
                    <h2>{team.name}</h2>
                    <img className="team-png" src={team.img} alt={team.name} />
                    <div className="team-day-list">팀 일정 보기</div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="main-Board">
          <div className="Board-left">
            <Link to="/gameList">🎫 티켓 구매하기</Link>
            <div className="Day-box">
              <div className="PlayDay">{formattedDate}</div>
              <div className="PlayDay2">
                <div className="Day-font">{formattedDate}</div>
                <div className="Play-time">19:00</div>
                <img className="team-vrs" src={Seoul} alt="팀 이미지" />
                <div className="vs-Date">vs</div>
                <img className="team-vrs" src={JeJu} alt="팀 이미지" />
                <div className="vrs-name2">
                  <div className="vrs-name">FC 서울 vs 제주</div>
                  <div className="vrs-name1"> 제주 월드컵 경기장</div>
                </div>
              </div>
            </div>
          </div>
          <div className="Board-right">
            <Link to="/reviewBoard">💭 후기 게시판</Link>
            <div className="rv-first">
              <div className="pic1">
                <img className="pic" src={son} alt="손흥민"></img>
                <div className="rv-text">손흥민</div>
              </div>
              <div className="pic1">
                <img className="pic" src={siu} alt="호날두"></img>
                <div className="rv-text">호날두</div>
              </div>
            </div>
            <div className="rv-second">
              <div className="pic1">
                <img className="pic" src={KDB} alt="더브라위너"></img>
                <div className="rv-text">김덕배</div>
              </div>
              <div className="pic1">
                <img className="pic" src={ETO} alt="사무엘 대토"></img>
                <div className="rv-text">에투투</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rank-wrapper">
        <div className="rank-title">🏆 순위표</div>
        <table className="rank-table">
          <thead>
            <tr>
              <th scope="col">순위</th>
              <th scope="col" colSpan={2}>
                팀명
              </th>
              <th>경기 수</th>
              <th>승</th>
              <th>무</th>
              <th>패</th>
              <th>득</th>
              <th>실</th>
              <th>승점</th>
            </tr>
          </thead>
          <tbody>
            {teamData.map((team, index) => (
              <tr key={index} className="tr-border">
                <td>{team.rank}</td>
                <td></td>
                <td>
                  <div className="tr-team">
                    <img
                      className="team-png"
                      style={{ width: "30px", height: "30px" }}
                      src={team.img}
                      alt={team.name}
                    />
                    <span>{team.name}</span>
                  </div>
                </td>

                <td>{team.play}</td>
                <td>{team.win}</td>
                <td>{team.draw}</td>
                <td>{team.lose}</td>
                <td>{team.goal}</td>
                <td>{team.min}</td>
                <td>{team.wc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default main;
