import { useState, useEffect } from 'react';
import { client } from '../../client';
import { NavLink } from 'react-router-dom';

import '../styles/components/navbar.scss';
import { Meganav } from './Meganav';

export function NavBar() {
  const [inputValue, setInputValue] = useState('');
  const [openClimbingShoes, setClimbingShoes] = useState(false);
  const [openAccessories, setAccessories] = useState(false);
  const [openDeals, setDeals] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);
  const [data, setData] = useState<Collection[]>();
  let [selected, setSelected] = useState<any>();
  const handleUserInput = (e: any) => {
    setInputValue(e.target.value);
  };

  //Note useState would trigger the API to make another call, possibly try useRef() - This might be untrue as its before the return

  useEffect(() => {
    client
      .fetch(
        `*[_type == "meganav"]{
          navheader,
          category,
          slug,
          navelement
          }`
      )
      .then((data) => setData(data))
      .catch(console.error);
  }, []);

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
          <i className="fas fa-bars burger"></i>{' '}
          {openBurger && <Meganav data={data!} selected={''} />}
        </div>
        <div className="nav-right">
          <ul className="navbar-nav">
            <li
              onMouseEnter={() => {
                setClimbingShoes(true), setSelected('climbing');
              }}
              onMouseLeave={() => setClimbingShoes(!openClimbingShoes)}
              onClick={() => {
                setClimbingShoes(!openClimbingShoes);
                setAccessories(false);
                setDeals(false);
                setSelected('climbing');
              }}
            >
              <a href="#" className={openClimbingShoes ? 'toggled-btn' : ''}>
                Climbing <i className="fas fa-chevron-down"></i>
              </a>
              {openClimbingShoes && (
                <Meganav data={data!} selected={selected} />
              )}
            </li>
            <li
              onMouseEnter={() => {
                setAccessories(true), setSelected('accessories');
              }}
              onMouseLeave={() => setAccessories(false)}
              onClick={() => {
                setAccessories(!openAccessories);
                setClimbingShoes(false);
                setDeals(false);
                setSelected('accessories');
              }}
            >
              <a href="#" className={openAccessories ? 'toggled-btn' : ''}>
                Accessories <i className="fas fa-chevron-down"></i>
              </a>

              {openAccessories && <Meganav data={data!} selected={selected} />}
            </li>
            <li
              onMouseEnter={() => {
                setDeals(true), setSelected('camping');
              }}
              onMouseLeave={() => setDeals(false)}
              onClick={() => {
                setAccessories(false);
                setClimbingShoes(false);
                setDeals(!openDeals);
                setSelected('camping');
              }}
            >
              <a href="#" className={openDeals ? 'toggled-btn' : ''}>
                Camping <i className="fas fa-chevron-down"></i>
              </a>

              {openDeals && <Meganav data={data!} selected={selected} />}
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
