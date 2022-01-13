import React from "react";
import "./About.css";
import SCROLL from "../assets/down-arrow.png";
import A from "../assets/A.jpg";
import B from "../assets/B.jpg";
import C from "../assets/C.jpg";
import D from "../assets/D.jpg";
import E from "../assets/E.jpg";
import F from "../assets/F.jpg";
import G from "../assets/G.jpg";
import H from "../assets/H.jpg";

function About() {
  return (
    <div className="about" id="section2">
      <div className="about-container">
        <div className="what">
          <di>
            <h2>What is </h2>
          </di>
          <div className="NFT">
            <h1> ABverse</h1>
          </div>
          <div>
            <p
              style={{
                color: "white",
                fontSize: "31px",
                fontWeight: "bold",
                margin: "0",
              }}
            >
              ?
            </p>
          </div>
        </div>
        <div className="about-pragraph">
          <p>
            ABverse is a virtual world platform and toolset that lets creators
            and
            <br /> communities create their own NFTs in a next generation
            metaverse.
          </p>
        </div>
        <div className="about-card">
          <div className="all-cards">
            <div className="card1">
              <img src={A}></img>
            </div>

            <div className="card1">
              <img src={B}></img>
            </div>
            <div className="card1">
              <img src={C}></img>
            </div>
            <div className="card1">
              <img src={D}></img>
            </div>
            <div className="card1">
              <img src={E}></img>
            </div>
            <div className="card1">
              <img src={F}></img>
            </div>
            <div className="card1">
              <img src={G}></img>
            </div>
            <div className="card1">
              <img src={H}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll2">
        <a href="#section3">
          <img src={SCROLL} />
        </a>
      </div>
    </div>
  );
}

export default About;
