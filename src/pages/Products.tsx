import { Faq } from '../components/Faq';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { Product } from '../components/Product';

export function Products() {
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <Product />
        <Faq />
      </div>
      <Footer />
    </>
  );
}
