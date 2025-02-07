import React from "react";
import "./Funeral.css";

const Funeral = () => {
  return (
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
      <div className="funeral-container">
        <div className="funeral-left">
          <img
            src="https://github.com/Yahia89/icsgv/blob/icsgv/src/assets/Mortuary-Flyer-768x994-1.jpg?raw=true"
            alt="Funeral Services Flyer"
            className="funeral-image"
          />
        </div>
        <div className="funeral-right" style={{ textAlign: "left", color: "#000" }}>
          <h2 className="funeral-title">Need our services now?</h2>
          <p className="funeral-contact">
            Please contact Kal Radwan at{" "}
            <a href="tel:+16268990034" style={{ color: "#0066cc", textDecoration: "underline" }}>
              (626) 899-0034
            </a>
          </p>
          <p className="funeral-info">
            <strong>
              The Islamic Center of San Gabriel Valley Mortuary, Inc.
            </strong>{" "}
            – General Price List:
            <a
              href="https://drive.google.com/file/d/1FHbtINHU5_adOjuH3usel0BTmWyZyV51/view?usp=sharing"
              className="funeral-link"
            >
              {" "}
              Click Here
            </a>
          </p>
          <p>Burial Packages: Islamic Burial Package includes:</p>
          <ul className="funeral-packages">
            <li>
              Picking up the deceased from place of death (e.g. the hospital,
              residence or coroner’s office)
            </li>
            <li>Storing the deceased at the Masjid's mortuary until burial</li>
            <li>
              Ghusl (Washing) and Kafan (Islamic Shrouding) of the deceased
            </li>
            <li>Transporting the deceased to the grave site for burial</li>
          </ul>
          <div className="funeral-video">
            <video controls autoPlay loop muted playsInline>
              <source
                src="https://github.com/Yahia89/icsgv/raw/refs/heads/icsgv/src/assets/ICSGV-Video-Without-Music.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funeral;
