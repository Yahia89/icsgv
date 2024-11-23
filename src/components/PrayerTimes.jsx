import { useEffect } from "react";

const PrayerTimes = () => {
  useEffect(() => {
    const handleMessage = (e) => {
      if (
        e.data &&
        e.data.type === "contentHeight" &&
        e.data.page === "prayers"
      ) {
        const targetFrame = document.getElementById("prayers-frame");
        if (targetFrame) {
          targetFrame.style.height = e.data.height + "px";
        }
      }
    };

    window.addEventListener("message", handleMessage);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

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
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "content-box",
            padding: "10px",
          }}
        >
          <div style={{ width: "100%", maxWidth: "1200px" }}>
            <iframe
              id="prayers-frame"
              src="https://themasjidapp.org/296/prayers"
              style={{
                width: "100%",
                height: "502px",
                boxSizing: "content-box",
              }}
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrayerTimes;
