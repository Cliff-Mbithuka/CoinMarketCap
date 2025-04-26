import React from "react";
import "./CryptoNavbar.css";
function CryptoNavbar() {
  return (
    <>
      <div className="crypto-navbar">
        <div className="crypto-top">
          <div className="crypto-links">
            <a href="/">All Crypto</a>
            <a href="/">NFTs</a>
            <a href="/">Categories</a>
            <a href="/">Token unlocks</a>
            <a href="/">♻️ Rehypo</a>
            <a href="/">🔥 Binance Alpha</a>
            <a href="/">🔥 Memes</a>
            <a href="/">🔥 SOL</a>
            <a href="/">🔥 BNB</a>
            <a href="/">🔥 USA</a>
            <a href="/">🔥 AI</a>
            <a href="/">🔥 RWA</a>
            <a href="/">🔥 Gaming</a>
            <a href="/">🔥DePIN</a>
            <a href="/">🔥DeFAI</a>
            <a href="/">🔥 AI Agents</a>
          </div>
        </div>

        <div className="crypto-bottom">
          <div className="crypto-left">
            <div className="top-active">
              <p className="active">Coins</p>
              <p>DexScan</p>
            </div>
            <p className="top">Top</p>
            <p>🔥 Trending</p>
            <p>New</p>
            <p>📈 Gainers</p>
            <p>👁️ Most Visited</p>
          </div>
          <div className="crypto-right">
            <p>Filters</p>
            <p>Columns</p>
            <p>Show 100 ▼</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CryptoNavbar;
