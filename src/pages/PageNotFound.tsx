import { NavLink } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import CliffCrafts404 from '../assets/cliff-crafts-404.png';

import '../styles/pages/pageNotFound.scss';
import { Footer } from '../components/Footer';

export function PageNotFound() {
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="page-not-found-container">
          <h1>404</h1>
          <div className="not-found-image-container">
            <img src={CliffCrafts404} className="not-found-image"></img>
          </div>
          <h2>Sorry we couldn't find the page you were looking for. </h2>

          <NavLink to="/store" className="cta-button">
            Home
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
}
