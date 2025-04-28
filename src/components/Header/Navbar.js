
// import React, { useState } from "react";
// import "./Navbar.css";
// import logoImage from "../../assets/images/logoimage.png";
// // import Mobile from "./MobileMenu";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };
//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <div className="navbar">
//       <div className="navbar__logo">
//         <img src={logoImage} alt="Logo" />
//         <span>CoinMarketCap</span>
//       </div>

//       <div className="navbar__menu-icon" onClick={toggleMenu}>
//         &#9776;
//       </div>

//       {/* {menuOpen && <Mobile closeMenu={closeMenu} />} */}

//       <div className={`navbar__menu-items ${menuOpen ? "open" : ""}`}>
//         <div className="navbar__links">
//           <a href="/">Cryptocurrencies</a>
//           <a href="/">DexScan</a>
//           <a href="/">Exchanges</a>
//           <a href="/">Community</a>
//           <a href="/">Product</a>
//         </div>

//         <div className="navbar__actions">
//           <a href="/">🍥 Portfolio</a>
//           <a href="/">⭐ Watchlist</a>
//           <input type="text" placeholder="Search" className="navbar__search" />
//           <button className="navbar__login">Log In</button>
//           <div className="profile-icon">👤</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import "./Navbar.css";
import logoImage from "../../assets/images/logoimage.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [currentTheme, setCurrentTheme] = useState("system");
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  const setTheme = (theme) => {
    setCurrentTheme(theme);
  };

  const sections = [
    { id: 'cryptocurrencies', title: 'Cryptocurrencies' },
    { id: 'dexscan', title: 'DexScan' },
    { id: 'exchanges', title: 'Exchanges' },
    { id: 'community', title: 'Community' },
    { id: 'products', title: 'Products' },
  ];

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logoImage} alt="Logo" />
        <span>CoinMarketCap</span>
      </div>
      
      <div className="navbar__menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      
      {/* Desktop menu */}
      <div className={`navbar__menu-items ${menuOpen ? "open" : ""}`}>
        <div className="navbar__links desktop-menu">
          <a href="/">Cryptocurrencies</a>
          <a href="/">DexScan</a>
          <a href="/">Exchanges</a>
          <a href="/">Community</a>
          <a href="/">Product</a>
        </div>
        <div className="navbar__actions desktop-menu">
          <a href="/">🍥 Portfolio</a>
          <a href="/">⭐ Watchlist</a>
          <input type="text" placeholder="Search" className="navbar__search" />
          <button className="navbar__login">Log In</button>
          <div className="profile-icon">👤</div>
        </div>
        
        {/* Mobile menu (styled like the image) */}
        <div className="mobile-menu">
          {sections.map((section) => (
            <div key={section.id} className="mobile-section">
              <button 
                onClick={() => toggleSection(section.id)}
                className="mobile-section-button"
              >
                {section.title}
                <span className={`chevron ${activeSection === section.id ? 'rotate' : ''}`}>▼</span>
              </button>
              {/* Dropdown content would go here */}
            </div>
          ))}
          
          <div className="mobile-buttons">
            <button className="create-account-button">
              Create an account
            </button>
            
            <button className="login-button">
              Log in
            </button>
            
            <div className="mobile-options">
              <div className="language-selector">
                <button className="selector-button">
                  English <span className="chevron-small">▼</span>
                </button>
              </div>
              
              <div className="currency-selector">
                <button className="selector-button">
                  <span className="dollar-sign">$</span> USD <span className="chevron-small">▼</span>
                </button>
              </div>
            </div>
            
            <div className="theme-options">
              <button 
                className={`theme-button ${currentTheme === 'light' ? 'active' : ''}`}
                onClick={() => setTheme('light')}
              >
                Light
              </button>
              <button 
                className={`theme-button ${currentTheme === 'dark' ? 'active' : ''}`}
                onClick={() => setTheme('dark')}
              >
                Dark
              </button>
              <button 
                className={`theme-button ${currentTheme === 'system' ? 'active' : ''}`}
                onClick={() => setTheme('system')}
              >
                System
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;