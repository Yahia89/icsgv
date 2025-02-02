import React from "react";
// import './EventsPage.css';

const EventsPage = () => {
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
        <div
          className="elementor elementor-849"
          data-elementor-type="wp-page"
          data-elementor-id="849"
          data-elementor-post-type="page"
        >
          {/* Top Section */}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-section-boxed elementor-section-height-default"
            data-id="91e42f3"
            data-element_type="section"
          >
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element"
                data-id="6ee060d"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  {/* Heading */}
                  <div
                    className="elementor-element elementor-widget elementor-widget-heading"
                    data-id="bae7428"
                    data-element_type="widget"
                  >
                    <div className="elementor-widget-container">
                      <h6 className="elementor-heading-title elementor-size-default">
                        ICSGV Events
                      </h6>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-widget elementor-widget-heading"
                    data-id="2511e9e"
                    data-element_type="widget"
                  >
                    <div className="elementor-widget-container">
                      <h2
                        className="elementor-heading-title elementor-size-default"
                        style={{ color: "#000" }}
                      >
                        Upcoming Events
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Events Listing Section */}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-section-boxed elementor-section-height-default elementor-section-items-stretch"
            data-id="589d90f0"
            data-element_type="section"
          >
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element animated-slow animated fadeIn"
                data-id="37af45e2"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-widget elementor-widget-text-editor"
                    data-id="event-widget-1"
                    data-element_type="widget"
                  >
                    <div className="elementor-widget-container"></div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element animated-slow animated fadeIn"
                data-id="37af45e3"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-widget elementor-widget-text-editor"
                    data-id="event-widget-2"
                    data-element_type="widget"
                  >
                    <div className="elementor-widget-container">
                      <p
                        className="event-description"
                        style={{ color: "#000" }}
                      >
                        EMPOWERING TEENS


Tackling Bullying and Navigating Mental Health Challenges

by Sadia Raja, M.A. Ed. APCC


Friday, January 24, 2025

Strategies for Addressing Bullying


Friday, February 7, 2025

Common Mistakes in Handling Youth Issues


Program Starts after Isha Prayer at 8 PM
                      </p>
                      <h3 className="event-title" style={{ color: "#0078D4" }}>
                       
                      </h3>
                      <img
                        src="https://ecp.yusercontent.com/mail?url=https%3A%2F%2Ffiles.constantcontact.com%2F9514b36a901%2Ffa8e6ea7-58a3-4c06-ac76-e6bd07441a86.png&t=1738479154&ymreqid=8c3c2c0b-b2fa-a289-1cb5-5d0007012800&sig=lbiKq.M8gzH8lJ99fXFaSw--~D"
                        alt="Event Image"
                        className="event-image"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
