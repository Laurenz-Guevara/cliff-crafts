import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import '../styles/components/splashpage.scss';

export function Splashpage() {
  return (
    <>
      <div className="splashpage">
        <div className="hero-container">
          <div className="hero">
            <h1>CLIFFCRAFTS</h1>
            <h2>AFFORDABLE CLIMBING GEAR FROM BRANDS YOU TRUST</h2>
            <button className="cta-button">
              <NavLink to="/store">SHOP NOW</NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
