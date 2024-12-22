import "./Library.css";

const Library = () => {
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
              src="https://icsgv.com/wp-content/uploads/2023/09/shutterstock_1608535966-1536x1024.jpg"
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
