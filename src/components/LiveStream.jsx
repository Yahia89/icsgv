import { useState, useEffect, useCallback } from "react";
import SEO from './SEO';
import "./LiveStream.css";
import { NavLink } from "react-router-dom";

// Cache durations: recent videos (1 hour) and live status (1 minute)
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour for recent videos
const LIVE_STATUS_CACHE_DURATION = 60 * 1000; // 1 minute for live status

const LiveStream = () => {
  const [isLive, setIsLive] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [recentVideos, setRecentVideos] = useState([]);

  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

  // Helpers for caching recent videos
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

  // Helpers for caching live status (using sessionStorage)
  const getCachedLiveStatus = () => {
    const cached = sessionStorage.getItem("liveStatus");
    if (cached) {
      const { isLive, videoId, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < LIVE_STATUS_CACHE_DURATION) {
        return { isLive, videoId };
      }
    }
    return null;
  };

  const setCachedLiveStatus = (isLive, videoId) => {
    sessionStorage.setItem("liveStatus", JSON.stringify({ isLive, videoId, timestamp: Date.now() }));
  };

  const fetchData = useCallback(async () => {
    // Check live status cache
    const cachedLive = getCachedLiveStatus();
    // Check recent videos cache
    const cachedRecentVideos = getCachedData("recentVideos");

    if (cachedLive) {
      setIsLive(cachedLive.isLive);
      setVideoId(cachedLive.videoId);
    }
    if (cachedRecentVideos) {
      setRecentVideos(cachedRecentVideos);
    }

    // Validate environment variables
    if (!apiKey || !channelId) {
      console.error("Missing YouTube API credentials");
      return;
    }

    try {
      // Fetch live stream status
      const liveUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&eventType=live&key=${apiKey}`;
      console.log("Fetching live status from:", liveUrl);

      const liveResponse = await fetch(liveUrl);
      const liveData = await liveResponse.json();

      if (liveData.error) {
        console.error("Live stream API error:", liveData.error);
        return;
      }

      if (liveData.items && liveData.items.length > 0) {
        setIsLive(true);
        setVideoId(liveData.items[0].id.videoId);
        setCachedLiveStatus(true, liveData.items[0].id.videoId);
      } else {
        setIsLive(false);
        setVideoId("");
        setCachedLiveStatus(false, "");
      }

      // Fetch recent videos
      const recentUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=3&key=${apiKey}`;
      console.log("Fetching recent videos from:", recentUrl);

      const recentResponse = await fetch(recentUrl);
      const recentData = await recentResponse.json();

      if (recentData.error) {
        console.error("Recent videos API error:", recentData.error);
        return;
      }

      if (recentData.items && recentData.items.length > 0) {
        const videoIds = recentData.items.map(video => video.id.videoId).join(",");
        const statsUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${apiKey}`;
        console.log("Fetching video stats from:", statsUrl);

        const statsResponse = await fetch(statsUrl);
        const statsData = await statsResponse.json();

        if (statsData.error) {
          console.error("Video stats API error:", statsData.error);
          // Still show videos without stats
          setRecentVideos(recentData.items.map(video => ({
            ...video,
            statistics: {}
          })));
          setCachedData("recentVideos", recentData.items);
          return;
        }

        const videosWithStats = recentData.items.map((video, index) => ({
          ...video,
          statistics: statsData.items[index]?.statistics || {}
        }));

        setRecentVideos(videosWithStats);
        setCachedData("recentVideos", videosWithStats);
      }
    } catch (error) {
      console.error("Failed to fetch videos:", error);
    }
  }, [apiKey, channelId]);

  useEffect(() => {
    fetchData();
    // Re-check live status every minute to keep the UI updated.
    const interval = setInterval(fetchData, LIVE_STATUS_CACHE_DURATION);
    return () => clearInterval(interval);
  }, [fetchData]);

  const formatNumber = (num) => {
    if (!num) return "0";
    return num >= 1_000_000
      ? (num / 1_000_000).toFixed(1) + 'M'
      : num >= 1_000
        ? (num / 1_000).toFixed(1) + 'K'
        : num.toString();
  };

  return (
    <>
      <SEO
        title="Live Stream | Islamic Center of San Gabriel Valley (ICSGV)"
        description="Watch ICSGV's live streams and recent recordings of Jummah prayers, special events, and Islamic lectures."
      />
      <div className="main">
        <div className="wrapper">
          <svg>
            <text x="50%" y="50%" dy=".35em" textAnchor="middle">
              مسجد قباء
            </text>
          </svg>
          <h5 className="Assalamualaikum">Assalamualaikum</h5>
          <h1 className="welcome">
            Welcome to ICSGV! Check out our YouTube channel for live streams and recordings!
          </h1>
          <a
            href="https://www.youtube.com/@ICSGV-Quba/streams"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 24px',
              backgroundColor: '#fff',
              color: 'red',
              borderRadius: '5px',
              textDecoration: 'none',
              fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              fontStyle: 'italic',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <i className="fab fa-youtube" style={{ marginRight: '8px', fontSize: '1.2em' }}></i>
            ICSGV Channel
          </a>

          <div className="live-status">
            {isLive ? (
              <div>
                <p className="live-text">We are live now!</p>
                <div className="video-container">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
                    title="YouTube Live Stream"
                    frameBorder="0"
                    allow="accelerometer; encrypted-media; gyroscope;"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ) : (
              <p className="offline-text">Currently offline</p>
            )}
          </div>

          <div className="recent-videos">
            <h2>Recent Streams You Might Enjoy</h2>
            <div className="videos-grid">
              {recentVideos.map(video => (
                <div key={video.id.videoId} className="video-item">
                  <div className="video-container">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=0`}
                      title={video.snippet.title}
                      frameBorder="0"
                      allow="accelerometer; encrypted-media; gyroscope;"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3>{video.snippet.title}</h3>
                  <div className="video-stats">
                    <span><i className="fas fa-eye"></i> {formatNumber(video.statistics?.viewCount)} views</span>
                    <span><i className="fas fa-thumbs-up"></i> {formatNumber(video.statistics?.likeCount)} likes</span>
                  </div>
                  <p>{new Date(video.snippet.publishTime).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer with legal disclosures */}
      <footer className="footer" style={{ padding: "1rem", textAlign: "center", fontSize: "0.9rem", background: "#f8f8f8", marginTop: "2rem" }}>
        <p>
          By using this website, you agree to be bound by the&nbsp;
          <a
            href="https://www.youtube.com/t/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube Terms of Service
          </a>.

        </p>
        <p>
          Our&nbsp;
          <NavLink to="/termsofuse" >
            Privacy Policy
          </NavLink>&nbsp;
          explains how we collect, use, and share your data. This site uses YouTube API Services, and data may be collected from your device as described in our Privacy Policy. For additional details, please see&nbsp;
          <a
            href="https://policies.google.com/privacy?hl=en-US"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google's Privacy Policy
          </a>.
        </p>
      </footer>
    </>
  );
};

export default LiveStream;
