import { useState, useEffect, useCallback } from "react";
import SEO from "./SEO";
import "./LiveStream.css";

const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds

const LiveStream = () => {
  const [isLive, setIsLive] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [recentVideos, setRecentVideos] = useState([]);

  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

  const getCachedData = (key) => {
    const cached = localStorage.getItem(key);
    if (cached) {
      const { timestamp, data } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) {
        return data;
      }
    }
    return null;
  };

  const setCachedData = (key, data) => {
    localStorage.setItem(key, JSON.stringify({ timestamp: Date.now(), data }));
  };

  const fetchLiveStatus = useCallback(async () => {
    const cacheKey = "liveStatus";
    const cachedData = getCachedData(cacheKey);
    if (cachedData) {
      setIsLive(cachedData.isLive);
      setVideoId(cachedData.videoId);
      return;
    }

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&eventType=live&key=${apiKey}`
      );
      const data = await response.json();
      const isCurrentlyLive = data.items?.length > 0;
      const liveVideoId = isCurrentlyLive ? data.items[0].id.videoId : "";

      setIsLive(isCurrentlyLive);
      setVideoId(liveVideoId);
      setCachedData(cacheKey, { isLive: isCurrentlyLive, videoId: liveVideoId });
    } catch (error) {
      console.error("Failed to fetch live status:", error);
    }
  }, [apiKey, channelId]);

  const fetchRecentVideos = useCallback(async () => {
    const cacheKey = "recentVideos";
    const cachedData = getCachedData(cacheKey);
    if (cachedData) {
      setRecentVideos(cachedData);
      return;
    }

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=3&key=${apiKey}`
      );
      const data = await response.json();
      if (!data.items) return;

      // Fetch video statistics
      const videosWithStats = await Promise.all(
        data.items.map(async (video) => {
          try {
            const statsResponse = await fetch(
              `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${video.id.videoId}&key=${apiKey}`
            );
            const statsData = await statsResponse.json();
            return {
              ...video,
              statistics: statsData.items?.[0]?.statistics || {},
            };
          } catch {
            return { ...video, statistics: {} };
          }
        })
      );

      setRecentVideos(videosWithStats);
      setCachedData(cacheKey, videosWithStats);
    } catch (error) {
      console.error("Failed to fetch recent videos:", error);
    }
  }, [apiKey, channelId]);

  useEffect(() => {
    fetchLiveStatus();
    fetchRecentVideos();
  }, [fetchLiveStatus, fetchRecentVideos]);

  const formatNumber = (num) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num;
  };

  return (
    <>
      <SEO
        title="Live Stream | Islamic Center of San Gabriel Valley (ICSGV)"
        description="Watch ICSGV's live streams and recent recordings of Jummah prayers, special events, and Islamic lectures. Stay connected with our mosque's activities and spiritual programs."
      />
      <div className="live-stream-container">
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
          <div className="live-status">
            {isLive ? (
              <div>
                <p className="live-text">We are live now!</p>
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

          <div className="recent-videos">
            <h2>Recent Streams that you might enjoy</h2>
            <div className="videos-grid">
              {recentVideos.map((video) => (
                <div key={video.id.videoId} className="video-item">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title={video.snippet.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <h3>{video.snippet.title}</h3>
                  <div className="video-stats">
                    <span>
                      <i className="fas fa-eye"></i> {formatNumber(video.statistics.viewCount || 0)} views
                    </span>
                    <span>
                      <i className="fas fa-thumbs-up"></i> {formatNumber(video.statistics.likeCount || 0)} likes
                    </span>
                  </div>
                  <p>{new Date(video.snippet.publishTime).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveStream;
