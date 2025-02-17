import { useState, useEffect, useCallback } from "react";
import SEO from './SEO';
import "./LiveStream.css";

const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

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

  const fetchData = useCallback(async () => {
    const cachedLiveStatus = sessionStorage.getItem("liveStatus");
    const cachedRecentVideos = getCachedData("recentVideos");

    if (cachedLiveStatus) {
      const { isLive, videoId } = JSON.parse(cachedLiveStatus);
      setIsLive(isLive);
      setVideoId(videoId);
    }

    if (cachedRecentVideos) {
      setRecentVideos(cachedRecentVideos);
    }

    if (!cachedLiveStatus || !cachedRecentVideos) {
      try {
        const [liveResponse, recentResponse] = await Promise.all([
          fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&eventType=live&key=${apiKey}`),
          fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=3&key=${apiKey}`)
        ]);

        const liveData = await liveResponse.json();
        const recentData = await recentResponse.json();

        if (!cachedLiveStatus) {
          if (liveData.items && liveData.items.length > 0) {
            setIsLive(true);
            setVideoId(liveData.items[0].id.videoId);
            sessionStorage.setItem("liveStatus", JSON.stringify({ isLive: true, videoId: liveData.items[0].id.videoId }));
          } else {
            setIsLive(false);
            sessionStorage.setItem("liveStatus", JSON.stringify({ isLive: false, videoId: "" }));
          }
        }

        if (!cachedRecentVideos && recentData.items) {
          const videoIds = recentData.items.map(video => video.id.videoId).join(",");
          const statsResponse = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${apiKey}`);
          const statsData = await statsResponse.json();

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
    }
  }, [apiKey, channelId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const formatNumber = (num) => {
    if (!num) return "0";
    return num >= 1_000_000 ? (num / 1_000_000).toFixed(1) + 'M' : 
           num >= 1_000 ? (num / 1_000).toFixed(1) + 'K' : 
           num.toString();
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
              href="https://www.youtube.com/@islamiccenterofsangabrielv9472/streams"
              target="_blank"
              className="social-icon"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 24px',
                backgroundColor: '#2f2f2f',
                color: 'red',
                borderRadius: '5px',
                textDecoration: 'none',
                fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
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
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube Live Stream"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
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
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title={video.snippet.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
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
    </>
  );
};

export default LiveStream;
