import { useState, useEffect } from "react";

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
        <div>
          {isLive ? (
            <div>
              <p style={{ color: "green", fontWeight: "bold" }}>
                We are live now!
              </p>
              {/* Embed the live video */}
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube Live Stream"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <p style={{ color: "red", fontWeight: "bold" }}>
              Currently offline
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveStream;
