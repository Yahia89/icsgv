import React, { useEffect } from 'react';
import './SplashVivus.css';
import logo from '../assets/logo-icsgv.png';

export default function SplashVivus({ onAnimationEnd }) {
  useEffect(() => {
    // Preload the prayer times iframe during splash screen
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'document';
    link.href = 'https://themasjidapp.org/296/prayers';
    document.head.appendChild(link);

    const timer = setTimeout(() => {
      if (typeof onAnimationEnd === 'function') {
        onAnimationEnd();
      }
      // Clean up preload link
      document.head.removeChild(link);
    }, 1500);

    return () => {
      clearTimeout(timer);
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [onAnimationEnd]);

  return (
    <div className="splash-container">
      <div className="splash-logo-container">
        <img 
          src={logo} 
          alt="ICSGV Logo" 
          className="splash-logo-image" 
          width="600"
          height="600"
        />
      </div>
    </div>
  );
}
