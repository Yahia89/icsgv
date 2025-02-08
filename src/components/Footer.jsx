import { Link } from "react-router-dom";
import "./Footer.css";
import footerLogo from "../assets/logo-icsgv.png";

const Footer = () => {
  return (
        <footer class="footer">
          <div class="footer-content">
            <div class="footer-logo">
              <Link to="/">
                <img
                  src={footerLogo}
                  alt="ICSGV Logo"
                  loading="lazy"
                />
              </Link>
            </div>
            <div class="footer-links">
              <div class="footer-links-column">
                <h5>Quick Links</h5>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/events">Events</Link>
                  </li>
                  <li>
          <Link to="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/5">Donate</Link>
                  </li>
                  <li>
                    <Link to="/contacts">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/resources">Resources</Link>
                  </li>
                </ul>
              </div>
              <div class="footer-links-column">
                <h5>Our Services</h5>
                <ul>
                  <li>
                    <Link to="/services">All services</Link>
                  </li>
                  <li>
                    <Link to="/tripstomecca">Hajj & Umrah</Link>
                  </li>
                  <li>
                    <Link to="/clinic">Free Clinic</Link>
                  </li>
                  <li>
                    <Link to="/library">Library</Link>
                  </li>
                  <li>
                    <Link to="/matrimonial">Matrimonial</Link>
                  </li>
                  <li>
                    <Link to="/banquet">Banquet Hall</Link>
                  </li>
                </ul>
              </div>
              <div class="footer-links-column">
                <h5>Contact</h5>
                <ul>
                  <li>
                    <a
                      href="https://maps.app.goo.gl/JGHQpPcHxC6C2yhF9"
                      target="_blank"
                    >
                      <i class="fas fa-map-marker-alt"></i> 19164 E. Walnut Dr.
                      North, Rowland Heights, CA 91748
                    </a>
                  </li>
                  <li>
                    <span class="fas fa-envelope"></span> administration@icsgv.com
                  </li>
                  <li>
                    <span class="fas fa-phone-alt"></span> (626) 964-3596
                  </li>
                </ul>
              </div>
              <div class="footer-social">
                <a
                  href="https://web.facebook.com/Islamic-Center-of-San-Gabriel-Valley-196092656638/"
                  target="_blank"
                  class="social-icon"
                >
                  <i class="fab fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} ICSGV. All Rights Reserved.</p>
            <p>Developed & Designed by <a href="https://techdevprime.com" target="_blank" rel="noopener noreferrer">techdevprime.com</a></p>
          </div>
        </footer>
  );
};

export default Footer;
