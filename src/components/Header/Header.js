import './Header.css';
import Navbar from './Navbar';
import Topbar from './Topbar';

function Header() {
  return (
    <div className="header-container">
      <Navbar />
      <Topbar />
    </div>
  );
}

export default Header;
