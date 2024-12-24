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
                        Guest Speakers: Sh. Yusha Evans, Sh. Ahmed Billoo,
                        Hossein Behizad, and Hootan Afzali CrushRoar Activity
                        Snacks & Food will be provided by Dennys (Halal)
                        Families are welcome
                      </p>
                      <h3 className="event-title" style={{ color: "#0078D4" }}>
                        ICSGV Qiyam
                      </h3>
                      <button
                        className="event-button"
                        style={{
                          backgroundColor: "#0078D4",
                          color: "#fff",
                          padding: "10px 20px",
                          fontSize: "16px",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          window.open(
                            "https://zkqwdtgbb.cc.rs6.net/tn.jsp?f=001hnfTbaKh7u_V6-fApDQhdcl3djTsOpirjKj_D7NCHlOTU8JMAfHinNfYDs8LklgomXVW8sdOLJcPdpG2LtAKm4SQi8w6h3bUCVtogxENeYgnARI3H1zJHfFNTvlpGTnAskqMzMwbdAoT-hCIJCySxFPCxRBYfyBQzE7yTW_dE9w=&c=7qklSMyeBwu59oE9R55NlxpavG-AToz7uzy6zanAnX7prf_yJCJ5wg==&ch=G5qCy2td2Y1SIn8hNlXYDwAkttzTibw3MxtWD2ivj4u5M-dL8EIS0Q==",
                            "_blank"
                          )
                        }
                      >
                        RSVP
                      </button>

                      <img
                        src="https://ecp.yusercontent.com/mail?url=https%3A%2F%2Ffiles.constantcontact.com%2F9514b36a901%2Ffd3c3eee-ee93-4ffb-a9bf-76e3476af200.jpg&t=1735015727&ymreqid=8c3c2c0b-b2fa-a289-1c0d-310001017c00&sig=cKHnNIAOwl6cFcKbMLg51w--~D"
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
