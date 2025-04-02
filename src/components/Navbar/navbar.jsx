import "./navbar.css";
import { Link} from "react-router-dom";

function Navbar() {  
  return (
    <div>
      <nav>
        <div className="menu">
          <a href="" className="logo">
            <img src="logo.png" alt="" />
          </a>

          <Link to="/">Home</Link>
          <Link to="/moneybag">MoneyBag Plans</Link>
          <Link to="about">About Us</Link>
        </div>
        <div className="signup-btn">
          <button>Sign In</button>
        </div>
      </nav>
   
    </div>
  );
}
export default Navbar;
