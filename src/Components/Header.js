import React from "react";

import "./Styling/Header.css"

function Header() {
  return (
    <div className="Header">
      <p>
        <button className="current">Find my current location (not ready)</button>
      </p>
    </div>
  );
}

export default Header;