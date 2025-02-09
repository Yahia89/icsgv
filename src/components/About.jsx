import React, {useEffect} from "react";
import "./About.css"; // Ensure to create corresponding CSS file
import SEO from './SEO';
// Import images
import azizImage from "../assets/Aziz_Elattar.png";
import abdulSattarImage from "../assets/Abdul_Sattar.png";
import salahImage from "../assets/Salah_Qasqas.png";
import mouayyedImage from "../assets/Mouayyed_Abulashin.png";
import aminImage from "../assets/Amin_Almuhajab.png";
import hajiImage from "../assets/Haji_Shahabuddin.png";
import junaidImage from "../assets/Junaid_Farooqui.png";
import imranImage from "../assets/Imran_Parekh.png";
import nabilImage from "../assets/Nabil_Diab.png";
import khalidImage from "../assets/Khalid_Hassan.png";
import imamImage from "../assets/MicrosoftTeams-image-11.png";
import asadImage from "../assets/Asad.png";
import blankImage from "../assets/blank-man.jpg";
import buildingImage from "../assets/Colleen_photo-5.jpg";
import fatherDaughterImage from "../assets/happy-muslim-girl-and-her-father-reading-koran-at-D5K4CE2.jpg";
import quranImage from "../assets/the-quran-the-central-religious-text-of-islam-PRGDY3Qa.jpg";
import masjidImage from "../assets/Jean-Marshall-Photography-13.jpg";
import mosqueimage from "../assets/Colleen_photo-5.jpg";

