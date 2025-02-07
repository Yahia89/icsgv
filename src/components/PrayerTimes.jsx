import { useEffect, useState } from "react";

const PrayerTimes = () => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  useEffect(() => {
    // If accessed directly (not through Home), load immediately
    if (window.location.pathname === '/prayertimes') {
      setIsIframeLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIframeLoaded(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const prayerSection = document.querySelector('.prayer-times-heading');
    if (prayerSection) {
      observer.observe(prayerSection);
    } else {
      // If prayer-times-heading not found, we're on the direct route
      setIsIframeLoaded(true);
    }

    return () => observer.disconnect();
  }, []);

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

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
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
        <h3
          style={{
            textAlign: "center",
            padding: "10px",
            color: "#000",
            fontStyle: "italic",
          }}
        >
          Note: You can view or download the whole month of prayer times on this{" "}
          <a href="https://drive.google.com/file/d/14iOVr1bvXxn5xfCkzXQ78djnhwQcxWZj/view">
            link
          </a>
          . (pdf)
        </h3>
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
            {isIframeLoaded ? (
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
                loading="lazy"
              ></iframe>
            ) : (
              <div style={{
                height: "502px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f5f5f5"
              }}>
                Loading Prayer Times...
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default PrayerTimes;
