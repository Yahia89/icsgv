import { useEffect } from "react";
import SEO from './SEO';
import { usePrayerTimes } from '../context/PrayerTimesContext';

const PrayerTimes = () => {
  const { iframeLoaded, setIframeLoaded } = usePrayerTimes();

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
    return () => window.removeEventListener("message", handleMessage);
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
            href="https://drive.google.com/file/d/1XbnwDH38PrtQLJ5Rh1RfNNUGPekpU_bb/view?usp=drive_link"
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
            {!iframeLoaded && (
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
                importance="high"
                onLoad={() => setIframeLoaded(true)}
              ></iframe>
            )}
            {iframeLoaded && (
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
                importance="high"
              ></iframe>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default PrayerTimes;
