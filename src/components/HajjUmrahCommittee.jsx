import "./HajjUmrahCommittee.css";
import maherImage from "/Users/yahiaalhejoj/icsgv/src/assets/CE215988-2FF6-4D85-ABDE-F07BF9EEF5AA_4_5005_c.jpeg";

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
      <div className="committee-container">
        <h2 className="committee-title">Hajj & Umrah Committee</h2>
        <div className="member-container">
          <div className="member">
            <div className="member-image">
              <img src={maherImage} alt="Maher Subeh" />
            </div>
            <h3 className="member-name">Maher Subeh</h3>
            <p className="member-phone">626-224-7050</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HajjUmrahCommittee;
