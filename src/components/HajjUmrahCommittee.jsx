import React, { useState } from "react";
import "./HajjUmrahCommittee.css";
import maherPicture from "../assets/508ACA82-E80D-4D11-BCFF-0D41E3A3AA58_1_201_a.jpeg";
import umrahFlyer from "../assets/IMG_3417.PNG"; // add the attached flyer image to assets

const HajjUmrahCommittee = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="main">
      <h5 className="assalamualaikum">Assalamualaikum</h5>
      <h1 className="welcome">
        Welcome to the Islamic Center of San Gabriel Valley (ICSGV)
      </h1>
      <div className="committee-container-hajj">
        <h2 className="committee-title-hajj">Hajj & Umrah Committee</h2>
        <div className="member-container-hajj">
          <div className="member-hajj">
            <div className="image-container-hajj">
              <img className="member-image-hajj" src={maherPicture} alt="Maher Subeh" />
            </div>
            <h3 className="member-name-hajj">Maher Subeh</h3>
            <p className="member-phone-hajj">
              <a href="tel:+16262247050">
                <i className="fas fa-phone-alt"></i>{" "}(626) 224-7050
              </a>
            </p>
            <p className="member-phone-hajj">
               <a
                 href="https://icsgv.com/wp-content/uploads/2026/02/Hajj2026flyer-AlMadinahTravels.pdf"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <i className="fas fa-file-alt"></i>{" "}2026 book Hajj packages.
               </a>
            </p>
            <p className="member-phone-hajj">
               <a
                 href="https://icsgv.com/wp-content/uploads/2026/02/UmrahPackagePostcard.pdf"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <i className="fas fa-file-alt"></i>{" "}2026 Umrah Packages Postcard (zoom in to view the details).
               </a>
               <p style={{ color: "gray" }}>click on the link to open the pdf in a new tab</p>
            </p>

            {/* Flyer preview - clickable to zoom, separate from PDF link */}
            <div className="flyer-container-hajj" style={{ marginTop: 12 }}>
              <button
                onClick={() => setIsModalOpen(true)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  width: "100%",
                  maxWidth: 420
                }}
                aria-label="View Umrah 2026 flyer in full screen"
              >
                <img
                  src={umrahFlyer}
                  alt="Umrah 2026 Flyer"
                  style={{
                    width: "100%",
                    maxWidth: 420,
                    height: "auto",
                    display: "block",
                    borderRadius: 8,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    transition: "transform 0.2s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.02)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                />
                <p style={{ color: "gray" }}>click on the image zoom</p>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Modal for zoomed flyer view */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            padding: "20px"
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
              backgroundColor: "white",
              borderRadius: "8px",
              overflow: "auto"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "8px 12px",
                cursor: "pointer",
                fontSize: "16px",
                zIndex: 1001
              }}
            >
              ✕ Close
            </button>
            <img
              src={umrahFlyer}
              alt="Umrah 2026 Flyer - Full View"
              style={{
                width: "100%",
                height: "auto",
                display: "block"
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HajjUmrahCommittee;
