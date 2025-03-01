import "./WeekendSchool.css"; // Add styles for this component
import SEO from './SEO';
import weekend_school_1 from "../assets/ICSGV-Graduation-2019-@SK-Phots-_-Videos-Cell-9095067479-52-copy.jpg";
import weekend_school_2 from "../assets/Z72_4187-scaled.jpg";
import weekend_school_3 from "../assets/Z72_4271-scaled.jpg";
import weekend_school_4 from "../assets/Z72_4150-scaled.jpg";
import rashed from "../assets/rashed_director.png";
import salma_ansari from "../assets/salma_ansari.png";
import naadir_soofi from "../assets/naadir_soofi.png";
import carla_abulashin from "../assets/carla_abulashin.png";


const WeekendSchool = () => {
  return (
    <>
      <SEO 
        title="ICSGV | Weekend Islamic School"
        imageType="image/webp"
        priority="high"
        description="ICSGV Weekend Islamic School provides quality Islamic education for Pre-K through 8th grade students every Sunday from 10 AM to 1:30 PM, teaching Quran, Islamic History, and core Islamic values in a safe and enjoyable environment."
        preloadImage={weekend_school_1}
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
          <div className="weekend-container">
            <div className="weekend-section">
              <div className="weekend-text" style={{textAlign:"left"}}>
                <h5 style={{ color: "#000" }} className="button-container">
                  <a href="https://icsgv.com/wis/wis.php" target="_blank" rel="noopener noreferrer">
                    <button className="weekend-button">
                      Current / Returning Student Login
                    </button>
                  </a>
                  <a href="https://icsgv.com/wis/wis_main.php" target="_blank" rel="noopener noreferrer">
                    <button className="weekend-button">
                      New Students
                    </button>
                  </a>
                </h5>
                <p style={{ color: "#a99c38" }}>Class Schedule</p>
                <p>The Weekend Islamic School program seeks to provide quality Islamic education by qualified, well resourced teachers for students in a safe, enjoyable, Islamic environment through continuously striving to improve the effectiveness of the Islamic educational program to build Islamic personalities by collaborating with parents, teachers, and students.</p>
                <h2 style={{ color: "#000" }}>
                10:00 AM - 1:30 PM Sundays
                </h2>
                <p>
                Our Weekend Islamic School instills core-Islamic values in our next generation of Muslims (Pre-K through 8th grade) and Youth Group (gth - 12th grades). Three and a half hours curriculum consist of basic concepts of Tawheed. Quran, Islamic History, etiquettes.
                </p>
              </div>
              <div className="rashed-image">
                <img
                  src={weekend_school_1}
                  alt="Director Rashed speech"
                  width="800"
                  height="450"
                  loading="eager"
                />
              </div>
            </div>
            <div className="weekend-section-text">
              <h2 style={{ color: "#000" }}>New Students</h2>
                <p>
                Assalam Alaikum Wa Rahmutalahu Wa Barakatuhu
                Respected Brother / Sister,</p>
<p>Welcome! We thank Allah (SWT) and our community to have given us this opportunity to serve. We are very excited and anxious to teach our children in new Masjid. We reiterate our commitment to providing quality Islamic education to your children in a safe and enjoyable environment. We assure you that your children will get proper understanding of our Deen, and they will be better prepared to face the challenges ahead in their lives. The education and training they receive in our classes will have a lasting positive impression on their character. On completing the program your child/children will understand the purpose of life and his or her role in this world. They will also understand that Supremacy belongs to Allah (SWT) who is not only the Creator and Sustainer of everything in the universe but also the Ruler, and Prophet Muhammad (PBUH) is the ultimate Guide for the mankind.
In order to achieve ultimate success, we must submit to the Will of Allah (SWT) and follow the teachings of Prophet Muhammad (PBUH).</p>
<p>We look forward to working with your school-age children. At ICSGVs Weekend Islamic School we have rolling admission policy. And as always, we the administration, I (Rashed Mohammadi), Salma Ansari. Carla Abulashin, and Naadir Soofi are available to hear your comments, concerns, and suggestions. With your help. together we can shape and train the next generation of American Muslims. Let's pray to Allah (SWT) to grant our children the ability and wisdom to represent Islam in America and become inspiring leaders of tomorrow.</p>
<p>When ready, please click 'New Student Registration! Then give our team 48 hours to send an update to the email on file.</p>
<p style={{ color: "#a99c38" }}>Rashed Mohammadi
Principal</p>
            </div>
            <div className="weekend-section">
              <div className="image-collage">
                <div className="image-top">
                  <img
                    src={weekend_school_2}
                    alt="Weekend islamic school graduation 1"
                    loading="lazy"
                  />
                </div>
                <div className="image-middle">
                  <img
                    src={weekend_school_3}
                    alt="Weekend islamic school graduation 2"
                    loading="lazy"
                  />
                </div>
                <div className="image-bottom">
                  <img
                    src={weekend_school_4}
                    alt="Weekend islamic school graduation 3"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="admin-section">
              <h3 className="admin-title">Our Team</h3>
              <h2 className="admin-subtitle">Administration</h2>
              <div className="admin-members">
                <div className="admin-member">
                  <img src={rashed} alt="Rashed Mohammadi" />
                  <h4>Rashed Mohammadi</h4>
                  <p>Principal</p>
                </div>
                <div className="admin-member">
                  <img src={salma_ansari} alt="Salma Ansari" />
                  <h4>Salma Ansari</h4>
                  <p>Vice-Principal</p>
                </div>
                <div className="admin-member">
                  <img src={naadir_soofi} alt="Naadir Soofi" />
                  <h4>Naadir Soofi</h4>
                  <p>Administrator</p>
                </div>
                <div className="admin-member">
                  <img src={carla_abulashin} alt="Carla Abu Lashin" />
                  <h4>Carla Abu Lashin</h4>
                  <p>Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </> 
  );
};

export default WeekendSchool;
