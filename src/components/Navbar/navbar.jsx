import "./navbar.css";
import { Link} from "react-router-dom";

function Navbar() {  
  return (
    <div>
      <nav>
        <div className="menu flex items-center m-8 ">
          <a href="" className="logo">
            <img src="logo.png" />
          </a>

          <div className="n">
            <Link to="/">Home</Link>
            <Link to="/moneybag">MoneyBag Plans</Link>
            <Link to="/about">About Us</Link>
          </div>

        </div>
        <div className="signup-btn">
          <button>
            <Link to="/signIn">Sign In</Link>
          </button>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
