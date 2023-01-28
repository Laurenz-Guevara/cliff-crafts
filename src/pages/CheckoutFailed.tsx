import { NavBar } from '../components/NavBar';

import '../styles/pages/store.scss';

export function CheckoutFailed() {
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <h1> Failed</h1>
      </div>
      {/* <Footer /> */}
    </>
  );
}
