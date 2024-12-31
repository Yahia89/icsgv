import "./Footer.css";

const Footer = () => {
  return (
        <footer class="footer">
          <div class="footer-content">
            <div class="footer-logo">
              <a href="/">
                <img
                  src="https://icsgv.com/wp-content/uploads/2023/08/logo-icsgv.png"
                  alt="ICSGV Logo"
                />
              </a>
            </div>
            <div class="footer-links">
              <div class="footer-links-column">
                <h5>Quick Links</h5>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/upcoming-events/">Events</a>
                  </li>
                  <li>
                    <a
                      href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/5"
                      target="_blank"
                    >
                      Donate
                    </a>
                  </li>
                  <li>
                    <a href="/contacts/">Contact Us</a>
                  </li>
                  <li>
                    <a href="/download/">Resources</a>
                  </li>
                </ul>
              </div>
              <div class="footer-links-column">
                <h5>Our Services</h5>
                <ul>
                  <li>
                    <a href="/services/">ICSGV</a>
                  </li>
                  <li>
                    <a href="/hajj-umrah/">Hajj & Umrah</a>
                  </li>
                  <li>
                    <a href="/clinic/">Free Clinic</a>
                  </li>
                  <li>
                    <a href="/library/">Library</a>
                  </li>
                  <li>
                    <a href="/matrimonial/">Matrimonial</a>
                  </li>
                  <li>
                    <a href="/banquet-hall/">Banquet Hall</a>
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
        </footer>
  );
};

export default Footer;