import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Accordion } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks"; // Import media query hook
import SEO from "./SEO";
import "../components/Header.css";
import headerLogo from "../assets/logo-icsgv.png";
import classes from "./header.module.css"



function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  // Determine if the screen is smaller than 768px
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuActive(false);
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
            {isMobile ? (
              // Mobile view: Render the submenus with Accordion without the arrow
              <li className="nav-item">
             <Accordion
  classNames={{
    chevron: classes.chevron,
    control: classes.control
  }}
  transitionDuration={300}
>
  <Accordion.Item value="services">
    <Accordion.Control>Services</Accordion.Control>
    <Accordion.Panel>
                      <ul className="submenu show">
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
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="education">
                    <Accordion.Control>Education</Accordion.Control>
                    <Accordion.Panel>
                      <ul className="submenu show">
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
                                <NavLink to="/weekendislamicschool" className="submenu-link" activeClassName="active">
                        Weekend Islamic School
                      </NavLink>
                                </li>
                                <li className="submenu-item">
                      <a href="https://htbcmedia.com/club/" className="submenu-link">
                      Hijrah Club
                      </a>
                    </li>
                        {/* <li className="submenu-item">
                          <a href="https://icsgv.com/quran-institute/" className="submenu-link">
                            Quran Institute
                          </a>
                        </li>
                        <li className="submenu-item">
                          <a href="https://icsgv.com/youth-group/" className="submenu-link">
                            Youth Group
                          </a>
                        </li> */}
                      </ul>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </li>
            ) : (
              // Desktop view: Render standard hover submenus (no accordion)
              <>
                <li className="nav-item has-submenu">
                  <NavLink to="#" className="nav-link">
                  Services <span className="menu-indicator">◀︎</span>
                  </NavLink>
                  <ul className="submenu">
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
                <li className="nav-item has-submenu">
                  <NavLink to="#" className="nav-link">
                  Education <span className="menu-indicator">◀︎</span>
                  </NavLink>
                  <ul className="submenu">
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
                    <NavLink to="/weekendislamicschool" className="submenu-link" activeClassName="active">
                        Weekend Islamic School
                      </NavLink>
                    </li>
                    <li className="submenu-item">
                      <a href="https://htbcmedia.com/club/" className="submenu-link">
                      Hijrah Club
                      </a>
                    </li>
                    {/* <li className="submenu-item">
                      <a href="https://icsgv.com/quran-institute/" className="submenu-link">
                        Quran Institute
                      </a>
                    </li> */}
                    {/* <li className="submenu-item">
                      <a href="https://icsgv.com/youth-group/" className="submenu-link">
                        Youth Group
                      </a>
                    </li> */}
                  </ul>
                </li>
              </>
            )}
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
          {/* Uncomment volunteer button if needed */}
          {/* <button className="button button-volunteer">Volunteer</button> */}
        </nav>
        <div className="header-controls">
          <NavLink to="/donate">
              <button className="button button-donate">
                Donate
              </button>
            </NavLink>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
