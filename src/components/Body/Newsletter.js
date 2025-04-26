
import React, { useState } from 'react';
import './Newsletter.css';
import Bitcoin from '../../assets/images/coins-of-various-cryptocurrencies.webp';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <h2>Stay on top of crypto. All the time, any time.</h2>
          <p>
            Please keep me updated by email with the latest crypto news, research findings, reward <br/>
            programs, event updates, coin listings and more information from CoinMarketCap.
          </p>
          
          <form onSubmit={handleSubmit} className="subscription-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your e-mail address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        
        <div className="newsletter-illustration">
         <img src={Bitcoin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;