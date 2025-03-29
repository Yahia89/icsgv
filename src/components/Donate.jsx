import "./Donate.css"; // Update CSS import
import SEO from './SEO';
import Logo from "../assets/logo-icsgv.png";
import { 
  IconSchool, 
  IconBuilding, 
  IconBuildingMosque, 
  IconUsers, 
  IconHeartHandshake, 
  IconBook, 
  IconCash, 
  IconBread,
  IconMoonStars,
  IconTipJar,
  IconBuildingCommunity,
  IconCertificate,
  IconHome,
  IconHearts,
  IconSchoolBell,
  IconBook2,
  IconFriends,
  IconBellSchool,
  IconSofa,
  IconWheat,
  IconPray,
  IconGrill,
  IconMeat,
  IconSparkles
} from '@tabler/icons-react';


const Donate = () => {
  <svg width="0" height="0">
  <defs>
    <clipPath id="domeClip" clipPathUnits="objectBoundingBox">
      <path d="M0,1 V0.6 C0.3,0.2, 0.5,0, 0.7,0.2 0.9,0.4, 1,0.6, 1,1 Z" />
    </clipPath>
  </defs>
</svg>
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
                width="150"
                height="200"
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
              <a
                href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  backgroundColor: '#a99c38',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: '500',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  marginTop: '10px'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#8a7f2e';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#a99c38';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                View All Donation Categories
              </a>
            </div>
          </div>
          <div  className="donation-categories">
            <div className="donation-grid">
              <a href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/15" 
                className="donation-card"
                target="_blank"
                rel="noopener noreferrer">
                <IconSchool size={48} stroke={1.5} />
                <h3>Quba Islamic School</h3>
                <p>Support our full-time Islamic school's educational excellence</p>
              </a>

              <a href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/6" 
                className="donation-card"
                target="_blank"
                rel="noopener noreferrer">
                <IconSchoolBell size={48} stroke={1.5} />
                <h3>Sunday School - WIS</h3>
                <p>Support our Weekend Islamic School program</p>
              </a>

              <a href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/1" 
                className="donation-card"
                target="_blank"
                rel="noopener noreferrer">
                <IconBuildingMosque size={48} stroke={1.5} />
                <h3>General</h3>
                <p>Support our masjid's general operations and maintenance</p>
              </a>

              <a href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/3" 
                className="donation-card"
                target="_blank"
                rel="noopener noreferrer">
                <IconTipJar size={48} stroke={1.5} />
                <h3>Sadaqah</h3>
                <p>Give voluntary charity for the sake of Allah</p>
              </a>

              <a href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/9" 
                className="donation-card"
                target="_blank"
                rel="noopener noreferrer">
                <IconBook size={48} stroke={1.5} />
                <h3>Quran Institute Fee</h3>
                <p>Support our Quran education programs</p>
              </a>

              <a href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/18" 
                className="donation-card"
                target="_blank"
                rel="noopener noreferrer">
                <IconBook2 size={48} stroke={1.5} />
                <h3>IQRA Saturday School</h3>
                <p>Support our Saturday Islamic education program</p>
              </a>

              <a href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/11" 
                className="donation-card"
                target="_blank"
                rel="noopener noreferrer">
                <IconBellSchool size={48} stroke={1.5} />
                <h3>Little Angels Pre-School</h3>
                <p>Support our early childhood education program</p>
              </a>

              <a href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/8" 
                className="donation-card"
                target="_blank"
                rel="noopener noreferrer">
                <IconUsers size={48} stroke={1.5} />
                <h3>Membership - New/Renew</h3>
                <p>Join or renew your ICSGV membership</p>
              </a>

              <a href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/5" 
                className="donation-card"
                target="_blank"
                rel="noopener noreferrer">
                <IconBuilding size={48} stroke={1.5} />
                <h3>Land Purchase</h3>
                <p>Help expand our facilities for the community</p>
              </a>

              <a href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/2" 
                className="donation-card"
                target="_blank"
                rel="noopener noreferrer">
                <IconCash size={48} stroke={1.5} />
                <h3>Zakat - General</h3>
                <p>Support zakat distribution to those in need</p>
              </a>

              <a href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/17" 
                className="donation-card"
                target="_blank"
                rel="noopener noreferrer">
                <IconBook size={48} stroke={1.5} />
                <h3>Zakat - Education</h3>
                <p>Support educational initiatives through Zakat</p>
              </a>

              <a href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/10" 
                className="donation-card"
                target="_blank"
                rel="noopener noreferrer">
                <IconSofa size={48} stroke={1.5} />
                <h3>Banquet Hall</h3>
                <p>Support our community gathering space</p>
              </a>

              <a href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/16" 
                className="donation-card"
                target="_blank"
                rel="noopener noreferrer">
                <IconWheat size={48} stroke={1.5} />
                <h3>Burial Fund</h3>
                <p>Support burial services for our community</p>
              </a>

              <a href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/4" 
                className="donation-card"
                target="_blank"
                rel="noopener noreferrer">
                <IconHeartHandshake size={48} stroke={1.5} />
                <h3>Mortuary Fund</h3>
                <p>Support funeral and burial services</p>
              </a>

              <a href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/12" 
                className="donation-card"
                target="_blank"
                rel="noopener noreferrer">
                <IconMoonStars size={48} stroke={1.5} />
                <h3>Ramadan Iftar Donation</h3>
                <p>Support our community iftar programs</p>
              </a>

              <a href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/13" 
                className="donation-card"
                target="_blank"
                rel="noopener noreferrer">
                <IconGrill size={48} stroke={1.5} />
                <h3>Fitra Fund</h3>
                <p>Zakat al-Fitr for Ramadan</p>
              </a>

              <a href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/14" 
                className="donation-card"
                target="_blank"
                rel="noopener noreferrer">
                <IconMeat size={48} stroke={1.5} />
                <h3>Fidya Fund</h3>
                <p>Support those who cannot fast during Ramadan</p>
              </a>

              <a href="https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/7" 
                className="donation-card"
                target="_blank"
                rel="noopener noreferrer">
                <IconSparkles size={48} stroke={1.5} />
                <h3>Check-o-Matic</h3>
                <p>Set up automatic recurring donations</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
