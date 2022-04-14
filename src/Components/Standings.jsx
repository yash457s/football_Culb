import React from "react";
import "../Styles/Standing.css";
import { Data } from "../Data/Data";

const Standings = () => {
  return (
    <>
      <div className="standings">
        <table>
          <tr>
            <th>Pos</th>
            <th>Club</th>
            <th>PI</th>
            <th>GD</th>
            <th>Pts</th>
          </tr>

          {Data.standings.map((team, index) => (
            <tr key={index}>
              <td>{team.position}</td>
              <td>
                <img src={team.url} />
                {team.name.long}
              </td>
              <td>{team.stats.played}</td>
              <td>{team.stats.goalDifference}</td>
              <td>{team.stats.points}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};
export default Standings;
