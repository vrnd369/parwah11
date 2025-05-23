import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import "../styles/Header.css";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  React.useEffect(() => {
    scrollToTop();
    setMenuOpen(false); // Close menu on route change
  }, [location.pathname]);
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/images/Logo.png" alt="Parwah Industries Logo" />
          </Link>
        </div>
        <nav className={menuOpen ? "open" : ""}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/products">Our Brands</Link>
            </li>
            {/* <li>
              <Link to="/quality">Quality</Link>
            </li> */}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div
          className="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu size={32} />
        </div>
      </div>
    </header>
  );
};

export default Header;
