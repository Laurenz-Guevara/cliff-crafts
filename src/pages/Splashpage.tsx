import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/splashpage.scss';

export function Splashpage() {
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  };
  window.addEventListener('resize', appHeight);

  useEffect(() => {
    appHeight();
  }, []);

  return (
    <>
      <div className="splashpage">
        <div className="hero-container">
          <div className="hero">
            <h1>CLIFFCRAFTS</h1>
            <h2>AFFORDABLE CLIMBING GEAR FROM BRANDS YOU TRUST</h2>
            <NavLink to="/store" className="cta-button" aria-label="Enter Shop">
              SHOP NOW
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
