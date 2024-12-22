import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "../components/Header.css";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // Tracks which submenu is open
  const location = useLocation(); // Get the current route

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  const toggleSubmenu = (index) => {
    setActiveMenu((prevIndex) => (prevIndex === index ? null : index));
  };

  const closeMenu = () => {
    setMenuActive(false);
    setActiveMenu(null);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".custom-header")) {
        closeMenu();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close menu when navigating
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header className="custom-header">
      <div className="logo-container">
        <a href="/">
          <img
            src="https://icsgv.com/wp-content/uploads/2023/08/logo-icsgv.png"
            alt="Logo"
            className="logo"
          />
        </a>
      </div>
      <nav className={`nav-menu ${menuActive ? "active" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li
            className={`nav-item has-submenu ${
              activeMenu === 1 ? "active" : ""
            }`}
            onClick={() => toggleSubmenu(1)}
          >
            <a href="#" className="nav-link">
              Services <span className="menu-indicator">❖</span>
            </a>
            <ul className={`submenu ${activeMenu === 1 ? "show" : ""}`}>
              <li className="submenu-item">
                <NavLink to="/services" className="submenu-link">
                  ICSGV Services
                </NavLink>
              </li>
              <li className="submenu-item">
                <NavLink to="/library" className="submenu-link">
                  Library
                </NavLink>
              </li>
              <li className="submenu-item">
                <NavLink to="/clinic" className="submenu-link">
                  Clinic
                </NavLink>
              </li>
              <li className="submenu-item">
                <NavLink to="/matrimonial" className="submenu-link">
                  Matrimonial
                </NavLink>
              </li>
              <li className="submenu-item">
                <NavLink to="/banquet" className="submenu-link">
                  Banquet Hall
                </NavLink>
              </li>
              <li className="submenu-item">
                <NavLink
                  to="/funeral-services"
                  className="submenu-link"
                >
                  Funeral Services
                </NavLink>
              </li>
              <li className="submenu-item">
                <NavLink to="/tripstomecca" className="submenu-link">
                  Hajj & Umrah
                </NavLink>
              </li>
            </ul>
          </li>
          <li
            className={`nav-item has-submenu ${
              activeMenu === 2 ? "active" : ""
            }`}
            onClick={() => toggleSubmenu(2)}
          >
            <a href="#" className="nav-link">
              Education <span className="menu-indicator">❖</span>
            </a>
            <ul className={`submenu ${activeMenu === 2 ? "show" : ""}`}>
              <li className="submenu-item">
                <a href="https://www.qubais.org/" className="submenu-link">
                  Quba Fulltime Islamic School
                </a>
              </li>
              <li className="submenu-item">
                <a href="https://www.littleangels.la/" className="submenu-link">
                  Little Angels Preschool
                </a>
              </li>
              <li className="submenu-item">
                <a
                  href="https://icsgv.com/weekend-islamic-school/"
                  className="submenu-link"
                >
                  Weekend Islamic School
                </a>
              </li>
              <li className="submenu-item">
                <a
                  href="https://icsgv.com/quran-institute/"
                  className="submenu-link"
                >
                  Quran Institute
                </a>
              </li>
              <li className="submenu-item">
                <a
                  href="https://icsgv.com/youth-group/"
                  className="submenu-link"
                >
                  Youth Group
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink to="/events" className="nav-link" activeClassName="active">
              Events
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/prayertimes"
              className="nav-link"
              activeClassName="active"
            >
              Prayer Times
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/stream" className="nav-link">
              Live Stream
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/resources"
              className="nav-link"
              activeClassName="active"
            >
              Resources
            </NavLink>
          </li>
        </ul>
        <button
          className="button button-donate"
          onClick={() =>
            window.open(
              "https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/5",
              "_blank"
            )
          }
        >
          Donate
        </button>

        <button className="button button-volunteer">Volunteer</button>
      </nav>
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
      </button>
    </header>
  );
}

export default Header;
