
import React from "react";
import "./Footer.css";
// import appStore from './assets/app-store.png';
// import googlePlay from './assets/google-play.png';
// import qrCode from './assets/qr-code.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <div className="profile">
              <img src="/logo192.png" alt="CoinMarketCap" />
              <span>CoinMarketCap</span>
            </div>
            <div className="currency">
              <p>English</p>
              <p>USD</p>
            </div>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h3>Products</h3>
              <ul>
                <li>
                  <a href="/">Academy</a>
                </li>
                <li>
                  <a href="/">Advertise</a>
                </li>
                <li>
                  <a href="/">CMC Labs</a>
                </li>
                <li>
                  <a href="/">Bitcoin ETFs</a>
                </li>
                <li>
                  <a href="/">Crypto API</a>
                </li>
                <li>
                  <a href="/">DexScan</a>
                </li>
                <li>
                  <a href="/">Global Charts</a>
                </li>
                <li>
                  <a href="/">NFT</a>
                </li>
                <li>
                  <a href="/">Portfolio</a>
                </li>
                <li>
                  <a href="/">Watchlist</a>
                </li>
                <li>
                  <a href="/">Doodles</a>
                </li>
                <li>
                  <a href="/">Sitemap</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="/">About us</a>
                </li>
                <li>
                  <a href="/">Terms of use</a>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Cookie preferences</a>
                </li>
                <li>
                  <a href="/">Cookie policy</a>
                </li>
                <li>
                  <a href="/">Community Rules</a>
                </li>
                <li>
                  <a href="/">Disclaimer</a>
                </li>
                <li>
                  <a href="/">Methodology</a>
                </li>
                <li>
                  <a href="/">
                    Careers <span className="hiring-badge">We're hiring!</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Support</h3>
              <ul>
                <li>
                  <a href="/">Get Listed</a>
                </li>
                <li>
                  <a href="/">Request Form</a>
                </li>
                <li>
                  <a href="/">Contact Support</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
                <li>
                  <a href="/">Glossary</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Socials</h3>
              <ul>
                <li>
                  <a href="/">X (Twitter)</a>
                </li>
                <li>
                  <a href="/">Community</a>
                </li>
                <li>
                  <a href="/">Telegram</a>
                </li>
                <li>
                  <a href="/">Instagram</a>
                </li>
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Reddit</a>
                </li>
                <li>
                  <a href="/">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            © 2025 CoinMarketCap. All rights reserved
          </div>
          <div className="app-downloads">
            <a href="/" className="app-link">
              <img src="/logo192.png" alt="App Store" />
            </a>
            <a href="/" className="app-link">
              <img src="/logo192.png" alt="Google Play" />
            </a>
            <a href="/" className="app-link">
              <img src="/logo192.png" alt="QR Code" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
