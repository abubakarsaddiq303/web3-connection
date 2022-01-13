import React, { useState } from "react";
import "./Popup2.css";

function Popup({ closePopup, transfer }) {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Id, setId] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    closePopup(false);
    transfer(Firstname, Lastname, Id);
  };

  return (
    <div className="popup-bg">
      <div className="popup">
        <div className="btn-close">
          <p
            onClick={() => {
              closePopup(false);
            }}
          >
            X
          </p>
        </div>
        <div className="tittle">
          <h3>Create</h3>
        </div>
        <form className="form" onSubmit={onSubmit}>
          <input
            className="firstName"
            placeholder="Firstname..."
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          ></input>
          <br />
          <input
            className="lastName"
            placeholder="Lastname... "
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          ></input>
          <br />
          <input
            className="id"
            placeholder="id..."
            onChange={(e) => {
              setId(e.target.value);
            }}
          ></input>

          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Popup;
