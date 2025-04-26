
import React, { useState } from "react";
import "./CryptoTable.css";

export default function CryptoTable() {
  const [cryptoData] = useState([
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      logo: "₿",
      price: "$94,418.13",
      change1h: 0.15,
      change24h: -0.76,
      change7d: 10.83,
      marketCap: "$1,874,811,880,364",
      volume24h: "$22,633,991,479",
      volume24hToken: "239.95K BTC",
      circulatingSupply: "19.85M BTC",
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      logo: "Ξ",
      price: "$1,802.46",
      change1h: 0.36,
      change24h: -0.37,
      change7d: 12.24,
      marketCap: "$217,593,511,651",
      volume24h: "$13,442,940,787",
      volume24hToken: "7.44M ETH",
      circulatingSupply: "120.72M ETH",
    },
    {
      id: 3,
      name: "Tether",
      symbol: "USDT",
      logo: "₮",
      price: "$1.00",
      change1h: 0.01,
      change24h: -0.03,
      change7d: 0.06,
      marketCap: "$147,192,382,678",
      volume24h: "$58,812,302,613",
      volume24hToken: "58.78B USDT",
      circulatingSupply: "147.12B USDT",
    },
    {
      id: 4,
      name: "XRP",
      symbol: "XRP",
      logo: "✕",
      price: "$2.20",
      change1h: 0.35,
      change24h: -0.11,
      change7d: 5.95,
      marketCap: "$128,561,412,594",
      volume24h: "$2,796,994,081",
      volume24hToken: "1.26B XRP",
      circulatingSupply: "58.39B XRP",
    },
    {
      id: 5,
      name: "BNB",
      symbol: "BNB",
      logo: "⭕",
      price: "$608.53",
      change1h: 0.52,
      change24h: 0.46,
      change7d: 3.20,
      marketCap: "$85,736,365,323",
      volume24h: "$1,556,472,502",
      volume24hToken: "2.58M BNB",
      circulatingSupply: "140.89M BNB",
    },
    {
      id: 6,
      name: "Solana",
      symbol: "SOL",
      logo: "≡",
      price: "$149.47",
      change1h: 0.54,
      change24h: -2.32,
      change7d: 7.57,
      marketCap: "$77,341,289,063",
      volume24h: "$2,828,748,281",
      volume24hToken: "18.80M SOL",
      circulatingSupply: "517.43M SOL",
    },
    {
      id: 7,
      name: "USDC",
      symbol: "USDC",
      logo: "©",
      price: "$1.00",
      change1h: 0.00,
      change24h: 0.01,
      change7d: -0.01,
      marketCap: "$62,354,963,196",
      volume24h: "$9,229,668,558",
      volume24hToken: "9.22B USDC",
      circulatingSupply: "62.35B USDC",
    },
    {
      id: 8,
      name: "Dogecoin",
      symbol: "DOGE",
      logo: "Ð",
      price: "$0.1828",
      change1h: 0.48,
      change24h: -0.03,
      change7d: 15.90,
      marketCap: "$27,243,634,387",
      volume24h: "$1,632,459,002",
      volume24hToken: "8.90B DOGE",
      circulatingSupply: "149.01B DOGE",
    },
    {
      id: 9,
      name: "Cardano",
      symbol: "ADA",
      logo: "◎",
      price: "$0.7105",
      change1h: 0.26,
      change24h: -1.40,
      change7d: 14.14,
      marketCap: "$25,082,430,648",
      volume24h: "$847,200,279",
      volume24hToken: "1.17B ADA",
      circulatingSupply: "35.29B ADA",
    },
  ]);

  const renderChangePercentage = (value) => {
    let className = "neutral-change";
    let prefix = "";
    
    if (value > 0) {
      className = "positive-change";
      prefix = "▲ ";
    } else if (value < 0) {
      className = "negative-change";
      prefix = "▼ ";
    }
    
    return (
      <div className={className}>
        {prefix}{Math.abs(value).toFixed(2)}%
      </div>
    );
  };

  return (
    <div className="crypto-table-container">
      {/* Header Row */}
      <div className="table-header">
        <div className="header-cell">#</div>
        <div className="header-cell">Name</div>
        <div className="header-cell">Price</div>
        <div className="header-cell">1h %</div>
        <div className="header-cell">24h %</div>
        <div className="header-cell">7d %</div>
        <div className="header-cell">
          Market Cap
          <span className="info-icon">ⓘ</span>
        </div>
        <div className="header-cell">
          Volume(24h)
          <span className="info-icon">ⓘ</span>
        </div>
        <div className="header-cell">
          Circulating Supply
          <span className="info-icon">ⓘ</span>
        </div>
        <div className="header-cell">Last 7 Days</div>
      </div>

      {/* Data Rows */}
      {cryptoData.map((crypto) => (
        <div key={crypto.id} className="crypto-row">
          <div className="data-cell id-cell">
          <button className="star-button">☆</button>
            {crypto.id}
          </div>
          <div className="data-cell name-cell">
            <div className={`crypto-logo logo-${crypto.id}`}>
              {crypto.logo}
            </div>
            <div className="crypto-info">
              <div className="crypto-name">{crypto.name}</div>
              <div className="crypto-symbol">{crypto.symbol}</div>
            </div>
            <button className="buy-button">Buy</button>
          </div>
          <div className="data-cell">{crypto.price}</div>
          <div className="data-cell">{renderChangePercentage(crypto.change1h)}</div>
          <div className="data-cell">{renderChangePercentage(crypto.change24h)}</div>
          <div className="data-cell">{renderChangePercentage(crypto.change7d)}</div>
          <div className="data-cell">{crypto.marketCap}</div>
          <div className="data-cell">
            <div className="volume-info">
              {crypto.volume24h}
              <span className="volume-token">{crypto.volume24hToken}</span>
            </div>
          </div>
          <div className="data-cell">{crypto.circulatingSupply}</div>
          <div className="data-cell">
            <div className="price-chart">
              {/* Placeholder for chart */}
              <svg width="150" height="50" viewBox="0 0 150 50">
                <path
                  d={crypto.change7d > 0 
                    ? "M0,35 C15,32 30,28 45,25 C60,22 75,15 90,10 C105,5 120,2 150,0" 
                    : "M0,15 C15,18 30,22 45,25 C60,28 75,35 90,40 C105,45 120,48 150,50"}
                  fill="none"
                  stroke={crypto.change7d > 0 ? "#16c784" : "#ea3943"}
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}