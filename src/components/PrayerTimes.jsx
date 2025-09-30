import { useEffect } from "react";
import SEO from './SEO';

const PrayerTimes = () => {
  useEffect(() => {
    // Preconnect to speed up connection to the domain hosting the iframe
    const preconnectLink = document.createElement("link");
    preconnectLink.rel = "preconnect";
    preconnectLink.href = "https://themasjidapp.org";
    document.head.appendChild(preconnectLink);

    // Prefetch the iframe content
    const prefetchLink = document.createElement("link");
    prefetchLink.rel = "prefetch";
    prefetchLink.href = "https://themasjidapp.org/296/prayers";
    prefetchLink.as = "document";
    document.head.appendChild(prefetchLink);

    // Add message event listener (unchanged)
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

    // Cleanup on unmount
    return () => {
      window.removeEventListener("message", handleMessage);
      document.head.removeChild(preconnectLink);
      document.head.removeChild(prefetchLink);
    };
  }, []);

  return (
    <>
      <SEO 
        title="Islamic Center of San Gabriel Valley (ICSGV) | Prayer Times | Comprehensive Islamic Services | Live Streaming Khutba | Masjid near | Mosque near"
        description="Daily prayer times for ICSGV mosque. View Fajr, Dhuhr, Asr, Maghrib, and Isha prayer timings updated daily for the Islamic Center of San Gabriel Valley."
      />
      <div className="main">
        
        
        <h3
          style={{
            textAlign: "center",
            padding: "10px",
            color: "#000",
            fontStyle: "italic",
          }}
        >
          Note: You can view or download the whole month of prayer times on this{" "}
          <a 
            href="https://drive.google.com/file/d/1K7xA54qtCOBbCqx4ygDUqRE1Mj44kIx_/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            link.
          </a>
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
              // Removed loading="lazy" to ensure immediate loading
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrayerTimes;
