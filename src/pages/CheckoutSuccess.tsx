import { NavLink } from 'react-router-dom';
import { Faq } from '../components/Faq';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';

import '../styles/pages/checkoutRedirect.scss';

export function CheckoutSuccess() {
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="modal">
          <i className="fas fa-truck"></i>
          <h1>
            Thank you for your purchase. We will start processing your order as
            soon as we can!
          </h1>
          <NavLink to={'/store'}>Browse More</NavLink>
        </div>
        <Faq />
      </div>
      <Footer />
    </>
  );
}
