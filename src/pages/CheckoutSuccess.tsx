import { Faq } from '../components/Faq';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';

export function CheckoutSuccess() {
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <h1> Success</h1>
        <Faq />
      </div>
      <Footer />
    </>
  );
}
