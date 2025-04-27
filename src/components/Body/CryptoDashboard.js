import React, { useState, useEffect } from "react";
import "./CryptoDashboard.css";
import Satoshi from '../../assets/images/satoshi.png';
import CryptoNews from '../../assets/images/cryptonews.png';
import Laptop from '../../assets/images/laptop.png';

const CryptoDashboard = () => {
  const [cryptoData, setCryptoData] = useState({
    marketCap: "$2.96T",
    marketCapChange: "+0.25%",
    cmc100: "$180.21",
    cmc100Change: "-0.23%",
    fearGreedIndex: 53,
    fearGreedLabel: "Neutral",
    altcoinSeason: 14,
    trendingCoins: [
      {
        id: 1,
        symbol: "BONK",
        price: "$0.00001831",
        change: "+14.60%",
        icon: "🐕",
        chartType: "up",
      },
      {
        id: 2,
        symbol: "BTC",
        price: "$94,135.96",
        change: "-0.03%",
        icon: "₿",
        chartType: "down",
      },
      {
        id: 3,
        symbol: "ETH",
        price: "$1,792.47",
        change: "+0.55%",
        icon: "Ξ",
        chartType: "up",
      },
      {
        id: 4,
        symbol: "VIRTUAL",
        price: "$1.04",
        change: "+16.54%",
        icon: "◊",
        chartType: "up",
      },
      {
        id: 5,
        symbol: "WLD",
        price: "$1.13",
        change: "+14.43%",
        icon: "⊙",
        chartType: "up",
      },
    ],
    dexTrending: [
      {
        id: 1,
        symbol: "TRUMP",
        pair: "/USDC",
        price: "$15.55",
        change: "+17.33%",
        icon: "🦅",
      },
      {
        id: 2,
        symbol: "Fartcoin",
        pair: "/SOL",
        price: "$1",
        change: "-8.94%",
        icon: "💨",
      },
      {
        id: 3,
        symbol: "LetsBONK",
        pair: "/SOL",
        price: "$0.2593",
        change: "+9999%+",
        icon: "🔥",
      },
      {
        id: 4,
        symbol: "POPCAT",
        pair: "/SOL",
        price: "$0.3834",
        change: "-7.11%",
        icon: "🐱",
      },
      {
        id: 5,
        symbol: "USDT",
        pair: "/USDC",
        price: "$1",
        change: "+0.39%",
        icon: "💵",
      },
      {
        id: 6,
        symbol: "LetsBONK",
        pair: "/SOL",
        price: "$0.2593",
        change: "+9999%+",
        icon: "🔥",
      },
    ],
  });

  return (
    <div className="crypto-dashboard">
      <div className="title">
        <h2>Today's Cryptocurrency Prices by Market Cap</h2>
        <p>
          The global crypto market cap is <b>$2.96T</b>, a{" "}
          <span className="green">▲ 0.66%</span> increase over the last day. <u>Read
          More</u>
        </p>
      </div>
      <div className="dashboard-row">
        {/* Trending Coins */}
        <div className="dashboard-card coin-card">
          <div className="card-header">
            <h2>
              Trending Coins <span className="arrow">›</span>
            </h2>
            <div className="header-icons">
              <span className="icon-circle">🔥</span>
              <span className="icon-circle">⏱️</span>
              <span className="icon-circle">👁️</span>
            </div>
          </div>

          <div className="coin-list">
            {cryptoData.trendingCoins.map((coin) => (
              <div key={coin.id} className="coin-item">
                <div className="coin-rank">{coin.id}</div>
                <div className="coin-icon-container">
                  <div className="coin-icon">{coin.icon}</div>
                </div>
                <div className="coin-symbol">{coin.symbol}</div>
                <div className="coin-price">{coin.price}</div>
                <div
                  className={`coin-change ${
                    coin.change.startsWith("+") ? "green" : "red"
                  }`}
                >
                  {coin.change}
                </div>
                <div className={`coin-chart ${coin.chartType}`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending on DexScan */}
        <div className="dashboard-card coin-card">
          <div className="card-header">
            <h2>
              Trending on DexScan <span className="arrow">›</span>
            </h2>
            <div className="header-icons">
              <span className="icon-circle">⚙️</span>
              <span className="icon-circle">🎯</span>
              <span className="icon-circle">🏆</span>
            </div>
          </div>

          <div className="coin-list">
            {cryptoData.dexTrending.map((coin) => (
              <div key={coin.id} className="coin-item">
                <div className="coin-rank">{coin.id}</div>
                <div className="coin-icon-container">
                  <div className="coin-icon">{coin.icon}</div>
                </div>
                <div className="coin-symbol">
                  {coin.symbol}
                  <span className="coin-pair">{coin.pair}</span>
                </div>
                <div className="coin-price">{coin.price}</div>
                <div
                  className={`coin-change ${
                    coin.change.startsWith("+") ? "green" : "red"
                  }`}
                >
                  {coin.change}
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="stats-container">
          {/* Market Cap */}
          <div className="dashboard-card stat-card">
            <div className="card-header">
              <h2>
                Market Cap <span className="arrow">›</span>
              </h2>
            </div>
            <div className="stat-content">
              <div className="stat-value">{cryptoData.marketCap}</div>
              <div
                className={`stat-change ${
                  cryptoData.marketCapChange.startsWith("+") ? "green" : "red"
                }`}
              >
                {cryptoData.marketCapChange}
              </div>
              <div className="stat-chart green-chart"></div>
            </div>
          </div>

          {/* CMC100 */}
          <div className="dashboard-card stat-card">
            <div className="card-header">
              <h2>
                CMC100 <span className="arrow">›</span>
              </h2>
            </div>
            <div className="stat-content">
              <div className="stat-value">{cryptoData.cmc100}</div>
              <div
                className={`stat-change ${
                  cryptoData.cmc100Change.startsWith("+") ? "green" : "red"
                }`}
              >
                {cryptoData.cmc100Change}
              </div>
              <div className="stat-chart red-chart"></div>
            </div>
          </div>

          {/* Fear & Greed */}
          <div className="dashboard-card stat-card">
            <div className="card-header">
              <h2>
                Fear & Greed <span className="arrow">›</span>
              </h2>
            </div>
            <div className="fear-greed-content">
              <div className="fear-greed-value">
                {cryptoData.fearGreedIndex}
              </div>
              <div className="fear-greed-label">
                {cryptoData.fearGreedLabel}
              </div>
              <div className="fear-greed-meter">
                <div
                  className="fear-greed-indicator"
                  style={{ left: `${cryptoData.fearGreedIndex}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Altcoin Season */}
          <div className="dashboard-card stat-card">
            <div className="card-header">
              <h2>
                Altcoin Season <span className="arrow">›</span>
              </h2>
            </div>
            <div className="altcoin-content">
              <div className="altcoin-value">
                {cryptoData.altcoinSeason}
                <span className="altcoin-total">/100</span>
              </div>
              <div className="coin-labels">
                <div className="bitcoin-label">Bitcoin</div>
                <div className="altcoin-label">Altcoin</div>
              </div>
              <div className="altcoin-meter">
                <div className="altcoin-dot"></div>
                <div className="altcoin-progress-bar">
                  <div
                    className="altcoin-progress"
                    style={{ width: `${cryptoData.altcoinSeason}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Feed */}

        <div className="news-section">
          {/* First News Item */}
          <div className="news-card first">
            <div className="news-header">
              <img
                src={Satoshi}
                alt="Satoshi_Club"
                className="news-logo"
              />
              <div className="news-header-info">
                <span className="news-name">Satoshi_Club</span>
                <span className="news-time">· Apr 25</span>
              </div>
            </div>
            <div className="news-content">
              <p>AI-themed memecoins are pumping.</p>
              <p>...</p>
            </div>
            <div className="news-stats">
              <span>💬 14</span>
              <span>🔄 0</span>
              <span>❤️ 11</span>
            </div>
          </div>

          {/* Second News Item */}
          <div className="news-card">
            <div className="news-header">
              <img src={CryptoNews} alt="crypto.news" className="news-logo" />
              <div className="news-header-info">
                <span className="news-name">crypto.news</span>
                <span className="news-time">· 23h</span>
              </div>
            </div>
            <div className="news-content-row">
              <img src={Laptop} alt="News" className="news-main-image" />
              <p>
                Ondo Finance reclaims $3B market cap as SEC opens tokenization
                talks
              </p>
            </div>
          </div>
        </div>
      </div>


</div>
  );
};

export default CryptoDashboard;
