import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const NotFound = () => {
  return (
    <>
    <SEO 
    title="ICSGV | Not Found"
    description="Welcome to the Islamic Center of San Gabriel Valley. Serving the community for over 40 years with educational and religious services."
    preloadImage={masjidImage}
    priority="high"
  />
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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>404</h1>
      <h2 style={{ marginBottom: '20px' }}>Page Not Found</h2>
      <p style={{ marginBottom: '30px' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" style={{
        padding: '10px 20px',
        backgroundColor: '#0078D4',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.3s'
      }}>
        Return to Home
      </Link>
    </div>
    </div>
    </>
  );
};

export default NotFound;