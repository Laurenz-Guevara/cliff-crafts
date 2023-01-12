import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/components/navbar.scss';

export function NavBar() {
  const [inputValue, setInputValue] = useState('');
  const [openClimbingShoes, setClimbingShoes] = useState(false);
  const [openAccessories, setAccessories] = useState(false);
  const [openDeals, setDeals] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);

  const handleUserInput = (e: any) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  //Note useState would trigger the API to make another call, possibly try useRef()

  return (
    <div className="wrapper">
      <nav className="navbar">
        <div className="nav-left">
          <NavLink to={'/store'}>CLIFFCRAFTS</NavLink>
        </div>
        <div
          className="nav-burger"
          onClick={() => {
            setOpenBurger(!openBurger);
          }}
        >
          <i className="fas fa-bars burger"></i> {openBurger && <Meganav />}
        </div>
        <div className="nav-right">
          <ul className="navbar-nav">
            <li
              onMouseEnter={() => setClimbingShoes(true)}
              onMouseLeave={() => setClimbingShoes(!openClimbingShoes)}
              onClick={() => {
                setClimbingShoes(!openClimbingShoes);
                setAccessories(false);
                setDeals(false);
              }}
            >
              <a href="#" className={openClimbingShoes ? 'toggled-btn' : ''}>
                Climbing Shoes <i className="fas fa-chevron-down"></i>
              </a>

              {openClimbingShoes && <Meganav />}
            </li>
            <li
              onMouseEnter={() => setAccessories(true)}
              onMouseLeave={() => setAccessories(false)}
              onClick={() => {
                setAccessories(!openAccessories);
                setClimbingShoes(false);
                setDeals(false);
              }}
            >
              <a href="#" className={openAccessories ? 'toggled-btn' : ''}>
                Accessories <i className="fas fa-chevron-down"></i>
              </a>

              {openAccessories && <Meganav />}
            </li>
            <li
              onMouseEnter={() => setDeals(true)}
              onMouseLeave={() => setDeals(false)}
              onClick={() => {
                setAccessories(false);
                setClimbingShoes(false);
                setDeals(!openDeals);
              }}
            >
              <a href="#" className={openDeals ? 'toggled-btn' : ''}>
                Deals <i className="fas fa-chevron-down"></i>
              </a>

              {openDeals && <Meganav />}
            </li>
            <li>
              <NavLink to={'/checkout'}>
                <i className="fas fa-shopping-basket"></i>{' '}
              </NavLink>
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
    </div>
  );
}

function Meganav(props: any) {
  return (
    <div className="mega-menu">
      <ol>
        <li>
          <a href="#" className="list-link">
            Link
          </a>
        </li>
        <li>
          <a href="#" className="list-link">
            Link
          </a>
        </li>
        <li>
          <a href="#" className="list-link">
            Link
          </a>
        </li>
      </ol>
      <ol>
        <li>
          <a href="#" className="list-link">
            Link
          </a>
        </li>
        <li>
          <a href="#" className="list-link">
            Link
          </a>
        </li>
        <li>
          <a href="#" className="list-link">
            Link
          </a>
        </li>
      </ol>
    </div>
  );
}
