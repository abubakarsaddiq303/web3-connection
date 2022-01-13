import React from "react";
import "./Team.css";
import NFT3 from "../assets/NFT3.jpg";
import SCROLL from "../assets/down-arrow.png";

function Team() {
  return (
    <div className="team" id="">
      <div className="team-container">
        <div className="my-Team">
          <h2>Team</h2>
        </div>
        <div className="team-card">
          <div className="card-img">
            <img className="img3" src={NFT3}></img>
          </div>
          <div className="card-name">
            <h1>saddiq</h1>
          </div>
        </div>
        <div className="scroll3">
          <a href="#section1">
            <img src={SCROLL} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Team;
