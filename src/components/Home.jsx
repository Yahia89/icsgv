import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import PrayerTimes from "./PrayerTimes";

function Home() {
  useEffect(() => {
    const serviceCards = document.querySelectorAll(".service-card");

    const observerOptions = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    serviceCards.forEach((card) => {
      observer.observe(card);
    });
  }, []);

  return (
    <>
      <div class="main">
        <div class="wrapper">
          <svg>
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              مسجد قباء
            </text>
          </svg>
        </div>
        <h5 class="Assalamualaikum">Assalamualaikum</h5>
        <h1 class="welcome">
          Welcome to the Islamic Center of San Gabriel Valley (ICSGV)
        </h1>
        <p>
          The history of the Islamic Center of San Gabriel Valley spans over
          forty years. The Center was established in 1983 by dedicated and
          forward thinking Muslims living in the San Gabriel Valley area.
        </p>
        <div class="container">
          <div class="left-column">
            <div class="heading">
              <h6>About ICSGV</h6>
              <h2>Islamic Center of San Gabriel Valley</h2>
            </div>
            <div class="text-content">
              <p>
                In the late 70s, several Muslim families moved into the area and
                were disappointed to learn that there was not a single Masjid
                located within 40 miles...
              </p>
              <p>
                In 1984 a small church was purchased and has evolved over the
                years into today’s sprawling Islamic Center of San Gabriel
                Valley (ICSGV)...
              </p>
              <p>
                The primary goal of the founders of the Islamic Center was the
                education of children and to this day the Center remains true
                and dedicated to that goal...
              </p>
              <p>
                Alhamdulellah, ICSGV has a flourishing preschool (Little
                Angels), a full time, and highly rated Islamic School (Quba),
                the famed Sunday school, and a Quran Academy. The Center also
                offers a Masjid for the five daily prayers, Jumuah Prayer,
                Taraweeh prayer and hosts several Quran reciters during the Holy
                month of Ramadan. Other services provided are a Medical Clinic,
                Matrimonial, Mortuary, and Banquet facilities.
              </p>
            </div>
          </div>
          <div class="right-column">
            <img
              src="https://icsgv.com/wp-content/uploads/2023/08/Colleen_photo-5.jpg"
              alt="ICSGV Image"
              width="382"
              height="510"
            />
            <section class="info-section">
              <div class="info-heading">
                <h2 className="number-flip" style={{ "--delay": "0s" }}>
                  4
                </h2>
                <h2 className="number-flip" style={{ "--delay": "0.2s" }}>
                  0
                </h2>
                <h2 className="number-flip" style={{ "--delay": "0.4s" }}>
                  +
                </h2>
              </div>
              <div class="info-subheading">
                <h6>
                  Years of contributing to the development and progress of Islam
                  in Southern California
                </h6>
              </div>
            </section>
          </div>
        </div>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <button>Know More About Us</button>
        </Link>
        <h1 class="prayer-times-heading">Prayer Times</h1>
        <PrayerTimes />
        <section class="services-card">
          <div class="services-card-background">
            <div class="services-card-content">
              <h6 class="services-card-title">ICSGV - SERVICES</h6>
              <h2 class="services-card-heading">Educational Services</h2>
              <div class="services-card-grid">
                <a href="https://littleangels.la/">
                  <div class="service-card">
                    <h3 class="service-card-title">Little Angels Preschool</h3>
                    <p class="service-card-description">
                      No need to look elsewhere because our doors are open to
                      help your child develop the skills.
                    </p>
                  </div>
                </a>
                <a href="https://qubais.org/">
                  <div class="service-card">
                    <h3 class="service-card-title">Quba Islamic School</h3>
                    <p class="service-card-description">
                      We are a private Islamic school that focuses on fulfilling
                      the academic and character development needs of Muslim
                      students.
                    </p>
                  </div>
                </a>
                <a href="https://icsgv.com/youth-group/">
                  <div class="service-card">
                    <h3 class="service-card-title">Youth Group</h3>
                    <p class="service-card-description">
                      Prepare youth to deal with modern day challenges,
                      according to the Qur’an & the Sunnah (Highschool: grade 9
                      through 12).
                    </p>
                  </div>
                </a>
                <a href="https://icsgv.com/weekend-islamic-school/">
                  <div class="service-card">
                    <h3 class="service-card-title">Weekend Islamic School</h3>
                    <p class="service-card-description">
                      Our Weekend Islamic School instills core-Islamic values in
                      our next generation of Muslims (Pre-K through 8th grades).
                    </p>
                  </div>
                </a>
                <a href="https://icsgv.com/quran-institute/">
                  <div class="service-card">
                    <h3 class="service-card-title">Qur’an Academy</h3>
                    <p class="service-card-description">
                      An excellent program for children of all ages teaching
                      them proper tajweed of the Qu’ran.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="services-card">
          <div className="services-card-background">
            <div className="services-card-content">
              <h6 className="services-card-title">ICSGV - SERVICES</h6>
              <h2 className="services-card-heading">Our Services</h2>

              <div className="services-card-grid">
                <a href="https://icsgv.com/matrimonial-services/">
                  <div className="service-card">
                    <h3 className="service-card-title">Matrimonial Services</h3>
                    <p className="service-card-description">
                      We offer services to help individuals find suitable
                      partners for marriage.
                    </p>
                  </div>
                </a>
                <a href="https://icsgv.com/hajj-umrah/">
                  <div className="service-card">
                    <h3 className="service-card-title">Hajj & Umrah</h3>
                    <p className="service-card-description">
                      We help facilitate the spiritual journey of Hajj and Umrah
                      for the Muslim community.
                    </p>
                  </div>
                </a>
                <a href="https://icsgv.com/mortuary-services/">
                  <div className="service-card">
                    <h3 className="service-card-title">Mortuary Services</h3>
                    <p className="service-card-description">
                      Providing services to handle the funeral arrangements with
                      dignity and respect.
                    </p>
                  </div>
                </a>
                <a href="https://icsgv.com/banquet-hall/">
                  <div className="service-card">
                    <h3 className="service-card-title">Banquet Hall</h3>
                    <p className="service-card-description">
                      Rent our Banquet Hall for your special events and
                      celebrations.
                    </p>
                  </div>
                </a>
                <a href="https://icsgv.com/clinic/">
                  <div className="service-card">
                    <h3 className="service-card-title">Clinic</h3>
                    <p className="service-card-description">
                      Our clinic provides essential healthcare services to the
                      community.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
