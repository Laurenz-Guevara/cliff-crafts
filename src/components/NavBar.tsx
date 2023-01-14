import { useState, useEffect } from 'react';
import { client } from '../../client';
import { NavLink } from 'react-router-dom';

import '../styles/components/navbar.scss';

export function NavBar() {
  const [inputValue, setInputValue] = useState('');
  const [openClimbingShoes, setClimbingShoes] = useState(false);
  const [openAccessories, setAccessories] = useState(false);
  const [openDeals, setDeals] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);
  let [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [data2, setData2] = useState<any>();
  const [selected, setSelected] = useState<any>();
  const handleUserInput = (e: any) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  //Note useState would trigger the API to make another call, possibly try useRef() - This might be untrue as its before the return

  useEffect(() => {
    setLoading(true);
    console.log('useEffect - Fire');
    client
      .fetch(
        `*[_type == "product"]{
          productName,
          price
          }`
      )
      .then((data) => (setData(data), console.log('Called nav useEffect')))
      .catch(console.error);

    client
      .fetch(
        `*[_type == "meganav"]{
          navheader,
          slug,
          navelement
          }`
      )
      .then(
        (data2) => (
          setData2(data2),
          setLoading(false),
          console.log('Called nav useEffect')
        )
      )
      .catch(console.error);
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

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
            {
              console.log('Open burger');
            }
          }}
        >
          <i className="fas fa-bars burger"></i>{' '}
          {openBurger && <Meganav data2={data2} selected={''} />}
        </div>
        <div className="nav-right">
          <ul className="navbar-nav">
            <li
              onMouseEnter={() => {
                setClimbingShoes(true), setSelected('climbing-shoes');
              }}
              onMouseLeave={() => setClimbingShoes(!openClimbingShoes)}
              onClick={() => {
                setClimbingShoes(!openClimbingShoes);
                setAccessories(false);
                setDeals(false);
                setSelected('climbing-shoes');
              }}
            >
              <a href="#" className={openClimbingShoes ? 'toggled-btn' : ''}>
                Climbing Shoes <i className="fas fa-chevron-down"></i>
              </a>
              {openClimbingShoes && (
                <Meganav data2={data2} selected={selected} />
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

              {openAccessories && <Meganav data2={data2} selected={selected} />}
            </li>
            <li
              onMouseEnter={() => {
                setDeals(true), setSelected('deals');
              }}
              onMouseLeave={() => setDeals(false)}
              onClick={() => {
                setAccessories(false);
                setClimbingShoes(false);
                setDeals(!openDeals);
                setSelected('deals');
              }}
            >
              <a href="#" className={openDeals ? 'toggled-btn' : ''}>
                Deals <i className="fas fa-chevron-down"></i>
              </a>

              {openDeals && <Meganav data2={data2} selected={selected} />}
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

function Meganav(props: { data2: any[]; selected: string }) {
  return (
    <div className="mega-menu">
      <ol>
        {props &&
          props.data2
            .filter((x) => x.slug.current.includes(props.selected))
            .map((item) => (
              <li key={item.navheader}>
                <h1>
                  <NavLink
                    to={'/collection/' + item.slug.current}
                    className="list-link"
                  >
                    {item.navheader}
                  </NavLink>
                </h1>
                {item.navelement.map((x: any) => (
                  <p key={x}>
                    <NavLink
                      to={
                        '/collection/' +
                        x.replace(/[^A-Z0-9]/gi, '').toLowerCase()
                      }
                      className="list-link"
                    >
                      {x}
                    </NavLink>
                  </p>
                ))}
              </li>
            ))}
      </ol>
    </div>
  );
}
