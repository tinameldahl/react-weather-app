import React from "react";

import "./Styling/Footer.css";
import "./Styling/Header.css"


function Footer() {
  return (
  
      <div className="Footer">
        <div class="container">
        <p className="timestamp-footer">
          Current time will be added here
        </p>
        <hr/>
        <p className="footer-credit">
          My Weather React App 1.0 - a project by Tina Meldahl
          <br/>
          GitHub - Hosted on
        </p>
      </div>
      </div>
    );
}

export default Footer;