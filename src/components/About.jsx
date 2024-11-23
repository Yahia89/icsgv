import React, {useEffect} from "react";
import "./About.css"; // Ensure to create corresponding CSS file

const About = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const shoora = [
    {
      name: "Aziz Uattar",
      role: "President",
      imageUrl: "https://icsgv.com/wp-content/uploads/2023/10/Aziz_Elattar.png",
    },
    {
      name: "Abdul-Sattar Siddiq",
      role: "Secretary",
      imageUrl: "https://icsgv.com/wp-content/uploads/2023/10/Abdul_Sattar.png",
    },
    {
      name: "Salah Qasqas",
      role: "Treasurer",
      imageUrl:
        "https://icsgv.com/wp-content/uploads/2023/10/Mouayyed_Abulashin.png",
    },
    {
      name: "Mouayyed Abulshin",
      role: "Vice President",
      imageUrl: "https://icsgv.com/wp-content/uploads/2023/10/Salah_Qasqas.png",
    },
    {
      name: "Amin Almuhajab",
      role: "Co-Secretary",
      imageUrl:
        "https://icsgv.com/wp-content/uploads/2023/10/Amin_Almuhajab.png",
    },
  ];

  const trustees = [
    {
      name: "Haji Shahabuddin",
      role: "Trustee",
      imageUrl:
        "https://icsgv.com/wp-content/uploads/2023/10/Haji_Shahabuddin.png",
    },
    {
      name: "Junaid Farooqui",
      role: "Trustee",
      imageUrl:
        "https://icsgv.com/wp-content/uploads/2023/10/Junaid_Farooqui.png",
    },
    {
      name: "Imran Parekh",
      role: "Trustee",
      imageUrl: "https://icsgv.com/wp-content/uploads/2023/10/Imran_Parekh.png",
    },
    {
      name: "Nabil Diab",
      role: "Trustee",
      imageUrl: "https://icsgv.com/wp-content/uploads/2023/10/Nabil_Diab.png",
    },
    {
      name: "Khalid Hassan",
      role: "Trustee",
      imageUrl:
        "https://icsgv.com/wp-content/uploads/2023/10/Khalid_Hassan.png",
    },
  ];

  const special = [
    {
      name: "Imam Hassan",
      role: "Masjid Imam",
      imageUrl:
        "https://icsgv.com/wp-content/uploads/2023/10/MicrosoftTeams-image-11.png",
    },
    {
      name: "Muhammad Asad",
      role: "Administrator",
      imageUrl: "https://icsgv.com/wp-content/uploads/2023/10/Asad.png",
    },
  ];

  const facilityCrew = [
    {
      name: "Naseem Khan",
      role: "Facility Staff",
      imageUrl: "https://icsgv.com/wp-content/uploads/2023/08/blank-man.jpg",
    },
    {
      name: "Abdul Ghaffar",
      role: "Facility Staff",
      imageUrl: "https://icsgv.com/wp-content/uploads/2023/08/blank-man.jpg",
    },
    {
      name: "Miguel Escobedo",
      role: "Facility Staff",
      imageUrl: "https://icsgv.com/wp-content/uploads/2023/08/blank-man.jpg",
    },
    {
      name: "Egles Camey",
      role: "Facility Staff",
      imageUrl: "https://icsgv.com/wp-content/uploads/2023/08/blank-man.jpg",
    },
  ];

  const TeamSection = ({ title, members }) => (
    <div className="team-section">
      <h2 className="section-title">{title}</h2>
      <div className="members-container">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <div className="image-container">
              <img src={member.imageUrl} alt={member.name} />
            </div>
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="main">
      <div className="wrapper">
        <svg>
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            مسجد قباء
          </text>
        </svg>
      </div>
      <h5 className="assalamualaikum">Assalamualaikum</h5>
      <h1 className="welcome">
        Welcome to the Islamic Center of San Gabriel Valley (ICSGV)
      </h1>
      <div className="team-container">
        <h1 className="main-title">Our Team</h1>
        <TeamSection title="Shoora" members={shoora} />
        <TeamSection title="Trustees" members={trustees} />
        <div className="team-section">
          <div className="members-container special-members">
            {special.map((member, index) => (
              <div key={index} className="member-card">
                <div className="image-container">
                  <img src={member.imageUrl} alt={member.name} />
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        <TeamSection title="Facility Crew" members={facilityCrew} />
      </div>
    </div>
  );
};

export default About;
