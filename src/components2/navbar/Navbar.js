import React, { useState } from "react";
import "./Navbar2.css";
import Popup from "../popup/Popup";
import { Link, useLocation } from "react-router-dom";

function Navbar(props) {
  const detectProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      window.alert("No Ethereum browser detected check out MetaMask");
    }
    return provider;
  };

  const onLoginHandler = async () => {
    const provider = detectProvider();
    if (provider) {
      if (provider !== window.ethereum) {
        console.error(
          "Not window.ethereum provider. Do you have multiple wallets  installed?"
        );
      }

      await provider.request({
        method: "eth_requestAccounts",
      });

      props.onLogin(provider);
    }
  };

  const [openPopup, setOpenPopup] = useState(false);
  const location = useLocation();
  console.log("location", location);
  const mylocation = location.pathname.split("/");
  console.log("location", mylocation);
  return (
    <div className="navbar2" id="section1">
      <div className="title">
        <a href="/">
          <h1>ABverse</h1>
        </a>
      </div>
      <div className="nav-item">
        {mylocation[1] === "explore" &&
        localStorage.getItem("currentAccount") ? (
          <div className="Create">
            <p
              onClick={() => {
                setOpenPopup(true);
              }}
            >
              Create
            </p>
          </div>
        ) : null}
        <div className="Connect">
          {!props.isConnected ? (
            <p onClick={onLoginHandler}>Connect</p>
          ) : (
            <p onClick={props.onLogout}>Disconnect</p>
          )}
        </div>
      </div>
      {openPopup && (
        <Popup closePopup={setOpenPopup} transfer={props.transfer} />
      )}
    </div>
  );
}

export default Navbar;
