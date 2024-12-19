import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="services-container">
      <div class="main" style={{ position: "sticky" }}>
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
      </div>
        {/* Islamic Services */}
        <section className="services-section">
          <h2 className="services-title">Islamic Services</h2>
          <div className="services-grid">
            <p>
              <div className="servicescards">Five daily prayers</div>
            </p>
            <p>
              <div className="servicescards">
                Juma'a (Friday) prayer services
              </div>
            </p>
            <p>
              <div className="servicescards">
                Family and individual counseling
              </div>
            </p>
            <p>
              <div className="servicescards">Marriage/Nikkah services</div>
            </p>
            <p>
              <div className="servicescards">
                Dawah-Invitation to non-Muslims
              </div>
            </p>
            <p>
              <div className="servicescards">Funeral/Mortuary arrangements</div>
            </p>
            <p>
              <div className="servicescards">Ramadan Taraweeh Prayer</div>
            </p>
            <p>
              <div className="servicescards">Hajj and Umrah</div>
            </p>
            <p>
              <div className="servicescards">Eid Prayers/Festivals</div>
            </p>
          </div>
        </section>
        {/* Educational Services */}
        <section className="services-section">
          <h2 className="services-title">Educational Services</h2>
          <div className="services-grid">
            <div className="servicescards">
              Quba Full-Time Islamic School (K-12)
            </div>
            <div className="servicescards">
              Fulltime & Parttime Hifdh Program
            </div>
            <div className="servicescards">Preschool - ages 3-5</div>
            <div className="servicescards">Sunday Islamic School (K-12)</div>
            <div className="servicescards">
              Youth Group Program (ages 13-19)
            </div>
            <div className="servicescards">
              Saturday Iqra Arabic School (K-12)
            </div>
            <div className="servicescards">Friday Sisters' Class</div>
            <div className="servicescards">
              Weekdays Arabic, Qur'an & Urdu Classes
            </div>
            <div className="servicescards">
              After-School Qur'an classes with proper Tajweed
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="services-section">
          <h2 className="services-title">Events</h2>
          <div className="services-grid">
            <div className="servicescards">Carnivals</div>
            <div className="servicescards">Women's Festival</div>
            <div className="servicescards">BBQ</div>
            <div className="servicescards">Bazaars</div>
            <div className="servicescards">Picnic</div>
            <div className="servicescards">Friday Family Night</div>
          </div>
        </section>

        {/* Community Services */}
        <section className="services-section">
          <h2 className="services-title">Community Services</h2>
          <div className="services-grid">
            <div className="servicescards">Clinic</div>
            <div className="servicescards">Food pantry</div>
            <div className="servicescards">Library</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
