import { NavLink } from 'react-router-dom';
import { Faq } from '../components/Faq';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';

import '../styles/pages/checkoutRedirect.scss';

export function CheckoutFailed() {
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="modal">
          <i className="fas fa-shopping-basket"></i>
          <h1>
            Your purchase was not completed. If you would like to try again
            please click the button below.
          </h1>
          <NavLink to={'/store'}>Try Again</NavLink>
        </div>
        <Faq />
      </div>
      <Footer />
    </>
  );
}
