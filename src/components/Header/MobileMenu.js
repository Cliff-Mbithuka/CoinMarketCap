// NavigationMenu.jsx
import React, { useState } from 'react';
import './MobileMenu.css';
import { ChevronDown, DollarSign } from 'lucide-react';

const NavigationMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [themeMode, setThemeMode] = useState('system');

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleThemeChange = (theme) => {
    setThemeMode(theme);
  };

  return (
    <div className="mobile-navigation">
      <div className="navigation-content">
        <div className="nav-sections">
          <div className="nav-item" onClick={() => toggleDropdown('cryptocurrencies')}>
            <span>Cryptocurrencies</span>
            <ChevronDown className={activeDropdown === 'cryptocurrencies' ? 'rotated' : ''} />
          </div>
          
          <div className="nav-item" onClick={() => toggleDropdown('dexscan')}>
            <span>DexScan</span>
            <ChevronDown className={activeDropdown === 'dexscan' ? 'rotated' : ''} />
          </div>
          
          <div className="nav-item" onClick={() => toggleDropdown('exchanges')}>
            <span>Exchanges</span>
            <ChevronDown className={activeDropdown === 'exchanges' ? 'rotated' : ''} />
          </div>
          
          <div className="nav-item" onClick={() => toggleDropdown('community')}>
            <span>Community</span>
            <ChevronDown className={activeDropdown === 'community' ? 'rotated' : ''} />
          </div>
          
          <div className="nav-item" onClick={() => toggleDropdown('products')}>
            <span>Products</span>
            <ChevronDown className={activeDropdown === 'products' ? 'rotated' : ''} />
          </div>
        </div>
        
        <div className="auth-buttons">
          <button className="btn btn-primary">Create an account</button>
          <button className="btn btn-secondary">Log in</button>
        </div>
        
        <div className="preference-controls">
          <div className="language-selector">
            <span>English</span>
            <ChevronDown />
          </div>
          
          <div className="currency-selector">
            <DollarSign size={18} />
            <span>USD</span>
            <ChevronDown />
          </div>
        </div>
        
        <div className="theme-selector">
          <button 
            className={`theme-btn ${themeMode === 'light' ? 'active' : ''}`}
            onClick={() => handleThemeChange('light')}
          >
            Light
          </button>
          
          <button 
            className={`theme-btn ${themeMode === 'dark' ? 'active' : ''}`}
            onClick={() => handleThemeChange('dark')}
          >
            Dark
          </button>
          
          <button 
            className={`theme-btn ${themeMode === 'system' ? 'active' : ''}`}
            onClick={() => handleThemeChange('system')}
          >
            System
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;