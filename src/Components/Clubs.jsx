import React from "react";
import { Data } from "../Data/Data";
import "../Styles/Clubs.css";
const Clubs = () => {
  return (
    <>
      <div className="clubs">
        {Data.teams.map((team, index) => (
          <a href={team.directory.website} target="_blank">
            <div className="card" key={index}>
              <img src={team.images.stadium} className="stadium-image" />
              <div className="team-info">
                <img src={team.images.crest} className="team-logo" />
                <h3>{team.meta.name}</h3>
                <h5>{team.meta.stadium}</h5>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};
export default Clubs;
