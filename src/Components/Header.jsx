import React from "react";
import "../Styles/Header.css";
import logo from "../assets/Images/logo.png";
import { Data } from "../Data/Data";

const Header = () => {
  return (
    <div className="Header">
      <div className="teamsList-Container">
        <div className="teamLogos">
          <p>
            <strong>Club Websites :</strong>
          </p>
          {Data.teams.map((item, index) => (
            <a href={item.directory.website} key={index}>
              <img src={item.images.crest} className="teamImage" />
            </a>
          ))}
        </div>
      </div>
      <img src={logo} className="logo" />
      <div className="header-title">
        <h2>Premier League</h2>
        <p>No room for racism</p>
      </div>
    </div>
  );
};
export default Header;
