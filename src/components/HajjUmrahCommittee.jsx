import React from "react";
import "./HajjUmrahCommittee.css";
import maherPicture from "../assets/508ACA82-E80D-4D11-BCFF-0D41E3A3AA58_1_201_a.jpeg"

const HajjUmrahCommittee = () => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HajjUmrahCommittee;
