import React, { useState } from "react";
import "./MobileMenu.css";

const MobileMenu = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [theme, setTheme] = useState("system");

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="mobile-menu">
      {/* Menu sections with dropdowns */}
      <div className="menu-section">
        <div 
          className="section-header" 
          onClick={() => toggleSection("cryptocurrencies")}
        >
          <span>Cryptocurrencies</span>
          <span className={`dropdown-arrow ${expandedSection === "cryptocurrencies" ? "expanded" : ""}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>
        {expandedSection === "cryptocurrencies" && (
          <div className="dropdown-content">
            {/* Content for cryptocurrencies */}
            <a href="#">Ranking</a>
            <a href="#">Recently Added</a>
            <a href="#">Categories</a>
            <a href="#">Spotlight</a>
          </div>
        )}
      </div>

      <div className="menu-section">
        <div 
          className="section-header" 
          onClick={() => toggleSection("dexscan")}
        >
          <span>DexScan</span>
          <span className={`dropdown-arrow ${expandedSection === "dexscan" ? "expanded" : ""}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>
        {expandedSection === "dexscan" && (
          <div className="dropdown-content">
            {/* Content for DexScan */}
            <a href="#">Pairs</a>
            <a href="#">Tokens</a>
            <a href="#">DEXes</a>
          </div>
        )}
      </div>

      <div className="menu-section">
        <div 
          className="section-header" 
          onClick={() => toggleSection("exchanges")}
        >
          <span>Exchanges</span>
          <span className={`dropdown-arrow ${expandedSection === "exchanges" ? "expanded" : ""}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>
        {expandedSection === "exchanges" && (
          <div className="dropdown-content">
            {/* Content for Exchanges */}
            <a href="#">Spot</a>
            <a href="#">Derivatives</a>
            <a href="#">DEX</a>
          </div>
        )}
      </div>

      <div className="menu-section">
        <div 
          className="section-header" 
          onClick={() => toggleSection("community")}
        >
          <span>Community</span>
          <span className={`dropdown-arrow ${expandedSection === "community" ? "expanded" : ""}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>
        {expandedSection === "community" && (
          <div className="dropdown-content">
            {/* Content for Community */}
            <a href="#">Articles</a>
            <a href="#">Reports</a>
            <a href="#">Events</a>
          </div>
        )}
      </div>

      <div className="menu-section">
        <div 
          className="section-header" 
          onClick={() => toggleSection("products")}
        >
          <span>Products</span>
          <span className={`dropdown-arrow ${expandedSection === "products" ? "expanded" : ""}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>
        {expandedSection === "products" && (
          <div className="dropdown-content">
            {/* Content for Products */}
            <a href="#">Convert</a>
            <a href="#">API</a>
            <a href="#">Price Alerts</a>
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="action-buttons">
        <button className="create-account-btn">Create an account</button>
        <button className="login-btn">Log in</button>
      </div>

      {/* Settings section */}
      <div className="settings-section">
        <div className="language-selector">
          <button>
            English <span className="dropdown-icon">▼</span>
          </button>
        </div>
        
        <div className="currency-selector">
          <button>
            <span className="currency-symbol">$</span> USD <span className="dropdown-icon">▼</span>
          </button>
        </div>
      </div>

      {/* Theme selector */}
      <div className="theme-selector">
        <button 
          className={theme === "light" ? "active" : ""}
          onClick={() => setTheme("light")}
        >
          Light
        </button>
        <button 
          className={theme === "dark" ? "active" : ""}
          onClick={() => setTheme("dark")}
        >
          Dark
        </button>
        <button 
          className={theme === "system" ? "active" : ""}
          onClick={() => setTheme("system")}
        >
          System
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;