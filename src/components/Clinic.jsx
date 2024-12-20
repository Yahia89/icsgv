import "./Clinic.css"; // Add styles for this component

const Clinic = () => {
  return (
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
        <div className="clinic-container">
          {/* First Section */}
          <div className="clinic-section">
            <div className="clinic-text">
              <h5 style={{ color: "#000" }}>
                Clinic – Sundays from 11 AM to 1 PM
              </h5>
              <p>September through May – closed during school summer break.</p>
              <h2 style={{ color: "#000" }}>
                Mental Health in the Muslim Communities Seminar
              </h2>
              <p>
                ICSGV has organized counseling sessions with ICNA Relief for our
                community. The sessions will be remote and confidential. They
                are available to anyone who needs them. You must make a personal
                appointment. Please call 714-399-4571 to make a confidential
                appointment.
              </p>
            </div>
            <div className="clinic-image">
              <img
                src="https://icsgv.com/wp-content/uploads/2023/08/7xm675131-1536x1024.jpg"
                alt="Mental Health Seminar"
              />
            </div>
          </div>

          {/* Second Section */}
          <div className="clinic-section">
            <div className="clinic-image">
              <img
                src="https://icsgv.com/wp-content/uploads/2023/08/7xm280875-e1693202410121-1536x1469.jpg"
                alt="Medical Clinic"
              />
            </div>
            <div className="clinic-text">
              <h2 style={{ color: "#000" }}>Medical Clinic</h2>
              <p>
                The health committee of the Islamic Center of San Gabriel Valley
                (ICSGV) is committed to the health and well-being of our
                community. The health committee operates a medical clinic, which
                is open every Sunday from 11:00 AM to 1:00 PM during the Islamic
                School calendar year from September to May.
              </p>
              <ul className="clinic-list">
                <li>Colds & Flu</li>
                <li>Blood Pressure</li>
                <li>Diabetes</li>
                <li>Old-age diseases</li>
                <li>Cholesterol</li>
                <li>Arthritis</li>
                <li>Osteoporosis</li>
              </ul>
              <p>
                Looking to help? Are you a doctor, dentist, pharmacist, nurse,
                medical or dental assistant, please contact the Islamic Center
                to volunteer your services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinic;