const About = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const shoora = [
    {
      name: "Aziz Al-Attar",
      role: "President",
      imageUrl: azizImage,
    },
    {
      name: "Abdul-Sattar Siddiq",
      role: "Secretary",
      imageUrl: abdulSattarImage,
    },
    {
      name: "Salah Qasqas",
      role: "Treasurer",
      imageUrl: mouayyedImage,
    },
    {
      name: "Mouayyed Abulshin",
      role: "Vice President",
      imageUrl: salahImage,
    },
    {
      name: "Amin Almuhajab",
      role: "Co-Secretary",
      imageUrl: aminImage,
    },
  ];

  const trustees = [
    {
      name: "Haji Shahabuddin",
      role: "Trustee",
      imageUrl: hajiImage,
    },
    {
      name: "Junaid Farooqui",
      role: "Trustee",
      imageUrl: junaidImage,
    },
    {
      name: "Imran Parekh",
      role: "Trustee",
      imageUrl: imranImage,
    },
    {
      name: "Nabil Diab",
      role: "Trustee",
      imageUrl: nabilImage,
    },
    {
      name: "Khalid Hassan",
      role: "Trustee",
      imageUrl: khalidImage,
    },
  ];

  const special = [
    {
      name: "Imam Hassan",
      role: "Masjid Imam",
      imageUrl: imamImage,
    },
    {
      name: "Muhammad Asad",
      role: "Administrator",
      imageUrl: asadImage,
    },
  ];

  const facilityCrew = [
    {
      name: "Naseem Khan",
      role: "Facility Staff",
      imageUrl: blankImage,
    },
    {
      name: "Abdul Ghaffar",
      role: "Facility Staff",
      imageUrl: blankImage,
    },
    {
      name: "Miguel Escobedo",
      role: "Facility Staff",
      imageUrl: blankImage,
    },
    {
      name: "Egles Camey",
      role: "Facility Staff",
      imageUrl: blankImage,
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
      <SEO 
        title="ICSGV | About Us"
        description="Learn about the Islamic Center of San Gabriel Valley, our history, and meet our team."
        preloadImage={buildingImage}
        priority="high"
      />
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
      <div className="More-about">
  <div className="history-section">
    <div className="text-content">
      <h3 style={{color:"black"}} >About ICSGV</h3>
      <h1 style={{color:"black"}} >History</h1>
      <p>
        The history of the Islamic Center of San Gabriel Valley (ICSGV) spans over four decades. The Center was established by dedicated and forward-thinking Muslims living in the larger San Gabriel Valley area – servicing cities of Walnut, Diamond Bar, Covinas, Rowland Heights, Industry and surrounding areas.
      </p>
      <p>
        In the late 1970s, several Muslim families moved into the area. At the time, the closest Masjid was over 35 miles away. Initially, Jumm’ah (Friday) and Taraweeh (Ramadan nightly) prayers were conducted in the garages of these families’ homes. As the number of Muslims continued to grow steadily, these families concluded that it was time to dedicate a formal space for praying in Jama’a (congregation) and educating themselves and their children about Islam. It was then that the concept of establishing an Islamic Center was set in motion.
      </p>
      <p>
        In early 1982, these initial families came together to rent the library room at Lorbeer Middle School — at the corner of Diamond Bar Boulevard and Golden Springs Drive in the city of Diamond Bar — on Sundays. As a small but regular number of children and adults came to the weekly gatherings, teachers taught classes covering Islamic topics around the middle school library tables. Organizers arranged for Dhur prayers to be performed in the congregation followed by a humble social hour, with families bringing food to share. Everyone stepped in to help the nascent beginnings of ICSGV.
      </p>
    </div>
    <div className="image-container-1">
      <img
        src={mosqueimage}
        alt="ICSGV Building"
      />
    </div>
  </div>

  <div className="history-section">
    <div className="image-container-2">
      <img
        src={fatherDaughterImage}
        alt="ICSGV Image"
      />
    </div>
    <div className="text-content">
      <p>
        Later that year, as the number of families further grew, the Sunday congregation moved to Diamond Bar High School’s gymnasium. Organizers erected portable partition walls on the gymnasium floor to create small, makeshift classrooms for children. In those early days, the classes were primarily divided into three age groups: elementary, middle, and senior levels. Meanwhile, the adults met in one corner of the gymnasium floor for group Qur’an reading classes led by the first ICSGV president, the late Dr. Rafiq Rangoonwalla. The echo of the Dhur Adhan (call to prayer) was so overwhelming in the gymnasium that curious students and parents would peek through the open doors out of curiosity.
      </p>
    </div>
  </div>

  <div className="history-section">
    <div className="text-content">
      <p>
        As the attendance grew, it became clear that the incipient community was outgrowing its temporary weekly accommodations and that the community needed a place to conduct daily prayers and regular classes. In late 1982, community members arranged to lease two units in a commercial strip mall on the northeast corner of Colima Road and Nogales Avenue in Rowland Heights. One unit was used as a prayer hall and the other for the newly established Weekend Islamic School, led by the late Dr. Noor Jehan Mohamadi. In this new facility, ICSGV was finally able to establish the five daily prayers (including the Jumm’ah prayer) as well as the Taraweeh prayers in Ramadan and the Eid prayers.
      </p>
    </div>
    <div className="image-container-3">
      <img
        src={quranImage}
        alt="ICSGV Quran Reading"
      />
    </div>
  </div>
  <div className="history-section">
    <div className="image-container-4">
      <img
        src={masjidImage}
        alt="ICSGV Building"
      />
    </div>
    <div className="text-content">
      <p>
        Thereafter, in early 1987, the community came together to purchase a small church located on the corner of Walnut Drive and Otterbein Avenue in Rowland Heights (our current location). In subsequent years, the community — through the efforts of numerous dedicated and generous individuals — was able to raise funds to purchase the adjoining properties, allowing for the sprawling campus on which the current ICSGV building is now located. In 2013, the community — again, through the generous and selfless efforts of numerous individuals — completed a transformative construction project to erect the 45,000-square-foot structure complete with a full-time private K-12 Islamic School, a pre-school for ages 3-5, a Saturday Arabic School, a Youth Program, Sunday Islamic School (PreK-12), a mortuary, a health clinic, and a library.
      </p>
      <p>
        Several of the key community members who were instrumental in the establishment and continued operation of ICSGV have now passed away. May Allah (swt) bless their souls and grant them a place in His Jannah (Paradise) — Ameen!
      </p>
    </div>
  </div>
</div>

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
