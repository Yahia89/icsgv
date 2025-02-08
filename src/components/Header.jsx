import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SEO from "./SEO";
import "../components/Header.css";
import headerLogo from "../assets/logo-icsgv.png";

function Header() {
  // Using an object for submenu state for clarity
  const [menuActive, setMenuActive] = useState(false);
  const [submenus, setSubmenus] = useState({
    services: false,
    education: false
  });
  const location = useLocation();

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  const toggleSubmenu = (e, submenuName) => {
    e.preventDefault();
    e.stopPropagation();
    setSubmenus((prev) => ({
      ...prev,
      [submenuName]: !prev[submenuName]
    }));
  };

  const closeMenu = () => {
    setMenuActive(false);
    setSubmenus({
      services: false,
      education: false
    });
  };

  // Close menu when clicking outside the header
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".custom-header")) {
        closeMenu();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close menu when navigation changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <>
      <SEO
        title="ICSGV | Islamic Center of San Gabriel Valley"
        description="Islamic Center of San Gabriel Valley - A comprehensive Islamic center serving the community"
        preloadImage={headerLogo}
        priority="high"
      />
      <header className="custom-header">
        <div className="logo-container">
          <NavLink to="/">
            <img
              src={headerLogo}
              alt="ICSGV"
              className="logo"
              loading="eager"
              fetchpriority="high"
            />
          </NavLink>
        </div>
        <nav className={`nav-menu ${menuActive ? "active" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>

            {/* Services Submenu */}
            <li className={`nav-item has-submenu ${submenus.services ? "active" : ""}`}>
              <a
                href="#"
                className="nav-link"
                onClick={(e) => toggleSubmenu(e, "services")}
              >
                Services <span className="menu-indicator">◀︎</span>
              </a>
              <ul
                className={`submenu ${submenus.services ? "show" : ""}`}
                onClick={(e) => e.stopPropagation()}
              >
                <li className="submenu-item">
                  <NavLink to="/services" className="submenu-link" activeClassName="active">
                    ICSGV Services
                  </NavLink>
                </li>
                <li className="submenu-item">
                  <NavLink to="/library" className="submenu-link" activeClassName="active">
                    Library
                  </NavLink>
                </li>
                <li className="submenu-item">
                  <NavLink to="/clinic" className="submenu-link" activeClassName="active">
                    Clinic
                  </NavLink>
                </li>
                <li className="submenu-item">
                  <NavLink to="/matrimonial" className="submenu-link" activeClassName="active">
                    Matrimonial
                  </NavLink>
                </li>
                <li className="submenu-item">
                  <NavLink to="/banquet" className="submenu-link" activeClassName="active">
                    Banquet Hall
                  </NavLink>
                </li>
                <li className="submenu-item">
                  <NavLink to="/funeral-services" className="submenu-link" activeClassName="active">
                    Funeral Services
                  </NavLink>
                </li>
                <li className="submenu-item">
                  <NavLink to="/tripstomecca" className="submenu-link" activeClassName="active">
                    Hajj &amp; Umrah
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Education Submenu */}
            <li className={`nav-item has-submenu ${submenus.education ? "active" : ""}`}>
              <a
                href="#"
                className="nav-link"
                onClick={(e) => toggleSubmenu(e, "education")}
              >
                Education <span className="menu-indicator">◀︎</span>
              </a>
              <ul
                className={`submenu ${submenus.education ? "show" : ""}`}
                onClick={(e) => e.stopPropagation()}
              >
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
                  <a href="https://icsgv.com/weekend-islamic-school/" className="submenu-link">
                    Weekend Islamic School
                  </a>
                </li>
                <li className="submenu-item">
                  <a href="https://icsgv.com/quran-institute/" className="submenu-link">
                    Quran Institute
                  </a>
                </li>
                <li className="submenu-item">
                  <a href="https://icsgv.com/youth-group/" className="submenu-link">
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
              <NavLink to="/prayertimes" className="nav-link" activeClassName="active">
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
              <NavLink to="/resources" className="nav-link" activeClassName="active">
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
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
        </button>
      </header>
    </>
  );
}

export default Header;
