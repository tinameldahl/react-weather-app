import React from "react";

import "./Styling/Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <footer className="text-muted ">
        <p className="footer-text">
          <strong>Time updated:</strong>
          <span className="time-date"></span>{" "}
          <span classNAme="date-month">Time will show up here eventually</span>
          <br />
          <hr />
          <p className="footer-cred">
            My Weather React App 1.0 - a project by Tina Meldahl
            <br />
            <a
              href="https://github.com/tinameldahl/MyWeatherApp3.0"
              target="_blank"
              rel="noreferrer"
            >
              GitHub link
            </a>{" "}
            | Hosted on{" "}
            <a 
                href="https://www.netlify.com/" 
                target="_blank" rel="noreferrer"
            >
                Netlify
            </a>
          </p>
        </p>
      </footer>
    </div>
  );
}

export default Footer;