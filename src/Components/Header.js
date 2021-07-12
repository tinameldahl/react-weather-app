import React from "react";

import "./Styling/Header.css"

function Header() {
  return (
    <div className="Header">
      <div className="container">
        <p>
          <button className="current">Find my current location (not ready)</button>
        </p>
      </div>
    </div>
  );
}

export default Header;