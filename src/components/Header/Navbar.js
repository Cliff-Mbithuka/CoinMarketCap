// import React from "react";
// import "./Navbar.css";
// import logoImage from '../../assets/images/logoimage.png';

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="navbar__logo">
//         <img src={logoImage} alt="Logo" />{" "}
//         <span>CoinMarketCap</span>
//         <div className="navbar__links">
//           <a href="/">Cryptocurrencies</a>
//           <a href="/">DexScan</a>
//           <a href="/">Exchanges</a>
//           <a href="/">Community</a>
//           <a href="/">Product</a>
//         </div>
//       </div>

//       <div className="navbar__actions">
//         <a href="/">🍥 Portfolio</a>
//         <a href="/">⭐ Watchlist</a>
//         <input type="text" placeholder="Search" className="navbar__search" />
//         <button className="navbar__login">Log In</button>
//         <div className="navbar__menu">
//           <div className="menu-icon">&#9776;</div> 
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logoImage} alt="Logo" />
        <span>CoinMarketCap</span>
      </div>

      <div className="navbar__menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>

      <div className={`navbar__menu-items ${menuOpen ? "open" : ""}`}>
        <div className="navbar__links">
          <a href="/">Cryptocurrencies</a>
          <a href="/">DexScan</a>
          <a href="/">Exchanges</a>
          <a href="/">Community</a>
          <a href="/">Product</a>
        </div>

        <div className="navbar__actions">
          <a href="/">🍥 Portfolio</a>
          <a href="/">⭐ Watchlist</a>
          <input type="text" placeholder="Search" className="navbar__search" />
          <button className="navbar__login">Log In</button>
          <div className="profile-icon">👤</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
