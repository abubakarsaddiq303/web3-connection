import React, { useState } from "react";
import "./Popup.css";

function Popup({ closePopup, transfer }) {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Id, setId] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="popup">
      <div className="popupcontainer"></div>
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
          placeholder="First Name"
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        ></input>
        <br />
        <input
          className="lastName"
          placeholder="Last Name "
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        ></input>
        <br />
        <input
          className="id"
          placeholder="Id"
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></input>

        <div className="submit">
          <button
            onClick={() => {
              transfer(Firstname, Lastname, Id);
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Popup;
