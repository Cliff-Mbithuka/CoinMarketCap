import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__left">
        <span>Cryptos: <b>14.4M</b></span>
        <span>Exchanges: <b>808</b></span>
        <span>Market Cap: <b>$2.96T</b> <span className="green">▲ 0.66%</span></span>
        <span>24h Vol: <b>$99.09B</b> <span className="green">▲ 8.08%</span></span>
        <span>Dominance: <b>BTC: 63.2% ETH: 7.4%</b></span>
        <span>ETH Gas: <b>0.73 Gwei</b></span>
        <span>Fear & Greed: <b>53/100</b></span>
      </div>

      <div className="topbar__right">
        <button className="topbar__button">Get listed ▼</button>
        <button className="topbar__button">API</button>
      </div>
    </div>
  );
};

export default Topbar;
