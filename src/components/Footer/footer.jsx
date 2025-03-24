import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="part-one">
        <div>
          <img src="image 11.png" alt="" />
        </div>
        <div className="logo-body">
          <p>
            We are a fintech company that empowers business owners and <br />
            individuals to coniniently invest in larger ventures, providing
            quick,
            <br /> secure, and hassle-free access to capital.
          </p>
        </div>
        <div className="icons"></div>
      </div>
      <div className="links">
        <h1>Quick Links</h1>
        <ul>
          <li>Company</li>
          <li>FAQ</li>
          <li>Legal</li>
        </ul>
      </div>

      <div className="contact-us">
        <h1>Contact Us</h1>
        <ul>
          <li>Email: support@moneybag.com</li>
          <li>Phone: 081000166601</li>
          <li>Legal: 208-41 Noel Avenue, Saint John,NB, Canada</li>
        </ul>
      </div>

      {/* <div>
            <p> Copyright 2022 AjoApp. All rights reserved.An AjoApp licensed and owned and operated by ISW Group three</p>
        </div> */}
    </div>
  );
}
export default Footer;
