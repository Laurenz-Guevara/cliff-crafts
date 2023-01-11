import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/components/navbar.scss';

export function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li>
          <NavLink to={'/explore'}>Explore</NavLink>
        </li>
        <li>
          <NavLink to={'/'}>Store</NavLink>
        </li>
      </ul>
    </nav>
  );
}
