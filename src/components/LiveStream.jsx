import { useState, useEffect, useCallback } from "react";
import SEO from './SEO';
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
      // Fetch live status
      const liveResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&eventType=live&key=${apiKey}`
      );
      const liveData = await liveResponse.json();

      if (liveData.items && liveData.items.length > 0) {
        setIsLive(true);
        setVideoId(liveData.items[0].id.videoId);
      } else {
        setIsLive(false);
      }

      // Fetch recent videos
      const recentResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=3&key=${apiKey}`
      );
      const recentData = await recentResponse.json();

      if (recentData.items) {
        // Fetch statistics for each video
        const videosWithStats = await Promise.all(
          recentData.items.map(async (video) => {
            const statsResponse = await fetch(
              `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${video.id.videoId}&key=${apiKey}`
            );
            const statsData = await statsResponse.json();
            return {
              ...video,
              statistics: statsData.items[0].statistics
            };
          })
        );
        setRecentVideos(videosWithStats);
      }
    } catch (error) {
      console.error("Failed to fetch videos:", error);
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
      // Fetch recent videos first
      const recentResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=3&key=${apiKey}`
      );
      const recentData = await recentResponse.json();

      if (recentData.items) {
        // Fetch statistics for each video
        const videosWithStats = await Promise.all(
          recentData.items.map(async (video) => {
            const statsResponse = await fetch(
              `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${video.id.videoId}&key=${apiKey}`
            );
            const statsData = await statsResponse.json();
            return {
              ...video,
              statistics: statsData.items[0].statistics
            };
          })
        );
        setRecentVideos(videosWithStats);
        setCachedData(cacheKey, videosWithStats);
      }
    } catch (error) {
      console.error("Failed to fetch recent videos:", error);
    }
  }, [apiKey, channelId]);

  useEffect(() => {
    fetchLiveStatus();
    fetchRecentVideos();
  }, [fetchLiveStatus, fetchRecentVideos]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  return (
    <>
      <SEO 
        title="Live Stream | Islamic Center of San Gabriel Valley (ICSGV)"
        description="Watch ICSGV's live streams and recent recordings of Jummah prayers, special events, and Islamic lectures. Stay connected with our mosque's activities and spiritual programs."
      />
      <div className="main">
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
          <h1 className="welcome">
            Don't forget to check out our YouTube channel for live streams and recordings!
            <div className="youtube-section" style={{
              width: '100%',
              maxWidth: '100%',
              padding: '0 1rem',
              boxSizing: 'border-box',
              margin: '0 auto'
            }}>
             <p style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              color: '#666',
              marginBottom: '20px',
              lineHeight: '1.5'
            }}>
              Join us on YouTube for live streams of Jummah prayers, special events, and Islamic lectures
            </p>
            <a
              href="https://www.youtube.com/@islamiccenterofsangabrielv9472/streams"
              target="_blank"
              className="social-icon"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 24px',
                backgroundColor: '#2f2f2f',
                color: 'white',
                borderRadius: '5px',
                textDecoration: 'none',
                fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <i className="fab fa-youtube" style={{ marginRight: '8px', fontSize: '1.2em' }}></i>
              ICSGV Channel
            </a>
            </div>
          </h1>
          <div className="live-status">
            {isLive ? (
              <div>
                <p className="live-text">We are live now!</p>
                <div className="video-container">
                  <iframe
                    src={`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&eventType=live&key=${apiKey}`}
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
                      <i className="fas fa-eye"></i> {formatNumber(video.statistics?.viewCount || 0)} views
                    </span>
                    <span>
                      <i className="fas fa-thumbs-up"></i> {formatNumber(video.statistics?.likeCount || 0)} likes
                    </span>
                  </div>
                  <p>{new Date(video.snippet.publishTime).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default LiveStream;


