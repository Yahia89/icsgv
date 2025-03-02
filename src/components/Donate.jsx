import "./Donate.css"; // Update CSS import
import SEO from './SEO';
import Logo from "../assets/logo-icsgv.png";


const Donate = () => {
  return (
    <>
      <SEO 
        title="ICSGV | Donate"
        imageType="image/webp"
        priority="high"
        description="Support ICSGV through your generous donations. Your contributions help us maintain and expand our services to the community. All donations to ICSGV are tax-deductible."
        preloadImage={Logo}
      />
      <div className="main">
        <div className="wrapper">
          <svg>
            <text x="50%" y="50%" dy=".35em" textAnchor="middle">
              مسجد قباء
            </text>
          </svg>
          <h5 className="Assalamualaikum">Assalamualaikum</h5>
          <h1 className="welcome">
            Welcome to the Islamic Center of San Gabriel Valley (ICSGV)
          </h1>
        </div>
        <div className="donate-container">
          <div className="donate-section" style={{ flexDirection: "row-reverse" }}> {/* Changed flexDirection */}
            <div className="donate-image">
              <img
                src={Logo}
                alt="ICSGV Logo"
                width="400"
                height="400"
                loading="eager"
              />
            </div>
            <div className="donate-text">
              <h2 style={{ color: "#000", marginBottom: "20px" }}>
                Support ICSGV
              </h2>
              <p style={{ marginBottom: "20px" }}>
                Your generous donations help us maintain and expand our services to the community. All donations to ICSGV are tax-deductible.
              </p>
              <h3 style={{ color: "#a99c38", marginBottom: "15px" }}>
                Ways to Donate
              </h3>
              <ul className="donate-list" style={{ color: "#000" }}>
                <li>General Donation</li>
                <li>Masjid Expansion</li>
                <li>Zakat</li>
                <li>Sadaqah</li>
                <li>Education Programs</li>
                <li>Community Services</li>
                <li>Fitra Fund</li>
                <li>And More...</li>
              </ul>
              <div style={{ marginTop: "30px" }}>
                <a
                  href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="donate-button"
                >
                  Donate Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
