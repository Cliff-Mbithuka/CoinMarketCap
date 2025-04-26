import CryptoDashboard from "./CryptoDashboard";
import CryptoNavbar from "./CryptoNavbar";
import CryptoTable from "./CryptoTable";
import NewsLetter from "./Newsletter";
import Pagination from "./Pagination";

function Body() {
    return (
      <div className="header-container">
       
        <CryptoDashboard/>
        <CryptoNavbar/>
        <CryptoTable/>
        <Pagination/>
        <NewsLetter/>
      </div>
    );
  }
  
  export default Body;