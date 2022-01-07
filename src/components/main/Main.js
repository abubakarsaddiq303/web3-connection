// import React, { useState } from "react";
// import "./Main.css";

function Main(props) {
  // const [Address, setAddress] = useState("");
  // const [Amount, setAmount] = useState(0);

  return (
    <div className="main">
      {/* <div className="body">
        {props.isConnected ? (
          <>
            <div className="balance">
              <h2>
                Balance: <p>{props.balance}</p>
              </h2>
            </div>
            <div>
              <p>Address</p>
              <input
                type="text"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              ></input>
              <br />
              <p>Amount</p>
              <input
                type="text"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              ></input>
            </div>
            <div className="btn-send">
              <button
                onClick={() => {
                  if (Address.length > 0 && Amount < props.balance)
                    props.transfer(Address, Amount);
                }}
              >
                Send
              </button>
            </div>{" "}
          </>
        ) : (
          <p> Connect Wallet</p>
        )}
      </div> */}
    </div>
  );
}

export default Main;
