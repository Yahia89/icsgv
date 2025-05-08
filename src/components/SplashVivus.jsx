import React, { useEffect } from 'react';
import './SplashVivus.css';
import logo from '../assets/logo-icsgv.png';

export default function SplashVivus({ onAnimationEnd }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof onAnimationEnd === 'function') {
        onAnimationEnd();
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="splash-container">
      <div className="logo-container">
        <img 
          src={logo} 
          alt="ICSGV Logo" 
          className="logo-image" 
          width="300"
          height="300"
        />
      </div>
    </div>
  );
}
