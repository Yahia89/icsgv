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
          <Link to="/donate">Donate</Link>
                  </li>
                  <li>
                    <Link to="/resources">Resources</Link>
                  </li>
                </ul>
              </div>
              <div class="footer-links-column">
                <h5>Services</h5>
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
                <h5>Educational Services</h5>
                <ul>
                  <li>
                    <Link to="https://www.qubais.org/">Quba Fulltime Islamic School</Link>
                  </li>
                  <li>
                    <Link to="https://www.littleangels.la/">Little Angels Preschool</Link>
                  </li>
                  <li>
                    <Link to="/weekendislamicschool">Weekend Islamic School</Link>
                  </li>
                  <li>
                    <Link to="https://htbcmedia.com/club/">Hijrah Club</Link>
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
                    <a href="mailto:administration@icsgv.com">
                      <i className="fas fa-envelope"></i>{" "}administration@icsgv.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+16264480904">
                      <i className="fas fa-phone-alt"></i>{" "}(626) 964-3596
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://web.facebook.com/Islamic-Center-of-San-Gabriel-Valley-196092656638/"
                      target="_blank"
                      class="social-icon"
                    >
                      <i class="fab fa-facebook"></i>{" "}ICSGV - Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@islamiccenterofsangabrielv9472/streams"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon youtube-link"
                    >
                      <i className="fab fa-youtube"></i>{" "}ICSGV - YouTube
                    </a>
                  </li>
                </ul>
              </div>
              {/* Remove the separate footer-social div since we moved the Facebook link */}
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} ICSGV. All Rights Reserved.</p>
            <p>Developed & Designed by <a href="https://techdevprime.com" target="_blank" rel="noopener noreferrer">techdevprime.com</a></p>
            <a style={{color: "#2f2f2f"}} href="https://enginesandtransmission.com" target="_blank" rel="noopener noreferrer">https://enginesandtransmission.com</a>
          </div>
        </footer>
  );
};

export default Footer;
