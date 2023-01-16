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
  if (loading && data == undefined) {
    console.log('DATA UNDEFINED', data);
    return <h1>Loading</h1>;
  }

  if (data !== undefined) {
    console.log('NOT UNDEFINED', data);
  }

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="product-preview">
          {data ? <StoreProducts data={data} /> : <h1>Loading store</h1>}
        </div>
      </div>
    </>
  );
}
