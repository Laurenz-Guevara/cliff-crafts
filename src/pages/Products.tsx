import { NavBar } from '../components/NavBar';
import { Product } from '../components/Product';

import '../styles/pages/store.scss';
import '../styles/components/productPreview.scss';

export function Products() {
  return (
    <>
      <NavBar />
      <Product />
    </>
  );
}
