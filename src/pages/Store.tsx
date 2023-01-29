import { useState, useEffect } from 'react';
import { client } from '../../client';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { StoreProducts } from '../components/StoreProducts';

import '../styles/components/faq.scss';

export function Store() {
  const [data, setData] = useState<Product[]>();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product"]{
          brand,
          productName,
          image,
          price,
          slug,
          }`
      )
      .then((data) => setData(data))
      .catch(console.error);
  }, []);
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="product-preview">
          {data && <StoreProducts data={data} />}
        </div>
      </div>
      <Footer />
    </>
  );
}
