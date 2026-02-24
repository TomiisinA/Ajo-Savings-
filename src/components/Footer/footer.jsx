import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-primary-300 px-6 md:px-10 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* ================= LEFT / LOGO ================= */}
        <div className="flex flex-col gap-6 max-w-md">
          <img src="image 11.png" alt="MoneyBag logo" className="w-40" />

          <p className=" text-gray-300">
            We are a fintech company that empowers business owners and 
            individuals to conveniently invest in larger ventures, providing
            quick, secure, and hassle-free access to capital.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <span className="p-2 bg-white rounded-full text-primary-100">
              <FaTwitter />
            </span>
            <span className="p-2 bg-white rounded-full text-primary-100">
              <FaLinkedin />
            </span>
            <span className="p-2 bg-white rounded-full text-primary-100">
              <FaFacebook />
            </span>
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h1 className="text-xl font-medium text-primary-100 mb-0">
            Quick Links
          </h1>
          <ul className="space-y-2 text-base text-gray-300">
            <li className="hover:text-primary-100 cursor-pointer">Company</li>
            <li className="hover:text-primary-100 cursor-pointer">FAQ</li>
            <li className="hover:text-primary-100 cursor-pointer">Legal</li>
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h3 className="text-xl font-medium text-primary-100 mb-0">
            Contact Us
          </h3>
          <ul className="space-y-2 text-base text-gray-300">
            <li><strong>Email:</strong> support@moneybag.com</li>
            <li><strong>Phone:</strong> 081000166601</li>
            <li><strong>Legal:</strong> 208-41 Noel Avenue, Saint John, NB, Canada</li>
          </ul>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      {/* <div className="mt-2 pt-6 text-center">
        <p className="text-caption text-gray-600">
          © 2026 MoneyBag. All rights reserved.
        </p>
      </div> */}
    </footer>
  );
}

export default Footer;
