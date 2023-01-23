import { useState, useEffect } from 'react';
import { client } from '../../client';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../styles/components/navbar.scss';
import { Meganav } from './Meganav';

export function NavBar() {
  const [inputValue, setInputValue] = useState('');
  const [openClimbingShoes, setClimbingShoes] = useState(false);
  const [openAccessories, setAccessories] = useState(false);
  const [openDeals, setDeals] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);
  const [data, setData] = useState<Collection[]>();
  let [selected, setSelected] = useState<string>();
  const navigate = useNavigate();
  const checkoutItems = useSelector((state: any) => state.cart);

  const handleUserInput = (e: any) => {
    setInputValue(e.target.value);
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    navigate('/search/' + inputValue);
  }
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
              <NavLink
                to={''}
                className={openClimbingShoes ? 'toggled-btn' : ''}
              >
                Climbing <i className="fas fa-chevron-down"></i>
              </NavLink>
              {openClimbingShoes && (
                <Meganav data={data!} selected={selected!} />
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
              <NavLink to={''} className={openAccessories ? 'toggled-btn' : ''}>
                Accessories <i className="fas fa-chevron-down"></i>
              </NavLink>

              {openAccessories && <Meganav data={data!} selected={selected!} />}
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
              <NavLink to={''} className={openDeals ? 'toggled-btn' : ''}>
                Camping <i className="fas fa-chevron-down"></i>
              </NavLink>

              {openDeals && <Meganav data={data!} selected={selected!} />}
            </li>
            <li className="shopping-basket-container">
              <NavLink to={'/checkout'}>
                <i className="fas fa-shopping-basket"></i>{' '}
                <span className="cart-item-qty">
                  {checkoutItems.cartTotalItems !== 0
                    ? checkoutItems.cartTotalItems
                    : ''}
                </span>
              </NavLink>
            </li>
          </ul>
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
        <div className="nav-search">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for a product..."
              className="nav-search-bar"
              value={inputValue}
              onChange={handleUserInput}
            ></input>
          </form>
          <NavLink to={'/search/' + inputValue} className="search-btn-nav">
            <button className="search-btn" aria-label="Search">
              <i className="fas fa-search"></i>
            </button>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
