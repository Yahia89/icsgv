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
          <p>Welcome Ramadan Event{" "}
          <a 
            href="https://drive.google.com/file/d/1VQ_pCcw6Dz0FIAUPxw08AJxqXD8ZxcFK/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            link (Friday, February 13 - After Isha at 7:30pm).
          </a></p>
          Note: You can view or download the whole month of prayer times on this{" "}
          <a 
            href="https://drive.google.com/file/d/10g0Ka3-bfzINYnecDsD4AcoUDupkYckV/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            link (February).
          </a>
          <p>view or download the whole month of prayer times on this{" "}
          <a 
            href="https://drive.google.com/file/d/15cuvhhE5R0LHfALMN8jCpvM1Ijtr1o6t/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            link (March).
          </a></p>
          <p>view or download the whole month of prayer times on this{" "}
          <a 
            href="https://drive.google.com/file/d/1L-Pq8JnAouxPac6Rz3-ftDrdBdKq6JpX/view?pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            link (Ramadan).
          </a></p>
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
