import { useState, useEffect } from "react";
import "./LiveStream.css"; // Import the CSS file

const LiveStream = () => {
  const [isLive, setIsLive] = useState(false);
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
    const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

    const checkLiveStatus = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&eventType=live&key=${apiKey}`
        );
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setIsLive(true);
          setVideoId(data.items[0].id.videoId); // Set the videoId of the live stream
        } else {
          setIsLive(false);
        }
      } catch (error) {
        console.error("Failed to fetch live status:", error);
      }
    };

    checkLiveStatus();
  }, []);

  return (
    <div className="live-stream-container">
      <div className="wrapper">
        <svg className="logo">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            مسجد قباء
          </text>
        </svg>
        <h5 className="assalamualaikum">Assalamualaikum</h5>
        <h1 className="welcome">
          Welcome to the Islamic Center of San Gabriel Valley (ICSGV)
        </h1>
        <div className="live-status">
          {isLive ? (
            <div>
              <p className="live-text">We are live now!</p>
              {/* Embed the live video */}
              <div className="video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube Live Stream"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ) : (
            <p className="offline-text">Currently offline</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveStream;
