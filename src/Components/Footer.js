import React from "react";
import LiveClock from "./LiveClock";

import "./Styling/Footer.css";
import "./Styling/Header.css"


function Footer() {
  return (

    <div className="Footer">
      <div className="container">
        <p className="timestamp-footer">
          <LiveClock />

        </p>
        <hr />
        <p className="footer-credit">
          My Weather React App 1.0 - a project by Tina Meldahl
          <br />
          GitHub - Hosted on
        </p>
      </div>
    </div>
  );
}

export default Footer;