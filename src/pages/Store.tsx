import { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import { NavLink } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import '../styles/pages/store.scss';
import '../styles/components/productPreview.scss';
import { createDocumentPreviewStore } from 'sanity';

export function Store() {
  const [data, setData] = useState<any[]>();

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
          <div className="product-preview-container">
            {data &&
              data.map((item) => (
                <div key={item.productName} className="product-preview-wrapper">
                  <NavLink to={'/products/' + item.slug.current}>
                    <img src={urlFor(item.image && item.image[0]).url()}></img>
                    <h2>{item.brand}</h2>
                    <h1>{item.productName}</h1>
                    <p>£{item.price}</p>
                  </NavLink>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
