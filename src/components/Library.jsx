// Library.jsx
import "./Library.css";
import SEO from './SEO';
import libraryImage from "../assets/shutterstock_1608535966-min.jpg"; 


const Library = () => {
  return (
    <div className="main">
      <SEO 
        title="ICSGV | Library" 
        description="Discover our extensive library featuring over 6000 books and media in multiple languages."
        imageType="image/webp"
        preloadImage={libraryImage}
        priority="high"
      />
      <div className="wrapper">
        <h5 className="assalamualaikum">Assalamualaikum</h5>
        <h1 className="welcome">
          Welcome to the Islamic Center of San Gabriel Valley (ICSGV)
        </h1>
        <div
          className="library"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "20px",
            color: "#000",
            textAlign: "left",
          }}
        >
          <div style={{ flex: 1, paddingRight: "20px" }}>
            <h2>Open Hours: 10:30AM - 1PM Sundays Open During School Year</h2>
            <h3>
              The ICSGV hosts over 6000 books and pieces of media, catalogued on
              a computer. The items are available in multiple languages:
              English, Arabic, and Spanish. The library is always open for
              donations and donors/sponsors to expand our collection. Members
              can check out 3 books for 3 weeks at a time. Students check out 1
              book a week.
            </h3>
          </div>
          <div style={{ flex: 1 }}>
            <img
              src={libraryImage}
              alt="Library"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
