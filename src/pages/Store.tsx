import { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import { NavLink } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { StoreProducts } from '../components/StoreProducts';
import '../styles/pages/store.scss';
import '../styles/components/productPreview.scss';

export function Store() {
  const [data, setData] = useState<Product[]>();

  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

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
      .then(
        (data) => (
          setData(data), setLoading(false), console.log('Called useEffect')
        )
      )
      .catch(console.error);
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="product-preview">
          <h1>OUR FEATURED PRODUCTS</h1>
          <StoreProducts data={data!} />
        </div>
      </div>
    </>
  );
}
