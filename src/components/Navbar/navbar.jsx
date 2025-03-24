import "./navbar.css";
import HomePage from "../HomePage/homePage";
import Footer from "../Footer/footer"
function Navbar() {
    return (
      <div>
        <nav>
          <div className="menu">
            <a href="" className="logo">
              <img src="logo.png" alt="" />
            </a>

            <a href="">Home</a>
            <a href="">MoneyBag Plans</a>
            <a href="">About Us</a>
          </div>
          <div className="signup-btn">
            <button>Sign In</button>
          </div>
        </nav>
        
        <HomePage/>
        <Footer/>
      </div>
    );
}
export default Navbar;  