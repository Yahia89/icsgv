import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "../components/Header.css";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null); // Change to single active submenu
  const location = useLocation();

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const closeMenu = () => {
    setMenuActive(false);
    setActiveSubmenu(null); // Reset active submenu
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
        <a href="https://yahia89.github.io/icsgv/">
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
              activeSubmenu === 1 ? "active" : ""
            }`}
            onClick={() => toggleSubmenu(1)}
          >
            <a className="nav-link">
              Services{" "}
              <span class="menu-indicator">
                ◀︎
              </span>
            </a>
            <ul className={`submenu ${activeSubmenu === 1 ? "show" : ""}`}>
              <li className="submenu-item">
                <NavLink
                  to="/services"
                  className="submenu-link"
                  activeClassName="active"
                >
                  ICSGV Services
                </NavLink>
              </li>
              <li className="submenu-item">
                <NavLink
                  to="/library"
                  className="submenu-link"
                  activeClassName="active"
                >
                  Library
                </NavLink>
              </li>
              <li className="submenu-item">
                <NavLink
                  to="/clinic"
                  className="submenu-link"
                  activeClassName="active"
                >
                  Clinic
                </NavLink>
              </li>
              <li className="submenu-item">
                <NavLink
                  to="/matrimonial"
                  className="submenu-link"
                  activeClassName="active"
                >
                  Matrimonial
                </NavLink>
              </li>
              <li className="submenu-item">
                <NavLink
                  to="/banquet"
                  className="submenu-link"
                  activeClassName="active"
                >
                  Banquet Hall
                </NavLink>
              </li>
              <li className="submenu-item">
                <NavLink
                  to="/funeral-services"
                  className="submenu-link"
                  activeClassName="active"
                >
                  Funeral Services
                </NavLink>
              </li>
              <li className="submenu-item">
                <NavLink
                  to="/tripstomecca"
                  className="submenu-link"
                  activeClassName="active"
                >
                  Hajj & Umrah
                </NavLink>
              </li>
            </ul>
          </li>
          <li
            className={`nav-item has-submenu ${
              activeSubmenu === 2 ? "active" : ""
            }`}
            onClick={() => toggleSubmenu(2)}
          >
            <a className="nav-link">
              Education{" "}
              <span class="menu-indicator">
                ◀︎
              </span>
            </a>
            <ul className={`submenu ${activeSubmenu === 2 ? "show" : ""}`}>
              <li className="submenu-item">
                <a
                  href="https://www.qubais.org/"
                  className="submenu-link"
                  activeClassName="active"
                >
                  Quba Fulltime Islamic School
                </a>
              </li>
              <li className="submenu-item">
                <a
                  href="https://www.littleangels.la/"
                  className="submenu-link"
                  activeClassName="active"
                >
                  Little Angels Preschool
                </a>
              </li>
              <li className="submenu-item">
                <a
                  href="https://icsgv.com/weekend-islamic-school/"
                  className="submenu-link"
                  activeClassName="active"
                >
                  Weekend Islamic School
                </a>
              </li>
              <li className="submenu-item">
                <a
                  href="https://icsgv.com/quran-institute/"
                  className="submenu-link"
                  activeClassName="active"
                >
                  Quran Institute
                </a>
              </li>
              <li className="submenu-item">
                <a
                  href="https://icsgv.com/youth-group/"
                  className="submenu-link"
                  activeClassName="active"
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
            <NavLink to="/stream" className="nav-link" activeClassName="active">
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
