import "./Donate.css"; // Update CSS import
import SEO from './SEO';
import Logo from "../assets/logo-icsgv.png";
import { 
  IconSchool, 
  IconBuilding, 
  IconBuildingMosque, 
  IconUsers, 
  IconHeartHandshake, 
  IconPray, 
  IconBook, 
  IconCash, 
  IconBread,
  IconMoonStars
} from '@tabler/icons-react';


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
          <div className="donation-categories">
            <div className="donation-grid">
              <a href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/15" 
                className="donation-card"
                target="_blank"
                rel="noopener noreferrer">
                <IconSchool size={48} stroke={1.5} />
                <h3>Education</h3>
                <p>Support our educational programs and initiatives</p>
              </a>

              {/* Apply the same attributes to all other links */}
              <a className="donation-card"
                target="_blank"
                rel="noopener noreferrer"
               href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/5">
                <IconBuilding size={48} stroke={1.5} />
                <h3>Land Purchase</h3>
                <p>Help expand our facilities for the community</p>
              </a>

              <a target="_blank"
                rel="noopener noreferrer" href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/1" className="donation-card">
                <IconBuildingMosque size={48} stroke={1.5} />
                <h3>Masjid Expenses</h3>
                <p>Support daily operations and maintenance</p>
              </a>

              <a target="_blank"
                rel="noopener noreferrer" href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/8" className="donation-card">
                <IconUsers size={48} stroke={1.5} />
                <h3>Membership</h3>
                <p>Become a member of our community</p>
              </a>

              <a target="_blank"
                rel="noopener noreferrer" href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/4" className="donation-card">
                <IconHeartHandshake size={48} stroke={1.5} />
                <h3>Mortuary Fund</h3>
                <p>Support funeral and burial services</p>
              </a>

              <a href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/3" className="donation-card">
                <IconPray size={48} stroke={1.5} />
                <h3>Sadaqah</h3>
                <p>Give voluntary charity for the sake of Allah</p>
              </a>

              <a target="_blank"
                rel="noopener noreferrer" href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/17" className="donation-card">
                <IconBook size={48} stroke={1.5} />
                <h3>Zakat - Education</h3>
                <p>Support educational initiatives through Zakat</p>
              </a>

              <a target="_blank"
                rel="noopener noreferrer" href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/2" className="donation-card">
                <IconCash size={48} stroke={1.5} />
                <h3>Zakat - General</h3>
                <p>General Zakat distribution</p>
              </a>

              <a  target="_blank"
                rel="noopener noreferrer" href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/14" className="donation-card">
                <IconBread size={48} stroke={1.5} />
                <h3>Fidya Fund</h3>
                <p>Support those who cannot fast during Ramadan</p>
              </a>

              <a target="_blank"
                rel="noopener noreferrer" href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/13" className="donation-card">
                <IconMoonStars size={48} stroke={1.5} />
                <h3>Fitra Fund</h3>
                <p>Zakat al-Fitr for Ramadan</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
