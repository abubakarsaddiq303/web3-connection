import React from "react";
import "./Main2.css";
import NFT2 from "../assets/NFT2.jpg";
import SCROLL from "../assets/down-arrow.png";
import { Link } from "react-router-dom";
import About from "../about/About";
import Team from "../team/Team";

function Main() {
  return (
    <div className="main2" id="section1">
      <div className="container">
        <div className="row">
          <div className="col-1">
            <div className="NFT-img">
              <img className="img1" src={NFT2}></img>
              <img className="img2" src={NFT2}></img>
              <img className="img3" src={NFT2}></img>
            </div>
          </div>
          <div className="col-2">
            <div className="col-2_heading">
              <h1>Extraordinary</h1>
            </div>
            <div className="head">
              <div className="nfts">
                <h1>NFT</h1>
              </div>

              <div className="nft-p">
                <h1>you'll love</h1>
              </div>
            </div>
            <div className="paragraph">
              <p>
                We believe you have a unique taste, discover the
                <br />
                endless possibilities of the ABverse
              </p>
            </div>
            <div className="btn-explore">
              <Link to="/explore">
                {" "}
                <button>Explore now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="scroll">
          <a href="#section2">
            <img src={SCROLL} />
          </a>
        </div>
      </div>

      <About />
      <Team />
    </div>
  );
}

export default Main;
