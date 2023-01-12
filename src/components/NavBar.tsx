import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/components/navbar.scss';

export function NavBar() {
  const [inputValue, setInputValue] = useState('');

  const handleUserInput = (e: any) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  function toggleMenu() {
    console.log('Menu');
  }

  return (
    <nav className="navbar wrapper">
      <div className="nav-left">
        <h1>CLIFFCRAFTS</h1>
      </div>
      <div className="nav-burger">
        <i className="fas fa-bars burger"></i>{' '}
      </div>
      <div className="nav-right">
        <ul className="navbar-nav">
          <li>
            <NavLink to={'#'}>Find A Store</NavLink>
          </li>
          <li>
            <NavLink to={'/'}>Cart</NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-search">
        <input
          type="search"
          placeholder="Search for a product..."
          className="nav-search-bar"
          value={inputValue}
          onChange={handleUserInput}
        ></input>
        <button className="search-btn">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </nav>
  );
}
