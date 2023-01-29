import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';

export function CheckoutFailed() {
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <h1> Failed</h1>
      </div>
      <Footer />
    </>
  );
}
