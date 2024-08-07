import React from "react";
import "./Footer.css";
import Instagram from "../../assets/images/Instagram.png";
import Youtube from "../../assets/images/Youtube.png";
import Tiktok from "../../assets/images/Tictok.png";
import Twitter from "../../assets/images/Twitter.png";
import Facebook from "../../assets/images/Facebook.png";

const Footer = () => {
  const url = "https://www.youtube.com/user/withkleague";
  const url1 = "https://www.instagram.com/kleague";
  const url2 = "https://www.facebook.com/KLEAGUEofficial";
  const url3 = "https://www.tiktok.com/@kleague_official";
  const url4 = "https://x.com/kleague";

  return (
    <footer className="footer-box">
      <div className="footer-text">
        <p className="footer-name">국산티켓 주식회사</p>
        <p>대표이사 : 23양은채</p>
        <p>문의사항 : koreaTicket @ gmail.com </p>
        <p>Copyright ⓒ 23EunChaeYang All Rights Reserved.</p>
        <div className="Footer-Icon">
          <div
            className="Instagram"
            onClick={() => {
              window.open(url1);
            }}
          >
            <img
              className="Instagram-Icon"
              src={Instagram}
              alt="인스타그램 아이콘"
            />
          </div>
          <div
            className="Youtube"
            onClick={() => {
              window.open(url);
            }}
          >
            <img className="Youtube-Icon" src={Youtube} alt="유튜브 아이콘" />
          </div>
          <div
            className="Facebook"
            onClick={() => {
              window.open(url2);
            }}
          >
            <img
              className="Facebook-Icon"
              src={Facebook}
              alt="페이스북 아이콘"
            />
          </div>
          <div
            className="Twitter"
            onClick={() => {
              window.open(url4);
            }}
          >
            <img className="Twitter-Icon" src={Twitter} alt="트위터 아이콘" />
          </div>
          <div
            className="Tiktok"
            onClick={() => {
              window.open(url3);
            }}
          >
            <img className="Tiktok-Icon" src={Tiktok} alt="틱톡 아이콘" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
