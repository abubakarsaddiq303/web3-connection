import React, { useEffect, useState } from "react";
import "./Explore.css";
import abi from "../../newABI.json";
import address from "../../address";
import loader from "../assets/loader2.gif";

function Explore({ nfts, loading }) {
  console.log("explore", nfts);
  const [nft, getnft] = useState(nfts);

  useEffect(() => {
    getnft(nfts);
  }, [nfts, localStorage.getItem("currentAccount")]);

  return (
    <div className="explore">
      {nft.length !== 0 ? (
        nft.map((nt, id) => {
          return (
            <div className="card" key={id}>
              <div className="card-item">
                <div className="name">
                  <div className="fName">{nt.fName}</div>
                  <div className="lName">{nt.lName}</div>
                </div>

                <div className="Id">ID:{nt.id}</div>
              </div>
            </div>
          );
        })
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <img src={loader} />
        </div>
      )}
    </div>
  );
}

export default Explore;
