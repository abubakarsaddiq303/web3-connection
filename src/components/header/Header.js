import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="card">
        <div className="card-item">
          <div className="fName">FirstName:</div>
          <div className="lName">LastName :</div>
          <div className="Id">ID:</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
