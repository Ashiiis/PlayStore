import React from "react";
import "./Footers.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-column">
          <h4>Google Play</h4>
          <ul>
            <li>Play Pass</li>
            <li>Play Points</li>
            <li>Gift cards</li>
            <li>Redeem</li>
            <li>Refund policy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Children and family</h4>
          <ul>
            <li>Parent guide</li>
            <li>Family sharing</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <span>Terms of Service</span>
          <span>Privacy</span>
          <span>About Google Play</span>
          <span>Developers</span>
          <span>Google Store</span>
          <span>All prices include GST.</span>
        </div>
        {/* <div className="footer-country">
          <span role="img" aria-label="India Flag">🇮🇳</span>
          <span>India (English (India))</span>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
