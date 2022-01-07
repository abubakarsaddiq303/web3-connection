import { useState } from "react";
import Popup from "../popup/Popup";
import { useLocation } from "react-router-dom";
// import "./Navbar.css";

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

  return (
    <div className="navbar">
      <div className="logo">
        <h1>Web3 Connection</h1>
      </div>
      <div className="buttons">
        <div className="btn-create">
          <button
            onClick={() => {
              setOpenPopup(true);
            }}
          >
            Create
          </button>
        </div>
        <div className="btn-connct">
          {!props.isConnected ? (
            <button onClick={onLoginHandler}>Connect</button>
          ) : (
            <button onClick={props.onLogout}>Disconnect</button>
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
